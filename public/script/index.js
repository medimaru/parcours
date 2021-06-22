
function login()
{

    var isFound =false;
    var userID ;

    $.post(
        {
            url: "api/emp/getByLogin.php",
            data:
            {
                Pseudo : $("#Pseudo").val(),
                Password : $("#Password").val()
            },
                success: function(result)
                {
                    //console.log(result);
                    data = JSON.parse(result);
                    console.log(data);
                    if(data.ID != null)
                    {
                        isFound=true;
                        userID = data.ID;
                        
                        // addint the loging operation to the database
                        $.post(
                            {
                                url: "api/operation/putByID.php",
                                data:
                                {
                                    Emp:userID,
                                    Type: "login",
                                    Detail: "user connects to the app"
                                },
                                    success: function(result)
                                    {
                                        
                                        $.post(
                                            {
                                                url: "api/session/userID.php",
                                                data:
                                                {
                                                    Emp:userID
                                                },
                                                    success: function(result)
                                                    {
                                                        console.log(result);
                                                        console.log(data.Type);
                
                                                        redirect(data.Type);
                                                    }
                                            });
                                    }
                            });

                    }
                    console.log(result);
                }
        });
}




function redirect(type)
{
    if(type==1)
    {
        window.location.href = "agent.php";
    }
    if(type==2)
    {
        window.location.href = "agent.php";
    }
    if(type==3)
    {
        window.location.href = "coach.php";
    }
    if(type==4)
    {
        window.location.href = "sup.php";
    }
    if(type==5)
    {
        window.location.href = "chef.php";
    }
    if(type==6)
    {
        window.location.href = "admin.php";
    }
    if(type==7)
    {
        window.location.href = "rh.php";
    }
    if(type==8)
    {
        window.location.href = "rh.php";
    }
}

$('#Password').keyup(function(e){
    if(e.keyCode == 13)
    {
        login();
    }
});



    

