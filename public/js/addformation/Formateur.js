function formationList() {
    $.ajax({
        url: "/api/getformation",
        method: "get",
        data:{langueId:langueID},
        success: function (result) {
            theResult = result.data;
            currentpage = 1;
            lastIndexOfTable = 20;
            formationPagination(theResult);
        },
    });
}
formationList();
function getformations() {
    $.ajax({
        url: "/api/getTypeFormation",
        method: "get",
        success: function (result) {
            formationToList(result);
            console.log(result);
        },
    });
}
getformations();

function formationToList(formation) {
    var select = `<select class="formationTypeSelect" style=" font-weight:bold" id="formationTypeSelect">`;
    formation.forEach((e) => {
        select =
            select +
            `\n<option value="${e.id}" selected="selected">${e.label}</option>`;
    });
    select = select + "</select>";
    // return select
    document.querySelector(".typeFormation").innerHTML = select;
}

function closeConfirm() {
    document.getElementById("confirm").style.display = "none";
}

$("#addFormationForm").submit(function (e) {
    e.preventDefault();
    var dateDebut = document.querySelector("#dateDebut").value;
    var dateFin = document.querySelector("#dateFin").value;
    var max = document.querySelector("#max").value;
    var type = document.querySelector("#formationTypeSelect").options[document.querySelector("#formationTypeSelect").selectedIndex].value;
    var label = document.querySelector("#label").value;

    $.ajax({
        url: "/api/addFormation",
        method: "get",
        data: {
            Type: type,
            DateDebut: dateDebut,
            DateFin: dateFin,
            Max: max,
            Label: label,
            FormationType: type,
            langueID:langueID
        },
        success: function () {
            formationList();
            formationPagination(theResult);
            document.getElementById("validation").style.display = "none";
            document.querySelector("#dateDebut").value = "";
            document.querySelector("#dateFin").value = "";
            document.querySelector("#max").value = "";
            document.querySelector("#label").value = "";
        },
    });
    console.log(type);
    closeConfirm();
});

document.querySelector("#search").addEventListener("input", (e) => {
    var filtredData = theResult.filter((abs) => {
        return (
            abs.id.toString().toUpperCase().includes(e.target.value) ||
            abs.dateDebut.toString().toUpperCase().includes(e.target.value) ||
            abs.dateFin.toString().toUpperCase().includes(e.target.value) ||
            abs.formation
                .toString()
                .toUpperCase()
                .includes(e.target.value.toString().toUpperCase())
        );
    });
    formationPagination(filtredData);
});
var confirm = document.getElementById("confirm");
var btn = document.getElementById("ValiderBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    confirm.style.display = "block";
};

span.onclick = function () {
    confirm.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == confirm) {
        confirm.style.display = "none";
    }
        if (event.target == document.getElementById("validation")) {
            document.getElementById("validation").style.display = "none";
        }
};

function closeConfirm() {
    document.getElementById("confirm").style.display = "none";
}

//// formulaire
var openbtn = document.getElementById("openbtn");
var spanForm = document.getElementsByClassName("close Validation")[0];
spanForm.onclick = function () {
    document.getElementById("validation").style.display = "none";
};
openbtn.onclick = function () {
    document.getElementById("validation").style.display = "block";
};
