package com.mycput.projectg23.repository;

import com.mycput.projectg23.model.User;

import java.util.ArrayList;
import java.util.List;

public class UserRepository implements IUserRepository{
    final String ERROR = "error";
    final String SUCCESS = "success";
    ArrayList<User> users = new ArrayList<>();
    User callBackObject;

    @Override
    public User addUser(User user)
    {
        if(doesUserExist(user.getEmail()))
        {
            callBackObject.setRequestStatus(ERROR);
        }else
        {
            users.add(user);
            callBackObject.setRequestStatus(SUCCESS);
        }
        return callBackObject;
    }

    @Override
    public User getUser(Long ID)
    {
        for (User user : users)
        {
            if(user.getId().equals(ID))
            {
                callBackObject = new User(user);
                callBackObject.setRequestStatus(SUCCESS);
                break;
            }
        }
        return callBackObject;
    }

    @Override
    public ArrayList<User> getUsers()
    {
        return users;
    }

    @Override
    public User updateUser(User user)
    {
        if(doesUserExist(user))
        {
            removeUser(user.getId());
            addUser(user);
            callBackObject.setRequestStatus(SUCCESS);
        }else { callBackObject.setRequestStatus(ERROR); }

        return callBackObject;
    }

    @Override
    public User removeUser(Long id)
    {
        if(doesUserExist(getUser(id)))
        {
            users.removeIf(user -> user.getId().equals(id));
        }else { callBackObject.setRequestStatus("error"); }

        return callBackObject;
    }

    private boolean doesUserExist(String email)
    {
        boolean doesUserExist = false;
        for (User _user : users)
        {
            if(_user.getEmail().equalsIgnoreCase(email))
            {
                doesUserExist = true;
                break;
            }
        }
        return doesUserExist;
    }

    private boolean doesUserExist(User user)
    {
        boolean doesUserExist = false;
        for (User _user : users)
        {
            if(_user.getId().equals(user.getId()))
            {
                doesUserExist = true;
                break;
            }
        }
        return doesUserExist;
    }
}