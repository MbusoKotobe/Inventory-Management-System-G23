package com.mycput.projectg23.controller;

import com.mycput.projectg23.model.User;
import com.mycput.projectg23.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class UserController {
    UserRepository object = new UserRepository();

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping("/addUser")
    public User addUser(@RequestParam User newUSer)
    {
        return object.addUser(newUSer);
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(path = "/User/getUser")
    public User getUser(@RequestParam Long id)
    {
        return object.getUser(id);
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(path = "/User/getUsers")
    public ArrayList<User> getUser()
    {
        return object.getUsers();
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(path = "/User/updateUser")
    public User updateUser(@RequestParam User newUserData)
    {
        return object.updateUser(newUserData);
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(path = "/User/removeUser")
    public User removeUser(@RequestParam Long id)
    {
        return object.removeUser(id);
    }
}
