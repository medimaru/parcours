function getIntraUsedPseudo(){
    $.ajax({
        url: "http://intranet.notoriety-group.com/externalAPI/getUsedPseudo",
        method: "get",
        data:{
            
        },
        success: function (result) {
            console.log(result);
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
            }
        });
    });
}