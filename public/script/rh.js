$("#date").hide();

var currentpage =1
var lastIndexOfTable = 20;
var theResult;
var finalResults;




// the pagination function for the array of objects
function pagination (data)
{
    var numRow = data.length ;
    var numPages =Math.ceil(numRow /20) ;
    var lastIndexOfTable = 0;

    if(numPages == currentpage)
    {
        if ((numRow % 20) != 0) {
            lastIndexOfTable = ((currentpage-1)*20)+(numRow % 20);
        } else {
            lastIndexOfTable = 20 * currentpage;
        }
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

    for(var i = ((currentpage-1)*20) ; i <= lastIndexOfTable ; i++)
    {
        try {
            
            contentB +="<tr><td>"+
            data[i].ID + "</td><td>"+
            data[i].Pseudo + "</td><td>"+
            data[i].Prenom + "</td><td>"+
            data[i].Nom + "</td><td>"+
            data[i].DateRec + "</td><td>"+
            data[i].Fonction + "</td><td>"+
            data[i].salaire + "</td><td>"+
            "<button class =\"info\" id=\""+data[i].ID+"\" onclick=\"goToInfo(this)\">INFO</td></tr>";
        } catch (error) {
            
        }
    }

    $(".content").html("");
    $(".content").html('<table border="2"><thead><tr>'+contentH+'</tr></thead><tbody>'+contentB+'</tbody></table>');


    
    var contentP = "<ul>"
    for(var i = 0 ; i < numPages ; i++)
    {
        contentP +='<li onclick="getByPage(this)" id="p'+(i+1)+'">'+(i+1)+'</li>';
    }
    contentP += "</ul>"
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
    window.location.href="/rh/emp/set/"+$(element).attr("id")
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
                window.location.href=window.location.origin;
            }
    });
        
}

function agentList()
{
    isArchiveList = false ;
    // hiding the dateTimePicker
    $("#date").hide();

    $.post
    (
        {
            url: "api/emp/getAllAgent.php",
            data:
            {
                userName : ""
            },
            success: function(result)
            {
                $(".pages").html("");
                currentpage =1
                lastIndexOfTable = 20;
                //$(".content").html(result);
                theResult = JSON.parse(result);
                theResult = FixData(theResult);
                pagination (theResult);
                finalResults = theResult ;
            }
        }
    );
    
}
agentList()


function coachList()
{
    isArchiveList = false ;
    $("#date").hide();
    $.post
    (
        {
            url: "api/emp/getAllCoach.php",
            data:
            {
                userName : ""
            },
            success: function(result)
            {
                $(".pages").html("");
                currentpage =1
                lastIndexOfTable = 20;
                //$(".content").html(result);
                theResult = JSON.parse(result);
                theResult = FixData(theResult);
                pagination (theResult);
                finalResults = theResult ;
            }
        }
    );
    
}

function supList()
{
    isArchiveList = false ;
    $("#date").hide();
    $.post
    (
        {
            url: "api/emp/getAllSup.php",
            data:
            {
                userName : ""
            },
            success: function(result)
            {
                $(".pages").html("");
                currentpage =1
                lastIndexOfTable = 20;
                //$(".content").html(result);
                theResult = JSON.parse(result);
                theResult = FixData(theResult);
                pagination (theResult);
                finalResults = theResult ;
            }
        }
    );
    
}

function chefList()
{
    isArchiveList = false ;
    $("#date").hide();
    $.post
    (
        {
            url: "api/emp/getAllChef.php",
            data:
            {
                userName : ""
            },
            success: function(result)
            {
                $(".pages").html("");
                currentpage =1
                lastIndexOfTable = 20;
                //$(".content").html(result);
                theResult = JSON.parse(result);
                theResult = FixData(theResult);
                pagination (theResult);
                finalResults = theResult ;
            }
        }
    );
    
}



function newEmp()
{
    window.location.href = "newEmp.php";
}

///////////////////////////
function loginList()
{
    isArchiveList = false ;
    $("#date").show();
    $.post
    (
        {
            url: "api/operation/getSessionLoginsLogouts.php",
            data:
            {
                userName : ""
            },
            success: function(result)
            {
                currentpage =1
                lastIndexOfTable = 20;

                theResult = JSON.parse(result);
                pagination2 (theResult);
            }
        }
    );
    
}
// $('#date').change(function() {
//     var date = $(this).val();


//     $.post
//     (
//         {
//             url: "api/operation/getSessionLoginsLogouts.php",
//             data:
//             {
//                 infoDate : date
//             },
//             success: function(result)
//             {
//                 theResult = JSON.parse(result);
//                 if(theResult.length == 0)
//                 {
//                     alert("NO RESULT !");
//                 }
//                 else
//                 {
//                     pagination2 (theResult);
//                 }
//             }
//         }
//     );
// });

// function goToInfo2(element)
// {
//     $.post
//     (
//         {
//             url: "api/session/setUserID.php",
//             data:
//             {
//                 Emp : $(element).attr("id")
//             },
//             success: function(result)
//             {
//                 window.location.href="setEmp.php";
//             }
//         }
//     );
// }
// function pagination2 (data)
// {
//     var numRow = data.length ;
//     var numPages =Math.ceil(numRow /20) ;
//     var lastIndexOfTable = 0;

//     if(numPages == currentpage)
//     {
//         if (numRow != 20) {
//             lastIndexOfTable = ((currentpage-1)*20)+(numRow % 20);
//         } else {
//             lastIndexOfTable = 20;
//         }
//     }
//     else
//     {
//         lastIndexOfTable = (currentpage*20)-1;
//     }


    
    
//     //get the header of the table 
//     var contentH = "";
//     for(prop in data[0])
//     {
//         contentH += "<th>"+prop+"</th>";
//     }

//     var contentB = "";

//     for(var i = ((currentpage-1)*20) ; i <= lastIndexOfTable ; i++)
//     {
//         try {
//             contentB +="<tr><td>"+
//                     data[i].ID + "</td><td>"+
//                     data[i].Pseudo + "</td><td>"+
//                     data[i].Prenom + "</td><td>"+
//                     data[i].Nom + "</td><td>"+
//                     data[i].NBR_login + "</td><td>"+
//                     data[i].NBR_logout + "</td><td>"+
//                     data[i].NBR_session_login + "</td><td>"+
//                     data[i].NBR_session_logout + "</td><td>"+
//                     "<button class =\"info\" id=\""+data[i].ID+"\" onclick=\"goToInfo(this)\">INFO</td></tr>";
//         } catch (error) {
            
//         }
//     }

//     $(".content").html("");
//     $(".content").html('<table border="2"><thead><tr>'+contentH+'</tr></thead><tbody>'+contentB+'</tbody></table>');


    
//     var contentP = "<ul>";
//     for(var i = 0 ; i < numPages ; i++)
//     {
//         contentP +='<li onclick="getByPage2(this)" id="p'+(i+1)+'">'+(i+1)+'</li>';
//     }
//     $(".pages").html(contentP + "</ul>");
// }
// function getByPage2(element)
// {
//     currentpage = $(element).html();
//     pagination2(theResult)
// }

function filter(input){
    filteredResult = finalResults.filter(function (x){
        //  return x.Pseudo.toLowerCase().includes($(input).val().toLowerCase()) == true ;
        console.count();
         if ((x.ID + "").toLowerCase().includes($(input).val().toLowerCase()) ||
                x.Pseudo.toLowerCase().includes($(input).val().toLowerCase()) ||
                x.Prenom.toLowerCase().includes($(input).val().toLowerCase()) ||
                x.Nom.toLowerCase().includes($(input).val().toLowerCase()) ||
                x.Fonction.toLowerCase().includes($(input).val().toLowerCase()) ||
                (x.DateRec +"").includes($(input).val().toLowerCase()) ||
                (x.salaire + "").toLowerCase().includes($(input).val().toLowerCase())) 
                {
             return x;
         }
    });
    currentpage = 1;
    theResult = filteredResult;
    isArchiveList == true ? paginationArchive(theResult): pagination(theResult);
    // pagination(theResult);
}

function FixData(data){
    return data.map(d=>{
        for (const prop in d) {
            if (d[prop] ==null || d[prop]==undefined) {
                d[prop] = "inconnu" ; 
            }
          }
        return d;
    });
}