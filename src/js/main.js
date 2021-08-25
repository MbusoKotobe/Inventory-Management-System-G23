var $JQ = jQuery.noConflict();

$JQ(document).ready(function ()
{
    $JQ.ajax({
        url: 'https://randomuser.me/api/?results=10',
        dataType: 'json',
        success: function (data)
        {
            console.log(data);
            localStorage.setItem("usersData", JSON.stringify(data));

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

    $JQ('#updateUserCloseSecondModal').on('click', function (e)
    {
        e.preventDefault();
        $JQ('.addUserModal').hide('fast');
        $JQ('.updateUserModal').hide('fast');
        $JQ('.updateUserSecondModal').hide('fast');
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
        $JQ('.updateUserSecondModal').hide('fast');
        $JQ('.removeUserModal').hide('fast');
        $JQ('.userTable').css({ 'opacity' : '0.5'});

    });

    $JQ('#updateUser').on('click', function (e)
    {
        e.preventDefault();
        $JQ('.updateUserModal').toggle();
        $JQ('.updateUserSecondModal').hide('fast');
        $JQ('.addUserModal').hide('fast');
        $JQ('.removeUserModal').hide('fast');
        $JQ('.userTable').css({ 'opacity': '0.5' });
    });

    $JQ('#updateUserSecondModal').on('click', function (e)
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
        $JQ('.updateUserSecondModal').hide('fast');
        $JQ('.userTable').css({ 'opacity': '0.55' });
    });

    $JQ('#updateUserIDBtn').on('click', function(e)
    {
        e.preventDefault();
        var userData;
        var updateUserForm = $JQ('#updateUserForm')[0];
        var formData = new FormData(updateUserForm);
        var userToRequest = formData.get("_id");
        var usersData = localStorage.getItem("usersData");
        usersData = JSON.parse(usersData);
        for (var i = 0; i < usersData.results.length; ++i)
        {
            if (usersData.results[i].id.value === userToRequest)
            {
                userData = usersData.results[i];
                break;
            }
        }

        if (isFieldEmpty($JQ('#updateUserForm')[0]))
        {
            showEmptyFieldError();
        }
        else{
            if (userData === undefined)
            {
                closeAllOpenedFormModals();
                resetAllForms();
                showErrorMessage("Invalid User ID, user not found");
                setTimeout(function ()
                {
                    location.reload();
                }, 3000);
                return false;
            } else
            {
                $JQ('.updateUserModal').hide('fast');
                $JQ('#updateUserForm')[0].reset(); //Reset form fields to blank
                $JQ('.updateUserSecondModal').toggle();
                addUserDataToForm(userData);
            }
        }
         
    });

    $JQ('#submitNewUserBtn').on('click', function (e)
    {
        e.preventDefault();
        if (isFieldEmpty($JQ('#addNewUserForm')[0]))
        {
            showEmptyFieldError();
        }else{
            closeAllOpenedFormModals();
            showSuccessMessage("User Successfully Added");
            setTimeout(function ()
            {
                location.reload();
            }, 3000);
        } 
    });

    $JQ('#submitUpdatedUserDetailsBtn').on('click', function(e)
    {
        e.preventDefault();
        if (isFieldEmpty($JQ('#updateUserSecondForm')[0]))
        {
            showEmptyFieldError();
        }else{
            closeAllOpenedFormModals();
            showSuccessMessage("Details Successfully Updated");
            setTimeout(function ()
            {
                location.reload();
            }, 3000);
        } 
    });

    $JQ('#submitRemoveUserBtn').on('click', function(e)
    {
        e.preventDefault();
        if (isFieldEmpty($JQ('#removeUserForm')[0]))
        {
            showEmptyFieldError();
        }else{
            closeAllOpenedFormModals();
            showSuccessMessage("User Successfully Removed");
            setTimeout(function ()
            {
                location.reload();
            }, 3000);
        }
    });

    $JQ('#pwdVisibilityOld').on('click', function(e)
    {
        e.preventDefault();
        if ($JQ('.pwdVisibilityOld i').attr('class') === "far fa-eye")
        {
            $JQ('.pwdVisibilityOld i').attr('class', 'fas fa-low-vision');
            $JQ('#_updateOldPassword').attr('type', 'text');

        }else{
            $JQ('.pwdVisibilityOld i').attr('class', 'far fa-eye');
            $JQ('#_updateOldPassword').attr('type', 'password');
        }
    });

    $JQ('#pwdVisibility').on('click', function(e)
    {
        e.preventDefault();
        if ($JQ('.pwdVisibility i').attr('class') === "far fa-eye")
        {
            $JQ('.pwdVisibility i').attr('class', 'fas fa-low-vision');
            $JQ('#_password').attr('type', 'text');
            $JQ('#_password2').attr('type', 'text');
            $JQ('#_updatePassword').attr('type', 'text');
            $JQ('#_updatePassword2').attr('type', 'text');

        }else{
            $JQ('.pwdVisibility i').attr('class', 'far fa-eye');
            $JQ('#_password').attr('type', 'password');
            $JQ('#_password2').attr('type', 'password');
            $JQ('#_updatePassword').attr('type', 'password');
            $JQ('#_updatePassword2').attr('type', 'password');
        }
    });
 
});

function setAttributes(element, attributeToAssign, attributeValue)
{
    return $JQ(element).attr(attributeToAssign, attributeValue);
}

function isFieldEmpty(form)
{
    var isEmpty = false;
    for (var i = 0; i < form.elements.length; i++)
    {
        if (form.elements[i].tagName.toLowerCase() === 'input')
        {
            if (form.elements[i].value === "" || form.elements[i].value === undefined)
            {
                isEmpty = true;
                break;
            }  
        }
    }
    return isEmpty;
}

function showErrorMessage(errorMsg)
{
    $JQ('#errorMsg').text(errorMsg);
    $JQ('.errorMessageBox').toggle();
    $JQ('.userTable').css({ 'opacity': '0.3' });
}

function showSuccessMessage(successMsg)
{
    $JQ('.successMessageBox').toggle();
    $JQ('#successMsg').text(successMsg);
    $JQ('.userTable').css({ 'opacity': '0.3' });
}

function showEmptyFieldError()
{
    showErrorMessage("Please fill all the fields");
    setTimeout(function ()
    {
        closeErrorStatusModals();
    }, 3000);
}

function closeAllOpenedFormModals()
{
    $JQ('.addUserModal').hide('fast');
    $JQ('.updateUserModal').hide('fast');
    $JQ('.updateUserSecondModal').hide('fast');
    $JQ('.removeUserModal').hide('fast');
}

function closeErrorStatusModals()
{
    $JQ('.successMessageBox').hide('fast');
    $JQ('.errorMessageBox').hide('fast');
}

function resetAllForms()
{
    $JQ('#addNewUserForm')[0].reset();
    $JQ('#updateUserForm')[0].reset();
    $JQ('#updateUserSecondForm')[0].reset();
    $JQ('#removeUserForm')[0].reset();
}

function resetOpacity(element)
{
    $JQ(element).css({ 'opacity': '1' });
}

function addUserDataToForm(userData)
{
    var userForm = new FormData($JQ('#updateUserSecondForm')[0]);
    $JQ('#_updateName').val(userData.name.first);
    $JQ('#_updateLastName').val(userData.name.last);
    $JQ('#_updatEemail').val(userData.email);
    $JQ('#_updateCellphone').val(userData.phone);
    $JQ('#_updateOldPassword').val(userData.login.password);
    $JQ('#_updatePassword').val();
    $JQ('#_updatePassword2').val();
    userForm.set("_name", userData.name.first);
    userForm.set("_lastName", userData.name.last);
    userForm.set("_email", userData.email);
    userForm.set("_cellphone", userData.phone);
    userForm.set("_oldPassword", userData.login.password);
    userForm.set("_password", "");
    userForm.set("_password2", "");
}