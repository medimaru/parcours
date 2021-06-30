var currentpage = 1;
var lastIndexOfTable = 20;
var theResult;
function validationPagination(data) {
    var numRow = data.length;
    var numPages = Math.ceil(numRow / 20);
    var lastIndexOfTable = 0;

    if (numPages == currentpage) {
        if (numRow % 20 != 0) {
            lastIndexOfTable = (currentpage - 1) * 20 + (numRow % 20);
        } else {
            lastIndexOfTable = 20 * currentpage;
        }
    } else {
        lastIndexOfTable = currentpage * 20 - 1;
    }

    //get the header of the table
    var contentH =  '<th class="checkboxAgent"> # </th>';
    for (prop in data[0]) {
        contentH += "<th>" + prop + "</th>";
    }

    var contentB = "";

    for (var i = (currentpage - 1) * 20; i <= lastIndexOfTable; i++) {
        try {
            contentB +=
                "<tr><td >" +
                '<input  type="checkbox"  id=emp_' +
                data[i].idCandidat +
                ' onclick="toggelSelect(' +
                data[i].idCandidat +
                ')"/>' +
                "</td><td>" +
                data[i].idCandidat +
                "</td><td>" +
                data[i].Agent +
                "</td><td>" +
                data[i].A +
                "</td><td>" +
                data[i].B +
                "</td><td>" +
                data[i].C +
                "</td><td>" +
                data[i].Point +
                "</td><td>" +
                data[i].somme +
                "</td><td>" +
                data[i].Moyenne +
                `</td><td class=${data[i].MoyenneABC}>` +
                data[i].MoyenneABC +
                "</td><td>" +
                (data[i]["deja recycle"]=="1" ? 'oui' : 'non')
                "</td></tr>";
        } catch (error) {}
    }

    $(".content").html("");
    $(".content").html(
        '<table border="2"><thead><tr>' +
            contentH +
            "</tr></thead><tbody>" +
            contentB +
            "</tbody></table>"
    );

    var contentP = "<ul>";
    for (var i = 0; i < numPages; i++) {
        contentP +=
            '<li onclick="getByPage(this)" id="p' +
            (i + 1) +
            '">' +
            (i + 1) +
            "</li>";
    }
    contentP += "</ul>";
    $(".pages").html(contentP);
}

function getByPage(element) {
    currentpage = $(element).html();
    validationPagination(theResult);
}