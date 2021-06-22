let selectedCandidat = [];

function candidatList() {
    $.ajax({
        url: "/api/getCandidatVtwo",
        method: "get",
        success: function (result) {
            theResult = result.data;
            currentpage = 1;
            lastIndexOfTable = 20;
            validationPagination(theResult);
        },
    });
}
candidatList();

function getCompagnes() {
    $.ajax({
        url: "/api/getCompagne",
        method: "get",
        data: {
            langueID: langueID,
        },
        success: function (result) {
            compagneToList(result.data);
        },
    });
}
getCompagnes();

function compagneToList(compagne) {
    var select = `<select class="compagneSelect" style=" font-weight:bold" id="compagneSelect"><option selected disabled>Choisir la compagne</option>`;
    compagne.forEach((e) => {
        select = select + `\n<option value="${e.id}"}> ${e.label} </option>`;
    });
    select = select + "</select>";
    document.querySelector(".compagneList").innerHTML = select;
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
                .includes(e.target.value.toString().toUpperCase()) ||
            abs.Pseudo.toString()
                .toUpperCase()
                .includes(e.target.value.toString().toUpperCase())
        );
    });
    validationPagination(filtredData);
});

function UpdateCompagneCandidat() {
    var selectedOption = document.getElementById("compagneSelect");
    var affectationFormation =
        selectedOption.options[selectedOption.selectedIndex].value;
    $.ajax({
        url: "/api/UpdateCompagneCandidat",
        method: "get",
        data: {
            data: selectedCandidat,
            compagne: affectationFormation,
        },
        success: function () {
                selectedCandidat = [];
                candidatList();
                validationPagination(theResult);
                document.getElementById("confirm").style.display = "none";
        },
    });
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
//