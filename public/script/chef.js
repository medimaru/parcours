$("#date").hide();

var currentpage =1
var lastIndexOfTable = 20;
var theResult;


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


    
    
    //get the header of the table 
    var contentH = "";
    for(prop in data[0])
    {
        contentH += "<th>"+prop+"</th>";
    }

    var contentB = "";

    for(var i = ((currentpage-1)*20) ; i <= lastIndexOfTable ; i++)
    {
        console.log("the index is :"+i);
        console.log("the currentpage = "+currentpage);
        console.log("the last index of the table is :"+lastIndexOfTable);
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
                window.location.href="setEmp.php";
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

function agentList()
{
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
                //console.log(result);
                theResult = JSON.parse(result);
                console.log(theResult);
                pagination (theResult);
            }
        }
    );
    
}


function coachList()
{
    $("#date").hide();
    $.post
    (
        {
            url: "api/absence/coach.php",
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
                console.log(result);
                theResult = JSON.parse(result);
                pagination3 (theResult);
            }
        }
    );
    
}

function supList()
{
    $("#date").hide();
    $.post
    (
        {
            url: "api/absence/sup.php",
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
                console.log(result);
                theResult = JSON.parse(result);
                pagination3 (theResult);
            }
        }
    );
    
}

function chefList()
{
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
                console.log(result);
                theResult = JSON.parse(result);
                pagination3 (theResult);
            }
        }
    );
    
}

function newEmp()
{
    window.location.href = "newEmp.php";
}

function campagne()
{
    window.location.href = "newCampaign.php";
}

///////////////////////////
function loginList()
{
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
                //$(".content").html(result);
                //console.log(result);

                theResult = JSON.parse(result);
                console.log(theResult);
                pagination2 (theResult);
            }
        }
    );
}

$('#date').change(function() {
    var date = $(this).val();


    $.post
    (
        {
            url: "api/operation/getSessionLoginsLogouts.php",
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
                    pagination2 (theResult);
                }
                // theResult = JSON.parse(result);
                // pagination2 (theResult);
            }
        }
    );
});

function goToInfo2(element)
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
                window.location.href="setEmp.php";
            }
        }
    );
}
function pagination2 (data)
{
    var numRow = data.length ;
    var numPages =Math.ceil(numRow /20) ;
    var lastIndexOfTable = 0;

    if(numPages == currentpage)
    {
        if (numRow != 20) {
            lastIndexOfTable = ((currentpage-1)*20)+(numRow % 20);
        } else {
            lastIndexOfTable = 20;
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
        console.log("the index is :"+i);
        console.log("the currentpage = "+currentpage);
        console.log("the last index of the table is :"+lastIndexOfTable);
        try {
            contentB +="<tr><td>"+
                    data[i].ID + "</td><td>"+
                    data[i].Pseudo + "</td><td>"+
                    data[i].Prenom + "</td><td>"+
                    data[i].Nom + "</td><td>"+
                    data[i].NBR_login + "</td><td>"+
                    data[i].NBR_logout + "</td><td>"+
                    data[i].NBR_session_login + "</td><td>"+
                    data[i].NBR_session_logout + "</td><td>"+
                    "<button class =\"info\" id=\""+data[i].ID+"\" onclick=\"goToInfo(this)\">INFO</td></tr>";
        } catch (error) {
            
        }
    }

    $(".content").html("");
    $(".content").html('<table border="2"><thead><tr>'+contentH+'</tr></thead><tbody>'+contentB+'</tbody></table>');


    
    var contentP = "<ul>";
    for(var i = 0 ; i < numPages ; i++)
    {
        contentP +='<li onclick="getByPage2(this)" id="p'+(i+1)+'">'+(i+1)+'</li>';
    }
    $(".pages").html(contentP + "</ul>");
}
function getByPage2(element)
{
    currentpage = $(element).html();
    pagination2(theResult);
}

function RDV()
{
    window.location.href = "RDV.php";
}


//////////////////////////////////////////////////////////////////////////////////////////
function pagination3 (data)
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
        console.log("the index is :"+i);
        console.log("the currentpage = "+currentpage);
        console.log("the last index of the table is :"+lastIndexOfTable);
        try {
            
            contentB +="<tr><td>"+
            data[i].idEMP + "</td><td>"+
            data[i].Pseudo + "</td><td>"+
            data[i].Prenom + "</td><td>"+
            data[i].Nom + "</td><td>"+
            data[i].Session + "</td><td>"+
            data[i].CRM + "</td><td>"+
            data[i].google + "</td><td>"+
            data[i].campaigne + "</td><td>";
            if (data[i].ABM == 0) {
                contentB += '<input type="checkbox" id="'+data[i].idEMP+'" onclick="ABM(this)"></td>';
            } else {
                contentB += '<input type="checkbox" id="'+data[i].idEMP+'" checked onclick="ABM(this)" ></td>';
            }
            if (data[i].ABS == 0) {
                contentB += '<td><input type="checkbox" id="'+data[i].idEMP+'"  onclick="ABS(this)"></td>';
            } else {
                contentB += '<td><input type="checkbox" id="'+data[i].idEMP+'" checked onclick="ABS(this)"></td>';
            }
            data[i].id_campaign + "</td></tr>";
        } catch (error) {
            
        }
    }

    $(".content").html("");
    $(".content").html('<table border="3"><thead><tr>'+contentH+'</tr></thead><tbody>'+contentB+'</tbody></table>');


    
    var contentP = "<ul>"
    for(var i = 0 ; i < numPages ; i++)
    {
        contentP +='<li onclick="getByPage2(this)" id="p'+(i+1)+'">'+(i+1)+'</li>';
    }
    contentP += "</ul>"
    $(".pages").html(contentP);
}

function getByPage3(element)
{
    currentpage = $(element).html();
    pagination (theResult)
}

function deleteAB(id , type)
{
    $.post
    (
        {
            url: "api/absence/delete.php",
            data:
            {
                agentID : id,
                absType : type
            },
            success: function(result)
            {
                if (JSON.parse(result)) {
                    alert("Cette Operqtion a ete bien enregistree !");
                } else {
                    alert("Probleme de connection avec la basse de donnee !");
                }
            }
        }
    );
}

function addAB(id , type)
{
    $.post
    (
        {
            url: "api/absence/add.php",
            data:
            {
                agentID : id,
                absType : type
            },
            success: function(result)
            {
                if (JSON.parse(result)) {
                    alert("Cette Operqtion a ete bien enregistree !");
                } else {
                    alert("Probleme de connection avec la basse de donnee !");
                }
            }
        }
    );
}

function ABM(element)
{
    //alert($(element).attr('id'))
    if (!$(element).prop('checked')) {
        //alert("on check !");
        var r = confirm("Etes-vous sur que vous voulez supprimer ABM pour cet agent ?");
        if (r) {
            deleteAB($(element).attr('id') , 1);
        }
        else{
            $(element).prop('checked' , true);
        }

    } else {
        var r = confirm("Etes-vous sur que vous voulez ajouter ABM pour cet agent ?");
        if (r) {
            addAB($(element).attr('id') , 1);
        }
        else{
            $(element).prop('checked' , false);
        }
    }
}
function ABS(element)
{
    if (!$(element).prop('checked')) {
        //alert("on check !");
        var r = confirm("Etes-vous sur que vous voulez supprimer ABM pour cet agent ?");
        if (r) {
            deleteAB($(element).attr('id') , 2);
        }
        else{
            $(element).prop('checked' , true);
        }
    } else {
        var r = confirm("Etes-vous sur que vous voulez ajouter ABM pour cet agent ?");
        if (r) {
            addAB($(element).attr('id') , 2);
        }
        else{
            $(element).prop('checked' , false);
        }
    }
}











