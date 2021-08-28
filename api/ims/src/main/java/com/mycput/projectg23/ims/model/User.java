package com.mycput.projectg23.ims.model;

import java.util.Date;

public class User {
    private Long Id;
    private String name;
    private String lastName;
    private String email;
    private String password;
    private String userType;
    private Date addedDate;
    private String requestStatus;

    public User(Long id, String name, String lastName, String email, String password, String userType)
    {
        Id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.userType = userType;
        this.requestStatus = "";
    }

    public User(User user)
    {
        Id = user.Id;
        this.name = user.name;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.userType = user.userType;
        this.addedDate = user.addedDate;
        this.requestStatus = "";
    }

    public User()
    { }

    public Long getId()
    {
        return Id;
    }

    public String getName()
    {
        return name;
    }

    public String getLastName()
    {
        return lastName;
    }

    public String getEmail()
    {
        return email;
    }

    public String getPassword()
    {
        return password;
    }

    public String getUserType()
    {
        return userType;
    }

    public Date getAddedDate()
    {
        return addedDate;
    }

    public String getRequestStatus()
    {
        return requestStatus;
    }

    public void setRequestStatus(String value)
    {
        requestStatus = value;
    }
}