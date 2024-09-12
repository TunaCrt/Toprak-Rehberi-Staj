package com.Product_Managment_Backend.service;

import com.Product_Managment_Backend.model.Product;
import com.Product_Managment_Backend.model.User;

import java.util.List;

public interface UserServiceImp {
    public User getUserById(Long id);

    public User saveUser(User user);

    public List<User> getAllUser();

    public String deleteUser(Long id);

    public User editUser(User user,Long id);

}
