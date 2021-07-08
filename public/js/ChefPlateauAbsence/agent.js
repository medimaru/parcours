const input = document.getElementById("formationList");

function getformations() {
    $.ajax({
        url: "/api/getTypeFormation",
        method: "get",
        success: function (result) {
            formationToList(result);
        },
    });
}
getformations();

function formationToList(formation) {
    var select = `<select class="formationSelect" style=" font-weight:bold" id="formationSelect">`;
    formation.forEach((e) => {
        select =
            select +
            `\n<option value="${e.id}" selected="selected">ID:${e.label}</option>`;
    });
    select = select + "</select>";
    // return select
    document.querySelector(".formationList").innerHTML = select;
}

function getAbsence() {
    $.ajax({
        url: "/api/Absent/2",
        success: function (result) {
            if (result.etat == 1) {
                currentpage2 = 1;
                lastIndexOfTable2 = 20;
                theResult=result.data
                paginationTeamAb(result.data);
            } else {
            }
        },
    });
}
getAbsence();

function getAbsenceManuel(idFormation) {
    $.ajax({
        url: "/api/Absent/" + idFormation,
        success: function (result) {
            if (result.etat == 1) {
                currentpage2 = 1;
                lastIndexOfTable2 = 20;
                theResult=result.data
                paginationTeamAb(result.data);
            }
        },
    });
}



input.addEventListener("change", () => {
    id = document.getElementById("formationSelect").value;
    getAbsenceManuel(id);
});

function ConfirmationPop(ID, type, element) {
    checkEtat = !element.checked;
    element.checked = checkEtat;
    data = theResult.find((e) => e.id === ID);
    confirm.style.display = "block";
    document.getElementById("BtnConfirmValider").onclick = function () {
        toggleAbs(data.id, type, data.formation)
            .then((res) => {
                element.checked = !element.checked;
                confirm.style.display = "none";
            })
            .catch((res) => {
                console.clear();
            });
    };
}

function toggleAbs(ID, type, formation) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "/api/toggle",
            data: {
                ID: ID,
                type: type,
                formation: formation,
            },
            success: function (result) {
                if (result.etat == 1) {
                    resolve({ etat: 1 });
                } else {
                    reject({ etat: 0 });
                }
            },
        });
    });
}

document.querySelector("#search").addEventListener("input", (e) => {
    var filtredData = theResult.filter((abs) => {
        return (
            abs.id.toString().toUpperCase().includes(e.target.value) ||
            abs.nom.toString().toUpperCase().includes(e.target.value.toString().toUpperCase()) ||
            abs.prenom.toString().toUpperCase().includes(e.target.value.toString().toUpperCase()) 
        );
        
    });
    paginationTeamAb(filtredData);
});

    var confirm = document.getElementById("confirm");
    var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function () {
        confirm.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == confirm) {
            confirm.style.display = "none";
        }
    };

function closeConfirm() {
    confirm.style.display = "none";
}