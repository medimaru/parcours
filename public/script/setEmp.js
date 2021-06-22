var google = "false" ;
$("#GFalse").prop("checked", true);

function archiverEmp()
{
    if ($("#archiveButton").html()=="Archiver") {
        $.post
        (
            {
                url: "api/emp/archiver.php",
                success: function(result)
                {
                    if (result=="true") {
                        home(true);
                    } else {
                        alert("Erreure !");
                    }
                }
            }
        );
    } else {
        $.post
        (
            {
                url: "api/emp/recuperer.php",
                success: function(result)
                {
                    if (result=="true") {
                        home(true);
                    } else {
                        alert("Erreure !");
                    }
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

function fillcampaigns(list)
{
    list.forEach(element => {
        $("#id_campaign").append('<option value="'+element.id_campaign+'">'+element.nom_campaign+'</option>');
    });
}
$.post(
    {
        url: "api/campagne/all.php",
        data:
        {
            Emp:1
        },
        success: function(result)
        {
            //console.log(JSON.parse(result));
            fillcampaigns(JSON.parse(result))
        }
    });


function fillContrat(list)
{
    list.forEach(element => {
        $("#Contrat").append('<option value="'+element.ID+'">'+element.Type+'</option>');
    });
}
$.post(
    {
        url: "api/contrat/getAll.php",
        data:
        {
            Emp:1
        },
        success: function(result)
        {
            //console.log(JSON.parse(result));
            fillContrat(JSON.parse(result))
        }
    });


function fillTravail(list)
{
    list.forEach(element => {
        $("#Travail").append('<option value="'+element.ID+'">'+element.Mode+'</option>');
    });
}
$.post(
    {
        url: "api/travail/getAll.php",
        data:
        {
            Emp:1
        },
        success: function(result)
        {
            //console.log(JSON.parse(result));
            fillTravail(JSON.parse(result))
        }
    });


function fillType(list)
{
    list.forEach(element => {
        $("#Type").append('<option value="'+element.ID+'">'+element.Lvl+'</option>');
    });
}
$.post(
    {
        url: "api/type/getAll.php",
        data:
        {
            Emp:1
        },
        success: function(result)
        {
            console.log(JSON.parse(result));
            fillType(JSON.parse(result))
        }
    });


function fillCrm(list)
{
    list.forEach(element => {
        $("#crm").append('<option value="'+element.ID+'">'+element.nom+'</option>');
    });
}
$.post(
    {
        url: "api/crm/getAll.php",
        data:
        {
            Emp:1
        },
        success: function(result)
        {
            //console.log(result);
            //console.log(JSON.parse(result));
            fillCrm(JSON.parse(result))
        }
    });


function fillEmp(x)
{
    $('#Emp').html("");
    $.post
        (
            {
                url: "api/emp/getAll"+x+".php",
                data:
                {
                    userName : ""
                },
                success: function(result)
                {
                    theResult = JSON.parse(result);
                    //console.log(theResult);
                    theResult.forEach(element => {
                        //console.log('<option value="'+element.ID+'">'+element.Nom+'</option>');
                        $('#Emp').append('<option value="'+element.ID+'">'+element.Nom+'</option>');
                    });
                }
            }
        );
}


$.post(
    {
        url: "api/emp/getByID.php",
        data:
        {
            responsableID:1
        },
        success: function(result)
        {
            //console.log(JSON.parse(result));
            fillType(JSON.parse(result))
        }
    });



function setEmp()
{
    var txt;
    var r = confirm("are you sure that all the infos are correct ?");
    if (r == true) 
    { 
        $.post
        (
            {
                url: "api/emp/setEmp.php",
                data:
                {
                    Pseudo : $("#Pseudo").val(),
                    Prenom : $("#Prenom").val(),
                    Nom : $("#Nom").val(),
                    DateRec : $("#DateRec").val(),
                    Contrat : $("#Contrat").val(),
                    Travail : $("#Travail").val(),
                    Password : $("#Password").val(),
                    Type : $("#Type").val(),
                    Chef : $("#Emp").val(),
                    Session: $("#Session").val(),
                    crm : $("#crm").val() , 
                    google : google ,
                    id_campaign : $("#id_campaign").val(),
                    salaire : $("#autreSalaire").val(),
                    CIN : $("#CIN").val() + "",
                    DateNaissance : $("#DateNaissance").val() + "",
                    Adress : $("#Adress").val() + "",
                    telephone : $("#telephone").val() + "",
                    RIB : $("#RIB").val() + "",
                    CNSS : $("#CNSS").val() + "",
                    DelaiFormation : $("#DelaiFormation").val() + "",
                    situation : situation + "",
                    enfants: $("#enfants").val(),
                    anciennete : $("#DateEnciennete").val()
                },
                success: function(result)
                {
                    console.log("result : "+result);
                    if(result == "1")
                    {
                        home(1);
                    }
                    else
                    {
                        alert("cant set this user !");
                    }
                }
            }
        );
    }
}

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



//////////////////////////////////////////////////////////////////////////////////


// var currentpage =1
// var lastIndexOfTable = 20;
// var theResult = 0;


// // to get the table from the database 
// $.post
// (
//     {
//         url: "api/operation/getByDateAndID.php",
//         data:
//         {
//         },
//         success: function(result)
//         {
//             theResult = JSON.parse(result);
//             //console.log(theResult);
//             pagination (theResult);
//             fillTodaySum(theResult);
//         }
//     }
// );


// the pagination function for the array of objects
// function pagination (data)
// {
//     var numRow = data.length ;
//     var numPages =Math.ceil(numRow /20) ;
//     var lastIndexOfTable = 0;

//     if(numPages == currentpage)
//     {
//         if ((numRow % 20) != 0) {
//             lastIndexOfTable = ((currentpage-1)*20)+(numRow % 20);
//             console.log("i think numRow is  not 20 !");
//         } else {
//             lastIndexOfTable = 20 * currentpage;
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

//     for(var i = ((currentpage-1)*20) ; i < lastIndexOfTable ; i++)
//     {
//                     try {
//                         contentB +="<tr><td>"+
//                         data[i].ID + "</td><td>"+
//                         data[i].emp + "</td><td>"+
//                         data[i].type + "</td><td>"+
//                         data[i].Date + "</td><td>"+
//                         data[i].Detail + "</td></tr>";
//                     } catch (error) {
                        
//                     }
//     }

//     $(".operation").html("");
//     $(".operation").html('<table border="4"><thead><tr>'+contentH+'</tr></thead><tbody>'+contentB+'</tbody></table>');


    
//     var contentP = "<ul>"
//     for(var i = 0 ; i < numPages ; i++)
//     {
//         contentP +='<li onclick="getByPage(this)" id="p'+(i+1)+'">'+(i+1)+'</li>';
//     }
//     $(".pagination").html(contentP + "</ul>");
// }

// //changing the content of the table by the number of the page we click
// function getByPage(element)
// {
//     currentpage = $(element).html();
//     pagination (theResult)
// }

$('#date').change(function() {
    var date = $(this).val();


    $.post
    (
        {
            url: "api/operation/getByDateAndID.php",
            data:
            {
                infoDate : date
            },
            success: function(result)
            {
                theResult = JSON.parse(result);
                try {
                    pagination (theResult);
                } catch (error){
                    console.log(error);
                    //alert("no result found for the chosen date !");
                }
                try {
                    fillTodaySum(theResult);
                } catch {
                    console.log("erreure de calculation de la somme des heures par jour");
                }
                fillSumM(date);
            }
        }
    );
});

function fillThisMonthSum(data)
{
    var currentMonth = new Date($("#date").val());
    var month = currentMonth.getMonth();
    var year = currentMonth.getFullYear() ;
    
    var tj = [];
    var sm = 0 ;
    

    for (let index = 1; index <= 31; index++) {

        var tt = [];

        var dayR = data.map
        (x => {
            var nd = new Date(x.Date);
            //console.log (index);
            if(nd.getMonth()==currentMonth.getMonth() && nd.getFullYear()==currentMonth.getFullYear() && nd.getDate()==index)
            {
                tt.push(x);

            }
        });

        if(tt.length != 0)
        {
            tj.push(tt);
        }
    }

    console.log(tj);
    tj.forEach(
        x => {
            console.log(x);
            var TodaySum = fillTodaySum1(x)

            console.log("today sum is :" + TodaySum);

            if(TodaySum > 0)
            {
                sm += TodaySum;
                console.log("////////////////////////////");
                //console.log(fillTodaySum1(x));
            }
        }
    );
    console.log("la sum en Sec :" + sm);
    console.log("la sum en chrono : " + sec2time(sm));
    $(".sommeM").html("la somme des heures par mois : " + sec2time(sm));
}



function fillSumM(date)
{
    $.post
    (
        {
            url: "api/operation/getMonthlyByDateAndID.php",
            data:
            {
                infoDate : date
            },
            success: function(result)
            {
                console.log(result);
                fillThisMonthSum(JSON.parse(result));
            }
        }
    );
}
function fillSum1(logins , logouts)
{
    var sum = 0 ;

    if(logins.length == logouts.length)
    {
        
        for (let index = 0; index < logins.length; index++)
        {
            var ins =  new Date(logins[index].Date);
            var outs = new Date(logouts[index].Date);
            var dif = new Date(outs.getTime() - ins.getTime());
            sum = sum + (dif/1000);
            //console.log(sum);
        }
    }
    else if(logins.length > logouts.length)
    {
        
        for (let index = 0; index < logouts.length; index++)
        {
            var ins =  new Date(logins[index].Date);
            var outs = new Date(logouts[index].Date);
            var dif = new Date(outs.getTime() - ins.getTime());
            sum = sum + (dif/1000);
            //console.log(sum);
        }
    }

    console.log(sum);
    return sum ;
}
function fillTodaySum1(data)
{
    sessionLogins = data.filter(x => x.type == "session login");
    sessionLogouts = data.filter(x => x.type == "session logout");
    return fillSum1(sessionLogins , sessionLogouts);
}


var sessionLogins = [];
var sessionLogouts = [];
var dailySum = 0;

function fillSum(logins , logouts)
{
    if(logins.length == logouts.length)
    {
        for (let index = 0; index < logins.length; index++)
        {
            var ins =  new Date(logins[index].Date);
            var outs = new Date(logouts[index].Date);
            var dif = new Date(outs.getTime() - ins.getTime());
            dailySum = dailySum + (dif/1000);
            $(".sommeJ").html("la somme des heures par jour : " + sec2time((dif/1000)));
        }
        $(".sommeJ").html("la somme des heures par jour : " + sec2time((dailySum)));
        dailySum = 0;
    }
    else if(logins.length > logouts.length)
    {
        for (let index = 0; index < logouts.length; index++)
        {
            var ins =  new Date(logins[index].Date);
            var outs = new Date(logouts[index].Date);
            var dif = new Date(outs.getTime() - ins.getTime());
            dailySum = dailySum + (dif/1000);
            $(".sommeJ").html("la somme des heures par jour : " + sec2time((dif/1000)));
        }
        $(".sommeJ").html("la somme des heures par jour : " + sec2time((dif/1000)));
    }
}


function fillTodaySum(data)
{
    sessionLogins = data.filter(x => x.type == "session login");
    sessionLogouts = data.filter(x => x.type == "session logout");
    fillSum(sessionLogins , sessionLogouts);
}



function sec2time(timeInSeconds) {
    var pad = function(num, size) { return ('000' + num).slice(size * -1); },
    time = parseFloat(timeInSeconds).toFixed(3),
    hours = Math.floor(time / 60 / 60),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60),
    milliseconds = time.slice(-3);

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 3);
}


$.post
(
    {
        url: "api/emp/getByID.php",
        data:
        {
            userName : ""
        },
        success: function(result)
        {
            theResult = JSON.parse(result);
            for(var prop in theResult[0]) {
                try
                {
                    $("#"+prop).val(theResult[0][prop]);
                }
                catch
                {
                    try {
                        $('#'+prop+' option[value="'+theResult[0][prop]+'"]').prop('selected', true);
                    } catch{
                        
                    }
                }
                

                if (prop=="Chef") {
                    $.post(
                        {
                            url: "api/emp/getResponsableByID.php",
                            data:
                            {
                                responsableID:theResult[0][prop]
                            },
                            success: function(result)
                            {
                                console.log(result);
                                console.log(JSON.parse(result));
                                var x = JSON.parse(result);

                                $("#Emp").append('<option value="'+x[0].ID+'">'+x[0].Nom+'</option>');
                            }
                        });
                }
                if(prop == "id_campaign")
                {
                    $('#'+prop+' option[value="'+theResult[0][prop]+'"]').prop('selected', true);
                }

                if(prop == "google")
                {
                    if (theResult[0][prop] == "true") {
                        $('#GTrue').prop('checked', true);
                    } else {
                        $('#GFalse').prop('checked', true);
                    }
                }
                if (prop == "salaire") {
                    $("#autreSalaire").val(theResult[0][prop]);
                }
                if (prop == "id_etat") {
                    if (theResult[0][prop] == "2") {
                        $("#archiveButton").html("Recuperer");
                    }
                }
                if (prop == "situation") {
                    $("#" + theResult[0][prop]).prop("checked", true);
                    situation = "" + theResult[0][prop];
                }
            }
            
        }
    }
);

function s1600()
{
    $("#autreSalaire").val('1600');
    $("#autreSalaire").prop('disabled', true);
}
function s2700()
{
    $("#autreSalaire").val('2700');
    $("#autreSalaire").prop('disabled', true);
}
function autre()
{
    $("#autreSalaire").prop('disabled', false);
    $("#autreSalaire").val('');
}

var situation = "";

function SetuationF(x)
{
    situation = $(x).prop("id");
}