var currentpage = 1;
var lastIndexOfTable = 20;
var theResult;
function formationPagination(data) {
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
    var contentH = "";
    for (prop in data[0]) {
        contentH += "<th>" + prop + "</th>";
    }

    var contentB = "";

    for (var i = (currentpage - 1) * 20; i <= lastIndexOfTable; i++) {
        try {
            contentB +=
                "<tr><td>" +
                data[i].id +
                "</td><td>" +
                data[i].dateDebut +
                "</td><td>"+
                data[i].dateFin + "</td><td>"+
                data[i].max + "</td><td>"+
                data[i].formation + "</td></tr>"
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
    formationPagination(theResult);
}
function openForm() {
    if (document.getElementById("expand").style.height === "0px"){
        document.getElementById("expand").style.height = "295px";}
    else document.getElementById("expand").style.height = "0px";
}