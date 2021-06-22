var currentpage =1
var lastIndexOfTable = 20;
var theResult;


$.post
(
    {
        url: "api/campagne/all.php",
        data:
        {
            userName : ""
        },
        success: function(result)
        {
            //$(".content").html(result);
            console.log(result);
            theResult = JSON.parse(result);
            pagination (theResult);
        }
    }
);


// the pagination function for the array of objects
function pagination (data)
{
    var numRow = data.length ;
    var numPages =Math.ceil(numRow /20) ;
    var lastIndexOfTable = 0;
    console.log("number of rows is : "+numRow);
    console.log("number of pages :"+numPages);

    if(numPages == currentpage)
    {
        if ((numRow % 20) != 0) {
            lastIndexOfTable = ((currentpage-1)*20)+(numRow % 20);
            console.log("i think numRow is  not 20 !");
        } else {
            lastIndexOfTable = 20 * currentpage;
        }
    }
    else
    {
        lastIndexOfTable = (currentpage*20)-1;
    }

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
            data[i].id_campaign + "</td><td>"+
            data[i].nom_campaign + "</td><td>"+
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

function getByPage(element)
{
    currentpage = $(element).html();
    pagination (theResult)
}

function goToInfo(element)
{
    $.post
    (
        {
            url: "api/campagne/getByID.php",
            data:
            {
                campagne : $(element).attr("id")
            },
            success: function(result)
            {
                var cc = JSON.parse(result);
                console.log(cc);
                $("#name").val(cc[0].Nom);
            }
        }
    );
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

function ajouter()
{
    if($("#name").val()=="")
    {
        alert("Enter le nom du client !");
    }
    else
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
}