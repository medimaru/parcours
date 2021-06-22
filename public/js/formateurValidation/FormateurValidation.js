let selectedCandidat = [];
let IDglobale;
let Compagnes;

function candidatList() {
    $.ajax({
        url: "/api/getCandidatV1",
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


function UpdateValidationCandidat() {

    $.ajax({
        url: "/api/UpdateValidationCandidat",
        method: "get",
        data: {
            data: selectedCandidat,
            validation: 2,
        },
        success: function (result) {
            
                selectedCandidat = [];
                candidatList();
                chargeePagination(theResult);
                document.getElementById("confirm").style.display = "none";
        },
    });
}



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
////// window event
window.onclick = function (event) {
    if (event.target == confirmation) {
        closeConfirm();
    }

};
