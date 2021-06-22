function formationList() {
    $.ajax({
        url: "/api/getFormation",
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

function closeConfirm() {
    document.getElementById("confirm").style.display = "none";
}

$("#addFormationForm").submit(function (e) {
    e.preventDefault();
    var dateDebut = document.querySelector("#dateDebut").value;
    var dateFin = document.querySelector("#dateFin").value;
    var max = document.querySelector("#max").value;
    var type = document.querySelector("#type").value;
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
            FormationType: 1,
            langueID:langueID
        },
        success: function () {
            formationList();
            formationPagination(theResult);
            document.getElementById("validation").style.display = "none";
            document.querySelector("#dateDebut").value = "";
            document.querySelector("#dateFin").value = "";
            document.querySelector("#max").value = "";
            document.querySelector("#type").value = "";
            document.querySelector("#label").value = "";
        },
    });
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
