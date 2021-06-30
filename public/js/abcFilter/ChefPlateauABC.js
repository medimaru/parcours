function candidatList() {
    $.ajax({
        url: "/api/getClassementDate",
        method: "get",
        data: {
            dateDebut: document.getElementById("dateDebut").value,
            dateFin: document.getElementById("dateFin").value,
            langue: 2,
        },
        success: function (result) {
            console.log(result);
            theResult = result.data;
            theAgent = result.agent;
            calcule();
        },
    });
}

function calcule() {
    let A = [];
    let B = [];

    theAgent.forEach((element) => {
        A = [...A, theResult.filter((e) => e.idCandidat == element.idCandidat)];
    });
    for (var i = 0; i < A.length; i++) {
        let somme = 0;
        A[i].forEach((Adata) => {
            return (somme = somme + Number(Adata.Point));
        });
        console.log(A[i]);
        Moy = somme / A[i][0].CountName;
        B = [
            ...B,
            {
                Agent: A[i][0].Agent,
                A: A[i][0].NbrA,
                B: A[i][0].NbrB,
                C: A[i][0].NbrC,
                Point: A[i][0].Point,
                somme: somme.toFixed(2),
                Moyenne: (somme / A[i][0].CountName).toFixed(2),
                MoyenneABC: moyenne((somme / A[i][0].CountName).toFixed(2)),
            },
        ];
    }
    classementPagination(B);
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
