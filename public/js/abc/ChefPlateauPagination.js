var currentpage = 1;
var lastIndexOfTable = 20;
var theResult;
function classementPagination(data) {
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
                data[i].Pseudo +
                "</td><td>" +
                data[i].RDV +
                "</td><td>" +
                data[i].Appels +
                "</td><td>" +
                data[i].Absence +
                "</td><td>" +
                Number(data[i].RDVFinale.toPrecision(4)) +
                "</td><td>" +
                Number(data[i].AppelFinale.toPrecision(4)) +
                "</td><td>" +
                Number(data[i].AbsenceFinale.toPrecision(3)) +
                "</td><td>" +
                Number((data[i].Point*100)).toPrecision(4) +"%"+
                "</td><td class=" +
                data[i].Classement + 
                ">" +
                data[i].Classement +
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
    classementPagination(theResult);
}

function openSearch() {
    if (document.getElementById("search").style.display === "none") {
        document.getElementById("search").style.display = "flex";
    } else document.getElementById("search").style.display = "none";
}

function openValidation() {
    if (document.getElementById("archiveValidation").style.display === "none") {
        document.getElementById("archiveValidation").style.display = "flex";
    } else document.getElementById("archiveValidation").style.display = "none";
}

function openArchiveForm(){
        if (document.getElementById("expand").style.height === "0px") {
            document.getElementById("expand").style.height = "100px";
        } else document.getElementById("expand").style.height = "0px";
}