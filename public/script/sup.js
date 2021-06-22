// //global variables for paginations and the index of the row selected
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
    
var currentpage =1
var lastIndexOfTable = 20;
var theResult;

var user = "coach";

var ID ;

$.post
(
    {
        url: "api/session/getUserID.php",
        data:
        {
            userName : ""
        },
        success: function(result)
        {
            ID = result;
            getCoachs(ID);
        }
    }
);

function getCoachs(userID)
{
    $.post
    (
        {
            url: "api/emp/getCoachs.php",
            data:
            {
                id : userID
            },
            success: function(result)
            {
                theResult = JSON.parse(result);
                console.log(theResult);
                pagination (theResult);
            }
        }
    );
}


// the pagination function for the array of objects
function pagination (data)
{
    var numRow = data.length ;
    var numPages =Math.ceil(numRow /20) ;
    var lastIndexOfTable = 0;

    if(numPages == currentpage)
    {
        lastIndexOfTable = ((currentpage-1)*20)+(numRow % 20);
    }
    else
    {
        lastIndexOfTable = (currentpage*20)-1;
    }


    
    
    //get the header of the table 
    var contentH = "";
    for(prop in data[0])
    {
        contentH += "<th>"+prop+"</th>";
    }

    var contentB = "";

    for(var i = ((currentpage-1)*20) ; i < lastIndexOfTable ; i++)
    {
        contentB +="<tr><td>"+
                    data[i].ID + "</td><td>"+
                    data[i].Pseudo + "</td><td>"+
                    data[i].Prenom + "</td><td>"+
                    data[i].Nom + "</td><td>"+
                    data[i].DateRec + "</td><td>"+
                    data[i].Contrat + "</td><td>"+
                    data[i].Travail + "</td><td>"+
                    data[i].Password + "</td><td>"+
                    data[i].Type + "</td><td>"+
                    data[i].Chef + "</td><td>"+
                    data[i].Session + "</td><td>"+
                    "<button class =\"info\" id=\""+data[i].ID+"\" onclick=\"goToInfo(this)\">>></td></tr>";
    }

    $(".content").html("");
    $(".content").html('<table border="4"><thead><tr>'+contentH+'</tr></thead><tbody>'+contentB+'</tbody></table>');


    
    var contentP = ""
    for(var i = 0 ; i < numPages ; i++)
    {
        contentP +='<li onclick="getByPage(this)" id="p'+(i+1)+'">'+(i+1)+'</li>';
    }
    $(".pages").html(contentP);
}

//changing the content of the table by the number of the page we click
function getByPage(element)
{
    currentpage = $(element).html();
    pagination (theResult)
}



function goToInfo(element)
{
    if(user=="coach")
    {
        user = "agent"
        console.log($(element).attr("id"));
        $.post
        (
            {
                url: "api/emp/getAgents.php",
                data:
                {
                    id : $(element).attr("id")
                },
                success: function(result)
                {
                    //console.log(result);
                    theResult = JSON.parse(result);
                    pagination(theResult);
                }
            }
        );
    } else 
    if(user=="agent")
    {
        console.log($(element).attr("id"));
        $.post
        (
            {
                url: "api/session/setUserID.php",
                data:
                {
                    Emp : $(element).attr("id")
                },
                success: function(result)
                {
                    window.location.href="setEmp.html";
                }
            }
        );
    }

}


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
