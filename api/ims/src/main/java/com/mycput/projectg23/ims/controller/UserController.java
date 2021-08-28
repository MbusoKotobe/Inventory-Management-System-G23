package com.mycput.projectg23.ims.controller;

import com.mycput.projectg23.ims.model.User;
import com.mycput.projectg23.ims.repository.UserRepository;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class UserController {
    UserRepository object = new UserRepository();

    @CrossOrigin(origins = "http://127.0.0.1:5555")
    @RequestMapping(path = "/User/addUser")
    public User addUser(@RequestBody User newUSer)
    {
        return object.addUser(newUSer);
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(path = "/User/getUser")
    public User getUser(@RequestParam Long id)
    {
        return object.getUser(id);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5555")
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
