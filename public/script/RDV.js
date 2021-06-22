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

var currentpage =1
var lastIndexOfTable = 20;
var theResult;
var typeDate = "";

/////********RDV BY Campaign********/
function ByCampaign()
{
    typeDate = "campaign";
    $.post
    (
        {
            url: "api/RDV/ByCampaign.php",
            data:
            {
                userName : ""
            },
            success: function(result)
            {
                console.log(result);
                theResult = JSON.parse(result);
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
            data[i].nom_campaign + "</td><td>"+
            data[i].nbr_rdv + "</td></tr>";
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


$('#date').change(function() {
    if(typeDate == "campaign")
    {
        var date = $(this).val();
        $.post
        (
            {
                url: "api/RDV/ByCampaignAndDate.php",
                data:
                {
                    infoDate : date
                },
                success: function(result)
                {
                    console.log(JSON.parse(result));
                    theResult = JSON.parse(result);
                    if(theResult.length == 0)
                    {
                        alert("NO RESULT !");
                    }
                    else
                    {
                        pagination(theResult);
                    }
                }
            }
        );
    }
    
});



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
                }
            }
        );
}


