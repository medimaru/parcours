function home(x)
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
                }
            }
        );
}

function fillcampaigns(list)
{
    $("#id_client").html("");
    list.forEach(element => {
        $("#id_client").append('<option value="'+element.id_fournisseur+'">'+element.nom_fournisseur+'</option>');
    });
}
$.post(
    {
        url: "api/client/all.php",
        data:
        {
            Emp:1
        },
        success: function(result)
        {
            console.log(JSON.parse(result));
            fillcampaigns(JSON.parse(result))
        }
    });

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


function addClient()
{
    $.post(
        {
            url: "api/client/new.php",
            data:
            {
                name: $("#Client").val()
            },
            success: function(result)
            {
                var theResult = JSON.parse(result);
                console.log(theResult);
                if (theResult=="0") {
                    alert("this CLIENT already exist !");
                    
                }
                if(theResult==true){
                    alert("Cette operation a ete bien enregistrer !");
                    $("#Client").val("");
                    $.post(
                        {
                            url: "api/client/all.php",
                            data:
                            {
                                Emp:1
                            },
                            success: function(result)
                            {
                                console.log(JSON.parse(result));
                                fillcampaigns(JSON.parse(result))
                            }
                        });
                }
                if(theResult.lenght >=5){
                    alert("Erreure de connection avec la base de donnees !");
                }
            }
        });
}


function addCampaign()
{
    $.post(
        {
            url: "api/campagne/new.php",
            data:
            {
                name: $("#campaign").val(),
                client : $("#id_client").val()
            },
            success: function(result)
            {
                var theResult = JSON.parse(result);
                console.log(theResult);
                if (theResult=="0") {
                    alert("this CLIENT already exist !");
                    
                }
                if(theResult==true){
                    alert("Cette operation a ete bien enregistrer !");
                    $("#campaign").val("");
                }
                if(theResult.lenght >=5){
                    alert("Erreure de connection avec la base de donnees !");
                }
            }
        });
}