package com.mycput.projectg23.ims.repository;

import com.mycput.projectg23.ims.model.User;

import java.util.ArrayList;

public interface IUserRepository {
    User addUser(User user);
    User getUser(Long ID);
    ArrayList<User> getUsers();
    User updateUser(User user);
    User removeUser (Long id);
}