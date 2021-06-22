var id_campaign=0;

function logout()
{
    $.post(
        {
            url: "api/operation/logout.php",
            data:
            {
                Type: "logout",
                Detail: "user logout from the app"
            },
                success: function(result)
                {
                    
                    console.log(result);
                }
        });

    $.post(
        {
            url: "api/session/deleteUserID.php",
            data:
            {
                Emp:1
            },
                success: function(result)
                {
                    window.location.href = "index.php";
                }
        });
}


$.post(
    {
        url: "api/campagne/getNameByAgent.php",
        success: function(result)
        {
            try {
                jsonResult = JSON.parse(result);
                console.log(jsonResult[0].id_campaign);
                $(".campaign").text(jsonResult[0].nom_campaign);
                id_campaign=jsonResult[0].id_campaign;
                RdvCount();
            } catch {
                alert("aucune campaign !!");
            }
        }
    });


    function AddNewRDV()
    {
        var respanse = confirm("are you sure ?");
        if(respanse == true)
        {
            $.post(
                {
                    url: "api/RDV/new.php",
                    data:
                    {
                        idCam : id_campaign
                    },
                    success: function(result)
                    {
                        console.log(result);
                        RdvCount();
                    }
                });
        }
        
    }


function home()
{
    $.post
        (
            {
                url: "api/emp/getByID2.php",
                success: function(result)
                {
                    console.log(result);
                    result = JSON.parse(result);
                    if (result[0].Type==7) {
                        window.location.href="rh.php"
                    } 
                    if(result[0].Type==6){
                        window.location.href="admin.php"
                    }else
                    if (result[0].Type==5) {
                        window.location.href="chef.php"
                    } else
                    if (result[0].Type==4) {
                        window.location.href="sup.php"
                    } else
                    if (result[0].Type==3) {
                        window.location.href="coach.php"
                    }
                    if (result[0].Type==1) {
                        window.location.href="agent.php"
                    }
                }
            }
        );
}


function RdvCount()
{
    $.post(
        {
            url: "api/RDV/byEmpAndCampaign.php",
            success: function(result)
            {
                console.log("//////////////////////////////");
                console.log(JSON.parse(result)[0].nbr);
                $(".nbrRDV").text("Le nombre de vos RDVs pour cette campagne est : "+JSON.parse(result)[0].nbr);
            }
        });
}