var currentpage2 =1
var lastIndexOfTable2 = 20;
var theResult2;
function paginationTeamAb(data)
{
    var numRow = data.length ;
    var numPages =Math.ceil(numRow /20) ;
    var lastIndexOfTable2 = 0;

    if(numPages == currentpage2)
    {
        if ((numRow % 20) != 0) {
            lastIndexOfTable2 = ((currentpage2-1)*20)+(numRow % 20);
        } else {
            lastIndexOfTable2 = 20 * currentpage2;
        }
    }
    else
    {
        lastIndexOfTable2 = (currentpage2*20)-1;
    }
    //get the header of the table 
    var contentH = "";
    for(prop in data[0])
    {
        contentH += "<th>"+prop+"</th>";
    }
    var contentB = "";
    for(var i = ((currentpage2-1)*20) ; i <= lastIndexOfTable2 ; i++)
    {
        try {
            contentB +=
                "<tr><td>" +
                data[i].id +
                "</td><td>" +
                data[i].nom +
                "</td><td>" +
                data[i].prenom +
                "</td><td>" +
                data[i].formation +
                "</td><td>" +
                `<input  type="checkbox" ${
                    data[i]["absence matin"] ? "checked" : ""
                }  onclick="ConfirmationPop(${data[i].id},1,this)">` +
                "</td><td>" +
                `<input  type="checkbox" ${
                    data[i]["absence soir"] ? "checked" : ""
                } onclick="ConfirmationPop(${data[i].id},2,this)">` +
                "</td></tr>";
        } catch (error) {
        }
    }

    $(".Absence .content").html("");
    $(".Absence .content").html('<table border="2"><thead><tr>'+contentH+'</tr></thead><tbody>'+contentB+'</tbody></table>');

    var contentP = "<ul>"
    for(var i = 0 ; i < numPages ; i++)
    {
        contentP +='<li onclick="getByPageTeamAb(this)" id="p'+(i+1)+'">'+(i+1)+'</li>';
    }
    contentP += "</ul>"
    $(".Absence .pages").html(contentP);
}

function getByPageTeamAb(element)
{
    currentpage2 = $(element).html();
    paginationTeamAb (theResult2)
}