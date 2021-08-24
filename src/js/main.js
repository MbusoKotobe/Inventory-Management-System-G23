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

    $JQ('#addUserCloseModal').on('click', function (e)
    {
        $JQ('.addUserModal').hide('fast');
        $JQ('.updateUserModal').hide('fast');
        $JQ('.removeUserModal').hide('fast');
        $JQ('.userTable').css({ 'opacity': '1' });
    });

    $JQ('#updateUserCloseModal').on('click', function (e)
    {
        e.preventDefault();
        $JQ('.addUserModal').hide('fast');
        $JQ('.updateUserModal').hide('fast');
        $JQ('.removeUserModal').hide('fast');
        $JQ('.userTable').css({ 'opacity': '1' });
    });

    $JQ('#removeUserCloseModal').on('click', function(e)
    {
        e.preventDefault();
        $JQ('.addUserModal').hide('fast');
        $JQ('.updateUserModal').hide('fast');
        $JQ('.removeUserModal').hide('fast');
        $JQ('.userTable').css({ 'opacity': '1' });
    });

    $JQ('#addUser').on('click', function (e)
    {
        e.preventDefault();
        $JQ('.addUserModal' ).toggle();
        $JQ('.updateUserModal').hide('fast');
        $JQ('.removeUserModal').hide('fast');
        $JQ('.userTable').css({ 'opacity' : '0.5'});

    });

    $JQ('#updateUser').on('click', function (e)
    {
        e.preventDefault();
        $JQ('.updateUserModal').toggle();
        $JQ('.addUserModal').hide('fast');
        $JQ('.removeUserModal').hide('fast');
        $JQ('.userTable').css({ 'opacity': '0.5' });
    });

    $JQ('#removeUser').on('click', function (e)
    {
        e.preventDefault();
        $JQ('.removeUserModal').toggle();
        $JQ('.addUserModal').hide('fast');
        $JQ('.updateUserModal').hide('fast');
        $JQ('.userTable').css({ 'opacity': '0.55' });
    });
 
});