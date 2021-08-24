var $JQ = jQuery.noConflict();

function setAttributes(element, attributeToAssign, attributeValue)
{
    return $JQ(element).attr(attributeToAssign, attributeValue);
}

$JQ(document).ready(function ()
{
    var datae; 
    $JQ.ajax({
        url: 'https://randomuser.me/api/?results=10',
        dataType: 'json',
        success: function (data)
        {
            console.log(data);
            datae = data;
            for (var i = 0; i < data.results.length; ++i)
            {
                ID = `user${i}`;
                picID = `userPic${i}`;
                var $div = $JQ("<tr>", { id: ID });
                $JQ('#tbody').append($div);
                
                $JQ(`#${ID}`).append(`<td>${data.results[i].id.value}</td>`);
                $JQ(`#${ID}`).append(setAttributes("<td></td>", "id", picID));
                $JQ(`#${picID}`).append(setAttributes("<img />", "src", data.results[i].picture.thumbnail));
                $JQ(`#${picID}`).append(`${data.results[i].name.first + " " + data.results[i].name.last}`);
                $JQ(`#${ID}`).append(`<td>${data.results[i].email}</td>`);
                $JQ(`#${ID}`).append(`<td>${data.results[i].phone}</td>`);
                $JQ(`#${ID}`).append(`<td>${data.results[i].registered.date}</td>`); 
            }
        }
    });

    console.log(datae);
    
});