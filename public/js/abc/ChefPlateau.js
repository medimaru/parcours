let dataCoef = [
    {
        objectifRdv: 3,
        objectifAppel: 0.00136,
        objectifAbsence: 100,
        CoefRdv: 40,
        CoefAbsence: 25,
        CoefAppel: 35,
        JourPrevue: 5.5,
        A: 0.95,
        B: 0.65,
    },
];
let Result; // stocker les donnees du tableaux csv Recuperer
let dataAbsence = [];
let AJAXdata =[];

const input = document.getElementById("fichier-CSV");
var reader = new FileReader(); 

function getIDs(list){
    console.log(list);
    return new Promise((resolve,reject)=>{
        $.ajax({
            url: "/api/getIDs",
            method: "get",
            data:{
                pseudo:{data:list}
            },
            success: function (result) {
                console.log(result);
                if (result.etat = 1) {
                    resolve(result.data)
                } else {
                    reject(result.msg)
                }
            },
        });
    })
}


input.addEventListener("change", (event) => {
    if (event.target.value.length === 0) {
        console.log("Pas de fichier selectionner !");
    } else {
        reader.readAsText(input.files[0]); 
        reader.onload = function () {
            let dataCSV = reader.result.toString().split("\n");
            let result = [];
            let headers = dataCSV[0].split(";");
            for (let i = 1; i < dataCSV.length - 1; i++) {
                // ! REMARQUE Si un  Agent Manque  enleve -1
                let obj = {};
                let currentline = dataCSV[i].split(";");
                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = currentline[j];
                }
                result.push(obj); 
            }
            Result = fixData(result); // fixData() => Formatter les donnees // NewDate()=> calcule des Points et classement
            // openSearch(); // Afficher la bare Rechercher par Agent et classement
            // openValidation(); // Afficher la bare Archiver les donner du tableau
            // searchClassement(); // Excuter le listner de la Fonction Rechercher

            // console.log(fixData(result));
            var pseudoList =Result.map(e=>{
                return (e.Agent).trim()
            })
            getIDs(pseudoList)
            .then(res=>{
                AJAXdata = res;
                Result = res.map(e=>{
                    var dbData = Result.find(d=>(
                        (d.Agent).toUpperCase() == (e.pseudo).toUpperCase()
                    ));

                    return {
                        ...e,
                        rdv: dbData.rdv,
                        Appel: dbData.Appel,
                    }
                })
                theResult = NewData(Result);
                console.log(theResult);
                classementPagination(theResult); // affiche les donnees sur tableau


            })
            .catch(error=>{
                console.log(error);
            })
        };
    }
});



function searchClassement() {
    document.querySelector("#search").addEventListener("input", (e) => {
        var filtredData = Result.filter((abs) => {
            return (
                abs.Agent.toString() 
                    .toUpperCase()
                    .includes(e.target.value.toUpperCase()) ||
                abs.Classement.toString() 
                    .toUpperCase()
                    .includes(e.target.value.toString().toUpperCase())
            );
        });
        classementPagination(filtredData);
    });
}

function RDVresult(data , coef ,obj) {
    // ! Calcule Coeficient RDV
    // ! Nombre de RDV data
    if (obj !== 0) {
        let ResultatRdv = data / obj;
        let ResultatFinaleRdv = ResultatRdv * coef;
        return ResultatFinaleRdv;
    }
    return 0;
}

function Appelresult(data, NbrAppels , coef , obj) {
    // ! Calcule Coeficient Appel
    // ! Nombre de Appel and RDV data
    let TR = data / NbrAppels;
    if (obj !== 0) {
        let ResultatAppel = TR / obj;
        let ResultatFinaleAppel = coef * ResultatAppel;
        return ResultatFinaleAppel;
    } else return 0;
}

function Absenceresult(data , coef , obj) {
    // ! Calcule Coeficient Absence
    // ! Nombre de Absence data
    if (obj !== 0) {
        let JourTravailler =
            ((1 - data) / 1) * 100;
        let ResultatAbsence = JourTravailler / obj;
        let ResultatFinaleAbsence = ResultatAbsence * coef;
        return ResultatFinaleAbsence;
    } else return 0;
}

function Finaleresult(RDV, ABS, APP) {
    // Calcule Finale data
    let Somme = RDV + ABS + APP;
        let Point =
            Somme /
            (dataCoef[0].CoefRdv +
                dataCoef[0].CoefAppel +
                dataCoef[0].CoefAbsence);
        return Point;
}

function Classementresult(a) {
    // ! Definir Classement
    return a >= dataCoef[0].A
        ? "A"
        : a < dataCoef[0].B
        ? "C"
        : a < dataCoef[0].A && a >= dataCoef[0].B
        ? "B"
        : void 0;
}

function NewData(data) {
    // ! NewDate()=> calcule des Points et classement
    return data.map((e) => {
        let RDVFinale = RDVresult(Number(e.rdv ), e.rdvCoef , e.rdvObj);
        let AppelFinale = Appelresult(Number(e.rdv), Number(e.Appel) , e.appelCoef ,e.appelObj);
        let AbsenceFinale = Absenceresult(Number(e.Absence) ,e.absenceCoef , e.absenceObj);
        let Point = Finaleresult(RDVFinale, AbsenceFinale, AppelFinale);
        let Classement = Classementresult(Point);
        return {
            
            "id":e.id,
            "Pseudo": e.pseudo,
            "RDV":e.rdv,
            "Appels":e.Appel,
            "Absence":e.Absence,
            rdvCoef:e.rdvCoef,
            rdvObj:e.rdvObj,
            absenceCoef:e.absenceCoef,
            absenceObj:e.absenceObj,
            appelCoef:e.appelCoef,
            appelObj:e.appelObj,
            RDVFinale,
            AppelFinale,
            AbsenceFinale,
            Point,
            Classement,
        };
    });
}

function fixData(data) {
    // ! fixData() => Formatter les donnees
    return data.map((e) => {
        let Agent = e.Agent;
        let rdv = e['"Rendez vous"'];
        let Appel = e.Appels;
        let Absence = CountAbsence(dataAbsence, e);
        return { Agent, rdv, Appel, Absence };
    });
}

function CountAbsence(dataAbsence, dataCSV) {
    // ! count des absence par Agent par nom !!!
    let count = 0;
    for (let i = 0; i < dataAbsence.length; ++i) {
        if (dataAbsence[i].nom === dataCSV.Agent) count++;
    }
    return count;
}

function getAbsence() {
    $.ajax({
        url: "/api/listAbsence",
        method: "get",
        success: function (result) {
            dataAbsence = result.data;
        },
    });
}

getAbsence();

function archiveData() {
    // ? Archiver les data du Tableau vers Base de donnees
    date = document.getElementById("dateDebut").value;
    let data = Result.map((element) => {
        return { ...element, date };
    });
    console.log(data);
    $.ajax({
        url: "/api/pushData",
        method: "get",
        data: {
            data: JSON.stringify(data),
        },
    });
    document.getElementById("confirm").style.display = "none";
    openArchiveForm(); 
}

document.querySelector('#backup').addEventListener('click',function(){
    if (theResult.length == 0) {
        return;
    }
    var dataToSend = theResult.map(e=>{
        return {
            idCandidat:e.id,
            rdv:e.RDV,
            Appel:e.Appels,
            Absence:e.Absence,
            RDVFinale:e.RDVFinale,
            AppelFinale:e.AppelFinale,
            AbsenceFinale:e.AbsenceFinale,
            Point:e.Point,
            Classement:e.Classement,
            compagne : AJAXdata.find(d=>(d.id == e.id)).compagne
        }
    })
    console.log(dataToSend);

    $.ajax({
        url: "/api/insertArchieve",
        method: "get",
        data:{
            data:{archieve:dataToSend}
        },
        success: function (result) {
            console.log(result);
            if (result.etat == 1) {
                alert("les donnees sont ajoutes !")
            } else {
                alert("Erreure d'ajoue !")
            }
        },
    });

})

// var confirm = document.getElementById("confirm");
// var btn = document.getElementById("ValiderBtn");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   confirm.style.display = "block";
// }
// span.onclick = function() {
//   confirm.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == confirm) {
//     confirm.style.display = "none";
//   }
// }