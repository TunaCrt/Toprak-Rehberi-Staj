package com.Product_Managment_Backend.service;

import com.Product_Managment_Backend.model.Product;
import com.Product_Managment_Backend.model.User;
import com.Product_Managment_Backend.repository.ProductRepository;
import com.Product_Managment_Backend.repository.SowingRepository;
import com.Product_Managment_Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService implements UserServiceImp{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {

        return userRepository.save(user);
    }


    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    /*@Override
    public Product getProductById(Integer id) {
        return productRepository.findById(id).get();
    }*/

    @Override
    public String deleteUser(Long id) {
        User user = userRepository.findById(id).get();

        if (user != null) {
            userRepository.delete(user);
            return "Product Delete Sucessfully";
        }

        return "Something wrong on server";
    }

    @Override
    public User editUser(User p, Long id) {
/*
        Product oldUser = userRepository.findById(id).get();

        oldUser.setDescription(p.getDescription());


        return userRepository.save(oldUser);*/
        return null;
    }
}
