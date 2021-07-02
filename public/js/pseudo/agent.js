var MrPseudos =[];
var MsPseudos =[];
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
                console.log(result);
                if (result.etat=1) {
                    MsPseudos = result.data.msPseudo ;
                    MrPseudos = result.data.mrPseudo ;
                    console.log({MrPseudos,MsPseudos});


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
getCandidat()
.then(res=>{
    console.log(res);
    theResult = res;
    pagination(theResult);
}).catch(err=>{
    console.log(err);
})

