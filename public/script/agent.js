

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
        url: "api/operation/hoursSum.php",
        data:
        {
            Emp:1
        },
            success: function(result)
            {
                console.log(result);
            }
    });


function RDV()
{
    window.location.href = "newRDV.php";
}

