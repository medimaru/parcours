var emp ;
function login(){
    var pseudo = document.querySelector('#Pseudo').value;
    var password = document.querySelector('#Password').value;
    $.get(
        {
            url: "/cnx",
            data:{
                pseudo : pseudo,
                password : password
            },
                success: function(result)
                {
                    console.log(result);
                    if (result.etat == 1) {
                        window.location.href = result.emp.root
                    }
                }
        });
}



    

