var currentpage = 1;
var lastIndexOfTable = 20;
var theResult;
function chargeePagination(data) {
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

    var contentH = '<th class="checkboxAgent"> # </th>';
    for (prop in data[0]) {
        contentH += "<th>" + prop + "</th>";
    }
    var contentB = "";
    for (var i = (currentpage - 1) * 20; i <= lastIndexOfTable; i++) {
        try {
            contentB +=
                "<tr><td  >" +
                '<input  type="checkbox"  id=emp_' +
                data[i].id +
                ' onclick="toggelSelect(' +
                data[i].id +
                ')"/>' +
                `</td><td style="background-color: aliceblue; font-weight: bolder;" )">${data[i].id}</td><td>` +
                data[i].nom +
                "</td><td>" +
                data[i].prenom +
                "</td><td>" +
                data[i].telephone +
                "</td><td>" +
                data[i].experience +
                "</td><td>" +
                data[i].CIN +
                "</td><td>" +
                data[i].nationalite +
                "</td><td>" +
                data[i].email +
                "</td><td>" +
                data[i].adresse +
                "</td><td>" +
                data[i].langue +
                "</td>";
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
    chargeePagination(theResult);
}
