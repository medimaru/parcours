
var MrPseudos =[];
var MsPseudos =[];
var updatedData = [];
function getIntraUsedPseudo(){
    $.ajax({
        url: "http://intranet.notoriety-group.com/externalAPI/getUsedPseudo",
        method: "get",
        data:{
            
        },
        success: function (result) {
            getFinalPseudos(result.data);
            
        }
    });
}getIntraUsedPseudo()

function getFinalPseudos(usedPseudo){
    return new Promise((res , err)=>{
        $.ajax({
            url: "/api/getPseudos",
            method: "get",
            data:{
                data :{
                    langue :langueID,
                    usedPseudos :usedPseudo
                }
            },
            success: function (result) {
                if (result.etat=1) {
                    MsPseudos = result.data.msPseudo ;
                    MrPseudos = result.data.mrPseudo ;
                    getCandidat()
                    .then(res=>{
                        theResult = res;
                        pagination(theResult);
                    }).catch(err=>{
                        console.log(err);
                    })

                } else {
                    alert('erreur de Pseudos !');
                }
            }
        });
    });
}

function getCandidat(data) {
    return new Promise((res,err)=>{
        $.ajax({
            url: "/api/pseudo/getCandidat",
            method: "get",
            data:{
                langue : langueID
            },
            success: function (result) {
                if (result.etat == 1) {
                    res(result.data)
                } else {
                    err(result.msg)
                }
            }
        });
    })
}

function makeSelect(sex){
    console.clear();

    var PseudosWithCorrectSex = [
        ...(sex==1 ? MsPseudos : MrPseudos)
    ];

    var selectedPseudos = theResult.filter(e=>e.pseudo != 'aucun')

    var NotSelectedPseudos = PseudosWithCorrectSex.map(e=>{
        if (selectedPseudos.filter(item=> e.pseudos == item.pseudo).length == 0) {
            return e
        }
    });
    console.log(NotSelectedPseudos);

    var options = "";
    NotSelectedPseudos.map(e=>{
        options = options + `<option value="${e.id}">${e.pseudo}</option>`;
    })
    return options
}


function onSelectOption(item , userID){
    var pseudo = item.options[item.selectedIndex].text
    theResult.forEach(e => {
        if (e.id == userID) {
            e.pseudo = pseudo
        }
    });
    document.querySelector(`td[data-cID="${userID}"]`).innerHTML = pseudo

    if(updatedData.filter(e=>(e.id == userID)).length==0){
        updatedData = [...updatedData , {
            id : userID,
            pseudo :item.value
        }]
    }else{
        updatedData.find(e=>(e.id == userID)).pseudo = item.value
    }
}

function UpdateValidation() {
    if (updatedData.length == 0) {
        return
    }
    var tempTable = updatedData;
    var isDouble =false;
    temptable = tempTable.map(e=>{
        if (updatedData.filter(item=>item.pseudo == e.pseudo).length>1) {
            isDouble = true;
        }
    })

    if (isDouble) {
        alert("il'ya des doubles pseudo!")
        return;
    }

    $.ajax({
        url: "/api/affectPseudos",
        method: "get",
        data:{
            data:{pseudos:updatedData}
        },
        success: function (result) {
            console.log(result);
            if (result.etat=1) {
                alert('L\'affectation a ete faite parfaitement !')
            } else {
                alert('Erreure de l\'affectation !')
            }
        }
    });
}

