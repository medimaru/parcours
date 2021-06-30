let selectedCandidat = [];
$("#ClassementCForm").submit(function (e) {
    e.preventDefault();
    candidatList();
});

function candidatList() {
    $.ajax({
        url: "/api/getClassementC",
        method: "get",
        data: {
            dateDebut: document.getElementById("dateDebut").value,
            dateFin: document.getElementById("dateFin").value,
            langue: 2,
        },
        success: function (result) {
            theResult = result.data;
            theAgent = result.agent;
        console.log(theAgent);
            calcule();
            document.getElementById("confirmsecond").style.display = "none";
            document.getElementById("Recycle").disabled = false;
            document.getElementById("nonRecycle").disabled = false;
            document.getElementById("nonRecycle").style.background = "#353535";
            document.getElementById("Recycle").style.background = "#353535";
        },
    });
}

function calcule() {
    let A = [];
    let B = [];

    theAgent.forEach((element) => {
        var temp = theResult.filter((e) =>{return e.idCandidat == element.idCandidat})
        temp = temp.map(e=>{
            return {...e,'dejaR':element.dejaR}
        })
        A=[...A,temp];
    });
    console.log(A);
    for (var i = 0; i < A.length; i++) {
        let somme = 0;
        A[i].forEach((Adata) => {
            return (somme = somme + Number(Adata.Point));
        });
        Moy = somme / A[i][0].CountName;
        console.log(A[i]);
        B = [
            ...B,
            {
                idCandidat: A[i][0].idCandidat,
                Agent: A[i][0].Agent,
                A: A[i][0].NbrA,
                B: A[i][0].NbrB,
                C: A[i][0].NbrC,
                Point: Number(A[i][0].Point).toFixed(2),
                somme: somme.toFixed(2),
                Moyenne: (somme / A[i][0].CountName).toFixed(2),
                MoyenneABC: moyenne((somme / A[i][0].CountName).toFixed(2)),
                "deja recycle": A[i][0].dejaR,
            },
        ];   
    }
    B = B.filter((e) => e.MoyenneABC == "C");
    validationPagination(B);
}


function moyenne(moyenne) {
    return moyenne >= 0.94
        ? "A"
        : moyenne < 0.63
        ? "C"
        : moyenne < 0.94 && moyenne >= 0.63
        ? "B"
        : void 0;
}


document.querySelector("#search").addEventListener("input", (e) => {
    var filtredData = theResult.filter((abs) => {
        return (
            abs.id.toString().includes(e.target.value) ||
            abs.nom
                .toString()
                .toUpperCase()
                .includes(e.target.value.toString().toUpperCase())
        );
    });
    validationPagination(filtredData);
});

$("#recycleForm").submit(function (e) {
    e.preventDefault();
    recycle();
});

function recycle() {
    $.ajax({
        url: "/api/UpdateRecyclageCandidat",
        method: "get",
        data: {
            data: selectedCandidat,
            message: document.getElementById("Cause").value,
            etatCandidat: 1,
            validation: 2,
        },
        success: function () {
            selectedCandidat = [];
            candidatList();
            document.getElementById("confirmRecycle").style.display = "none";
            closeconfirmRecycle();
        },
    });
}

$("#norecycleForm").submit(function (e) {
    e.preventDefault();
    $.ajax({
        url: "/api/UpdateNoRecyclageCandidat",
        method: "get",
        data: {
            data: selectedCandidat,
            message: document.getElementById("cause").value,
            etatCandidat: 2,
            validation: 0,
        },
        success: function () {
            selectedCandidat = [];
            candidatList();
            document.getElementById("noRecycle").style.display = "none";
            closeconfirmNoRecycle();
        },
    });
});

function toggelSelect(ID) {
    if (document.querySelectorAll("#emp_" + ID + ":checked").length === 1) {
        var emp = theResult.find((e) => {
            return e.idCandidat == ID;
        });
        selectedCandidat = [...selectedCandidat, emp.idCandidat];
    } else {
        var emp = selectedCandidat.find((e) => {
            return e.idCandidat == ID;
        });
        selectedCandidat.splice(selectedCandidat.indexOf(emp), 1);
        selectedCandidat.filter(e=> e != ID);
    }
}


var closeBtn = document.getElementById("close");

window.onclick = function (event) {

    if (event.target == confirmRecycle) {
        closeconfirmRecycle();
    }
    if (event.target == noRecycle) {
        closeconfirmNoRecycle();
    }
};


var confirmRecycle = document.getElementById("confirmRecycle");
var closeBtn = document.getElementById("closeRec");
function closeconfirmRecycle() {
    confirmRecycle.style.display = "none";
}

closeBtn.onclick = function () {
    closeconfirmRecycle();
};

var noRecycle = document.getElementById("noRecycle");
var closeBtn = document.getElementById("closeRec2");
function closeconfirmNoRecycle() {
    noRecycle.style.display = "none";  
}

closeBtn.onclick = function () {
    closeconfirmNoRecycle();
};



