var currentpage =1
var lastIndexOfTable = 20;
var theResult;
function pagination(data)
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
    contentH = contentH +"<th>selecter pseudo</th>";
    var contentB = "";
    for(var i = ((currentpage-1)*20) ; i <= lastIndexOfTable ; i++)
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
                (data[i].sex == 1 ? 'mme':"ms") +
                "</td><td data-cID="+data[i].id+">" +
                data[i].pseudo +
                "</td><td>" +
                data[i].compagne +
                "</td><td>" +
                `<select data-sex="${data[i].sex}" onchange="onSelectOption(this , ${data[i].id})">${makeSelect(data[i].sex)}</select>`
                "</td></tr>";
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
    pagination(theResult)
}