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
            data[i]["ID"] + "</td><td>"+
            data[i]["Prenom"] + "</td><td>"+
            data[i]["Nom"] + "</td><td>"+
            data[i]["Date d'embauche"] + "</td><td>"+
            data[i]["Salaire de base"] + "</td><td>"+
            data[i]["Retard"] + "</td><td>"+
            data[i]["Absence"] + "</td><td>"+
            data[i]["Penalite"] + "</td><td>"+
            data[i]["Prime"] + "</td><td>"+
            data[i]["Prime taxable"] + "</td><td>"+
            data[i]["Salaire brut"] + "</td><td>"+
            data[i]["CNSS"] + "</td><td>"+
            data[i]["AMO"] + "</td><td>"+
            data[i]["IR"] + "</td><td>"+
            data[i]["Taxe pro"] + "</td><td>"+
            data[i]["Avance"] + "</td><td>"+
            data[i]["Retenues"] + "</td><td>"+
            data[i]["Salaire net"] + "</td></tr>";
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

function salaire()
{
    $('.csvContainer').hide();
    $('.ToHide').show();
    $('.content').show();
    $('.pages').show();

    var year = new Date().getFullYear();
    var month = new Date().getMonth();
    $("#year").val(year);
    $("#month").val(month+1)
    
    $.post
        (
            {
                url: "api/salaire/salaireByMonth.php",
                data:
                {
                    year : year,
                    month : (month+1)
                },
                success: function(result)
                {
                    //console.log(result);
                    currentpage =1;
                    theResult = JSON.parse(result);
                    pagination(theResult);
                }
            }
        );
}

function Chercher()
{
    var year = new Date().getFullYear();
    var month = new Date().getMonth();
    month+=1;

    if ($("#year").val()> year && $("#month").val()>month) {
        alert("pas de donnes pour cette date !");
        pagination({});
    } else if ($("#year").val() == year && $("#month").val()>month){
        alert("pas de donnes pour cette date !");
        pagination({});
    }
    else if ($("#year").val() > year){
        alert("pas de donnes pour cette date !");
        pagination({});
    }
    else {
        $.post
        (
            {
                url: "api/salaire/salaireByMonth.php",
                data:
                {
                    year : $("#year").val(),
                    month : $("#month").val()
                },
                success: function(result)
                {
                    console.log(result);
                    currentpage =1;
                    theResult =JSON.parse(result);
                    pagination(JSON.parse(result));
                }
            }
        );
    }
    
}

function Validate()
{
    var year = new Date().getFullYear();
    var month = new Date().getMonth();
    var r = confirm("ARE YOU SURE ?!");
    if (r) {
        $.post
        (
            {
                url: "api/salaire/validate.php",
                data:
                {
                    year : year,
                    month : (month+1)
                },
                success: function(result)
                {
                    console.log(result);
                    if (result==1) {
                        alert("Les donnee sont validees !");
                    } else {
                        alert("Erreure !");
                    }
                }
            }
        );
    }
    // $.post
    //     (
    //         {
    //             url: "api/salaire/validate.php",
    //             data:
    //             {
    //                 year : year,
    //                 month : (month+1)
    //             },
    //             success: function(result)
    //             {
    //                 console.log(result);
    //                 if (result==1) {
    //                     alert("Les donnee sont validees !");
    //                 } else {
    //                     alert("Erreure !");
    //                 }
    //             }
    //         }
    //     );
}

salaire();

////////////////////////////////// for csv file importing 

function ImportData()
{
    $('.csvContainer').show();
    $('.ToHide').hide();
    $('.content').hide();
    $('.pages').hide();


}

function test()
{
    let files = $("#dd")[0].files ; 

    handleFiles(files);
}

function handleFiles(files)
{
    if (window.FileReader) {
        try {
            getAsText(files[0]);
        } catch{
            alert("Erreure de telechargement de fichier !");
        }
    }
}

function getAsText(fileToRead){
    let read = new FileReader();
    read.readAsText(fileToRead);

    read.onload = loadHandler ;
    read.onerror = errorHandler ;
}

function loadHandler(event){
    let csv = event.target.result ;
    //alert(csv);
    var items = $.csv.toObjects(csv);
    var jsonobject = JSON.stringify(items);

    let properties = [];
    for(prop in JSON.parse(jsonobject)[0])
    {
        properties.push(prop);
    }

    if (!properties.includes("ID")) {
        alert("Aucun ID colonne dans le fichier !!");
    } else if (!properties.includes("Prime")){
        alert("Aucun Prime colonne dans le fichier !!");
    }else if (!properties.includes("Retard")){
        alert("Aucun Retard colonne dans le fichier !!");
    }else if (!properties.includes("Absence")){
        alert("Aucun Absence colonne dans le fichier !!");
    }else if (!properties.includes("Avance")){
        alert("Aucun Avance colonne dans le fichier !!");
    }
    else{

        $.post
        (
            {
                url: "api/csv/parceCSV.php",
                data:
                {
                    data:jsonobject,
                    month : $("#month").val(),
                    year : $("#year").val()
                },
                success: function(result)
                {
                    console.log(result);
                    if (result == "true") {
                        alert("Les donnees ont ete valide !")
                    }
                    else if( result == "already exists"){
                        alert("Il'ya deja des donnees pour cet mois ! ce fichier n'a pas ete enregistrer !");
                    }
                }
            }
        );

    }
}

function errorHandler(event){
    if (event.target.error.name == 'NotReadableError') {
        alert('NotReadableError')
    } else {
        
    }
}

$("#hna").click(function(){
       
    var createXLSLFormatObj = [];

    /* XLS Head Columns */
    var xlsHeader = [];
    for(prop in theResult[0])
    {
        xlsHeader.push(prop);
    }

    /* XLS Rows Data */
    var xlsRows = theResult;


    createXLSLFormatObj.push(xlsHeader);
    $.each(xlsRows, function(index, value) {
        var innerRowData = [];
        $.each(value, function(ind, val) {

            innerRowData.push(val);
        });
        createXLSLFormatObj.push(innerRowData);
    });


    /* File Name */
    var filename = "salaires.xlsx";

    /* Sheet Name */
    var ws_name = "Sheet of salaires";

    if (typeof console !== 'undefined') console.log(new Date());
    var wb = XLSX.utils.book_new(),
        ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);

    /* Add worksheet to workbook */
    XLSX.utils.book_append_sheet(wb, ws, ws_name);

    /* Write workbook and Download */
    if (typeof console !== 'undefined') console.log(new Date());
    XLSX.writeFile(wb, filename);
    if (typeof console !== 'undefined') console.log(new Date());


});

