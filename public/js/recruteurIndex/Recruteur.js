let selectedCandidat = [];
let IDglobale;
let Compagnes;
function candidatList() {
    $.ajax({
        url: "/api/getNewCandidat",
        method: "get",
        data: { langueID: langueID },
        success: function (result) {
            theResult = result.data;
            currentpage = 1;
            lastIndexOfTable = 20;
            chargeePagination(theResult);
        },
    });
}
candidatList();
function getformations() {
    $.ajax({
        url: "/api/getFormationRecruteur",
        method: "get",
        data: { langueID: langueID },
        success: function (result) {
            formationToList(result.data);
        },
    });
}
getformations();
function updateFormationCandidat() {
    var selectedOption = document.getElementById("formationSelect");
    var affectationFormation =
        selectedOption.options[selectedOption.selectedIndex].value;
    $.ajax({
        url: "/api/UpdateFormationCandidat",
        method: "get",
        data: {
            data: selectedCandidat,
            Formation: affectationFormation,
            validation: 1,
        },
        success: function (result) {
            if (result == 1) {
                selectedCandidat = [];
                candidatList();
                chargeePagination(theResult);
                document.getElementById("confirm").style.display = "none";
            } else {
                document.getElementById("confirm").style.display = "none";
                document.getElementById("ErreurAffectation").style.display ="block";
            }
        },
    });
}
$("#modificationAgent").submit(function (e) {
    e.preventDefault();
    $.ajax({
        url: "/api/UpdateCandidat/" + IDglobale,
        method: "get",
        data: {
            Nom: document.getElementById("nom").value,
            Prenom: document.getElementById("prenom").value,
            Telephone: document.getElementById("telephone").value,
            CIN: document.getElementById("CIN").value,
            Experience: document.getElementById("experience").value,
            Nationalite: document.getElementById("nationalite").value,
            Email: document.getElementById("email").value,
            Adresse: document.getElementById("adresse").value,
        },
        success: function () {
            closeConfirmForm();
            closeValidation();
            candidatList();
        },
    });
});
document.querySelector("#search").addEventListener("input", (e) => {
    var filtredData = theResult.filter((abs) => {
        return (
            abs.id.toString().includes(e.target.value) ||
            abs.nom
                .toString()
                .toUpperCase()
                .includes(e.target.value.toString().toUpperCase()) ||
            abs.prenom
                .toString()
                .toUpperCase()
                .includes(e.target.value.toString().toUpperCase())
        );
    });
    chargeePagination(filtredData);
});
function formationToList(formation) {
    var select = `<select class="formationSelect" style=" font-weight:bold" id="formationSelect"><option selected disabled>Choisir la formation</option>`;
    formation.forEach((e) => {
        select =
            select +
            `\n<option value="${e.id}"}> - ID:${e.id} - Date Debut: ${e.dateDebut} - Label: ${e.Flabel}</option>`;
    });
    select = select + "</select>";
    document.querySelector(".formationList").innerHTML = select;
}
function toggelSelect(ID) {
    if (document.querySelectorAll("#emp_" + ID + ":checked").length === 1) {
        var emp = theResult.find((e) => {
            return e.id == ID;
        });
        selectedCandidat = [...selectedCandidat, emp];
    } else {
        var emp = selectedCandidat.find((e) => {
            return e.id == ID;
        });
        selectedCandidat.splice(selectedCandidat.indexOf(emp), 1);
    }
}
function modifierAgent(id) {
    let data = theResult.find((e) => e.id === id);
    IDglobale = id;
    document.getElementById("nom").value = data.nom;
    document.getElementById("prenom").value = data.prenom;
    document.getElementById("telephone").value = data.telephone;
    document.getElementById("experience").value = data.experience;
    document.getElementById("CIN").value = data.CIN;
    document.getElementById("nationalite").value = data.nationalite;
    document.getElementById("email").value = data.email;
    document.getElementById("adresse").value = data.adresse;
    validation.style.display = "block";
}
/////// Confirmation d'affectation
var confirmation = document.getElementById("confirm");
var btnConfirm = document.getElementById("ConfirmBtn");
var spanConfirm = document.getElementsByClassName("close Confirm")[0];
btnConfirm.onclick = function () {
    confirmation.style.display = "block";
};
spanConfirm.onclick = function () {
    closeConfirm();
};
function closeConfirm() {
    document.getElementById("confirm").style.display = "none";
}
/////// Formulaire
var validation = document.getElementById("validation");
var btnValidation = document.getElementById("ValiderForm");
var spanValidation = document.getElementsByClassName("close Validation")[0];
spanValidation.onclick = function () {
    validation.style.display = "none";
};
function closeValidation() {
    validation.style.display = "none";
}
/////// Confirmation formulaire
var validationForm = document.getElementById("confirmForm");
var erreurAffectation = document.getElementById("ErreurAffectation");
var spanValidationForm =
    document.getElementsByClassName("close FormConfirm")[0];
btnValidation.onclick = function () {
    validationForm.style.display = "block";
};
spanValidationForm.onclick = function () {
    closeConfirmForm();
};
function closeConfirmForm() {
    validationForm.style.display = "none";
}
function closeErreurAffectation() {
    erreurAffectation.style.display = "none";
}
////// window event
window.onclick = function (event) {
    if (event.target == confirmation) {
        closeConfirm();
    }
    if (event.target == validation) {
        closeValidation();
    }
    if (event.target == validationForm) {
        closeConfirmForm();
    }
    if(event.target == erreurAffectation){
        erreurAffectation.style.display = "none"
    }
};