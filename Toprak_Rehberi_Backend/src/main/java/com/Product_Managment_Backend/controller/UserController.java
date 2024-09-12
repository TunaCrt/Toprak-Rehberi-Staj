package com.Product_Managment_Backend.controller;

import com.Product_Managment_Backend.config.JwtUtils;
import com.Product_Managment_Backend.model.User;
import com.Product_Managment_Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Pattern;
import javax.validation.ValidationException;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new IllegalArgumentException("E-posta adresi zaten kullanılıyor.");
        }

        // Şifre validasyonu
        validatePassword(user.getPassword());

        // Şifreyi hashleyip kaydetme
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        // Şifre validasyonu
        validatePassword(user.getPassword());
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));

        final UserDetails userDetails = userDetailsService.loadUserByUsername(user.getEmail());

        return jwtUtil.generateToken(userDetails);
    }

    // Şifre validasyonunu gerçekleştiren method
    private void validatePassword(String password) {
        if (password.length() < 8) {
            throw new ValidationException("Şifre en az 8 karakter olmalıdır.");
        }
        if (!password.matches(".*[A-Z].*")) {
            throw new ValidationException("Şifre en az bir büyük harf içermelidir.");
        }
        if (!password.matches(".*[a-z].*")) {
            throw new ValidationException("Şifre en az bir küçük harf içermelidir.");
        }
        if (!password.matches(".*\\d.*")) {
            throw new ValidationException("Şifre en az bir rakam içermelidir.");
        }
        if (!password.matches(".*[!@#$%^&*(),.?\":{}|<>].*")) {
            throw new ValidationException("Şifre en az bir özel karakter içermelidir.");
        }
    }
}
