var selectedCompagne;
var confirm = document.getElementById("confirm");
var confirmUpdate = document.getElementById("confirmUpdate");
function getCompagnes() {
    $.ajax({
        url: "/api/getCompagne",
        method: "get",
        data: {
            langueID: langueID,
        },
        success: function (result) {
            ObjectifPagination(result.data);
        },
    });
}

function getNotes(callback) {
    $.ajax({
        url: "/api/getNotes",
        method: "get",
        success: function (result) {
            Notes = result.data;
            if (callback) callback();
        },
    });
}
getNotes(getCompagnes);

$("#ModifObjectifForm").submit(function (e) {
    e.preventDefault();
    var objectifAbsence = document.querySelector("#AbsenceObjectif").value;
    var coefAbsence = document.querySelector("#AbsenceCoefficient").value;
    var objectifRdv = document.querySelector("#RDVobjectif").value;
    var coefRdv = document.querySelector("#RDVcoefficient").value;
    var objectifAppel = document.querySelector("#AppelObjectif").value;
    var coefAppel = document.querySelector("#AppelCoefficient").value;
    $.ajax({
        url: "/api/UpdateCompagneObjectif",
        method: "get",
        data: {
            compagneID: selectedCompagne,
            absence: "absence",
            objectifAbsence: objectifAbsence,
            coefAbsence: coefAbsence,
            rdv: "rdv",
            objectifRdv: objectifRdv,
            coefRdv: coefRdv,
            appel: "appel",
            objectifAppel: objectifAppel,
            coefAppel: coefAppel
        },
        success: function () {
            getNotes(getCompagnes);
            selectedCompagne =0;
        },
    });
    closeConfirmUpdate();
    closeConfirm();
});

function ModifierCompagne(id) {
    document.getElementById("confirm").style.display = "block";
    var Data = Notes.filter((e) => {
        return e.compagne === Number(id);
    });
    document.getElementById("AbsenceObjectif").value = Data[0].objectif;
    document.getElementById("AbsenceCoefficient").value = Number(Data[0].coef);
    document.getElementById("AppelObjectif").value = Data[1].objectif;
    document.getElementById("AppelCoefficient").value = Data[1].coef;
    document.getElementById("RDVobjectif").value = Data[2].objectif;
    document.getElementById("RDVcoefficient").value = Number(Data[2].coef);
    selectedCompagne = id;
}


function closeConfirm() {
    confirm.style.display = "none";
}
function closeConfirmUpdate() {
    confirmUpdate.style.display = "none";
}
function confirmUpdateOpen() {
    confirmUpdate.style.display = "block";
}
window.onclick = function (event) {
    if (event.target == confirm) {
        confirm.style.display = "none";
    }
    if (event.target == confirmUpdate) {
        confirmUpdate.style.display = "none";
    }
};
