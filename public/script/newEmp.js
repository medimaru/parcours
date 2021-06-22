$(".radioMe").hide();
$(".workingWifeControllers").hide();
var isMr = false ;
var workingWife = false ;
$('#notworking').prop('checked',true);

function reset()
{
    $("input[type=text]").val("");
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


// function fillcampaigns(list)
// {
//     list.forEach(element => {
//         $("#id_campaign").append('<option value="'+element.id_campaign+'">'+element.nom_campaign+'</option>');
//     });
// }
// $.post(
//     {
//         url: "api/campagne/all.php",
//         data:
//         {
//             Emp:1
//         },
//         success: function(result)
//         {
//             fillcampaigns(JSON.parse(result))
//         }
//     });


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
            fillTravail(JSON.parse(result))
        }
    });

// function fillCrm(list)
// {
//     list.forEach(element => {
//         $("#crm").append('<option value="'+element.ID+'">'+element.nom+'</option>');
//     });
// }
// $.post(
//     {
//         url: "api/crm/getAll.php",
//         data:
//         {
//             Emp:1
//         },
//         success: function(result)
//         {
//             fillCrm(JSON.parse(result))
//         }
//     });


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
            fillType(JSON.parse(result))
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
                    theResult.forEach(element => {
                        $('#Emp').append('<option value="'+element.ID+'">'+element.Nom+'</option>');
                    });
                }
            }
        );
}

function fillPlateau()
{
    $('#Emp').html("");
    $.post
        (
            {
                url: "api/allPlateau",
                data:
                {
                    userName : ""
                },
                success: function(result)
                {
                    result.forEach(element => {
                        $('#plateau').append('<option value="'+element.id+'">'+element.label+'</option>');
                    });
                }
            }
        );
}
fillPlateau();


function addEmp()
{
    var txt;
    var sex ;
    var wifeSituation ;

    if (isMr == true) {
        sex='mr';
    } else {
        sex='mme'
    }

    if (workingWife == true) {
        wifeSituation = 1 ;
    } else {
        wifeSituation = 2 ;
    }

    var r = confirm("are you sure that all the infos are correct ?");
    if (r == true) 
    { 
        $.post
        (
            {
                // url: "api/emp/putNewEmp.php",
                url: "api/emp/new",
                data:
                {
                    Pseudo : $("#Pseudo").val() + "",
                    Prenom : $("#Prenom").val() + "",
                    Nom : $("#Nom").val() + "",
                    DateRec : $(".DateRec").val() + "",
                    DateEnciennete : $(".anciennete").val() + "",
                    Contrat : $("#Contrat").val(),
                    Travail : $("#Travail").val(),
                    // Password : $("#Password").val() + "",
                    Type : $("#Type").val(),
                    //Chef : $("#Emp").val(),
                    plateau : $("#plateau").val() + "",
                    // Session: $("#Session").val() + "",
                    // crm : $("#crm").val() ,
                    // id_campaign : $("#id_campaign").val(),
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
                    sex : sex ,
                    workingWife : wifeSituation,
                    fonction : $("#fonction").val()+""
                },
                success: function(result)
                {
                    console.log(result);
                    if(result == "1")
                    {
                        alert("l'agent a ete ajoute avec succes !");
                    }
                    else
                    {
                        alert("erreure !");
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

$('#Type').change(function(){
    if ($(this).val()==6) {
        $("#crm").prop('disabled', 'disabled');
    }
    else{
        $("#crm").prop('disabled', false);
    }
});

function s1600()
{
    $("#autreSalaire").val('1600');
    $("#autreSalaire").prop('disabled', true);
}
function s2829()
{
    $("#autreSalaire").val('2829');
    $("#autreSalaire").prop('disabled', true);
}
function autre()
{
    $("#autreSalaire").prop('disabled', false);
    $("#autreSalaire").val('');
}

$("#autreSalaire").val('1600');
$("#salaire1").prop("checked", true);
$("#Célibataire").prop("checked", true);
var situation = "Célibataire";

function SetuationF(x)
{
    const mariedCheckbox = $('#marié');
    situation = $(x).prop("id");
    if ($(x).is(mariedCheckbox) && $('#mr').prop('checked') == true) {
        $(".workingWifeControllers").show();
    } else {
        $(".workingWifeControllers").hide();
        workingWife = false;
    }
}


function Gender(x){
    if ($(x).prop("id") == "mr") {
        isMr = true ;
        if ($('#marié').prop('checked') == true) {
            $(".workingWifeControllers").show();
        }
    } else if($(x).prop("id") == "mme"){
        isMr = false ;
        $(".workingWifeControllers").hide();
    }
}

function WorkingWife(x){
    if ($(x).prop("id") == "working") {
        workingWife = true ;
    } else if($(x).prop("id") == "notworking"){
        workingWife = false ;
    }
}

function toggleAnciennete(el){
    var value = el.options[el.selectedIndex].text;
    if (value == "anapec insertion") {
        document.querySelector('.anciennete').disabled=true;
        document.querySelector('.anciennete').value="";
    } else {
        document.querySelector('.anciennete').disabled=false;
    }
}

// fillEmp("Coach");
