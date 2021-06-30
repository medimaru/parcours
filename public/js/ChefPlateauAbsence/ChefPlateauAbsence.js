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

    var contentB = "";

    for(var i = ((currentpage-1)*20) ; i <= lastIndexOfTable ; i++)
    {
        try {
            contentB +="<tr><td>"+
            data[i].ID + "</td><td>"+
            data[i].Type + "</td><td>"+
            data[i].Date + "</td></tr>";
        } catch (error) {
        }
    }

    $(".Absence .content").html("");
    $(".Absence .content").html('<table border="2"><thead><tr>'+contentH+'</tr></thead><tbody>'+contentB+'</tbody></table>');


    
    var contentP = "<ul>"
    for(var i = 0 ; i < numPages ; i++)
    {
        contentP +='<li onclick="getByPage(this)" id="p'+(i+1)+'">'+(i+1)+'</li>';
    }
    contentP += "</ul>"
    $(".Absence .pages").html(contentP);
}

function getByPage(element)
{
    currentpage = $(element).html();
    pagination (theResult)
}