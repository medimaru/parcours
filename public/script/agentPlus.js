function logout()
{
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



// $.post(
//     {
//         url: "api/session/getUserID.php",
//         data:
//         {
//             Emp:1
//         },
//             success: function(result)
//             {
//                 if(result=="false")
//                 {
//                     window.location.href="index.php";
//                 }
//             }
//     });