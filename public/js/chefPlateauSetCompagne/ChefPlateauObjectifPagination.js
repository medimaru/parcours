var theResult;
var Notes;

function afficher(element) {
    element.classList.toggle("active");
    element.nextElementSibling.classList.toggle("show");
}

function ObjectifPagination(data) {
    var contentH = ``;
    data.forEach((element) => {
        getNotes();
        var compagneData = Notes.filter((e) => {
            return e.compagne === element.id;
        });
        contentH += `<p class="compagne" id="compagne" onclick="afficher(this)"> <strong>Compagne ${element.label}</strong> </p>
        <div class="compagneSub" id="compagneSub" >
         <ul>ID : ${element.id}</br>
         Absence Objectif : ${compagneData[0].objectif}</br>
         Absence Coeficient : ${compagneData[0].coef}</br>
         Appel Objectif : ${compagneData[1].objectif}</br>
         Appel Coeficient : ${compagneData[1].coef}</br>
         Rendez-vous Objectif : ${compagneData[2].objectif}</br>
         Rendez-vous Coeficient : ${compagneData[2].coef}</br>
         <input class="ModifierBtn" id="ModifierBtn" type="button" value="Modifier" onclick='ModifierCompagne("${element.id}")'/>
         </div>`;
    });
    $(".content").html("");
    $(".content").html("" + contentH + "");
};
