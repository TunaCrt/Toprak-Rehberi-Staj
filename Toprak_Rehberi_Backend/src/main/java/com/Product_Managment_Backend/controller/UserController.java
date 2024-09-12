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

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

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
    public User register(@Valid @RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new IllegalArgumentException("E-posta adresi zaten kullanılıyor.");
        }

        // Şifreyi hashleyip kaydetme
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public Map<String, Object> login(@Valid @RequestBody User user) {
        // Kullanıcıyı doğrula
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));

        // Kullanıcı detaylarını yükle
        final UserDetails userDetails = userDetailsService.loadUserByUsername(user.getEmail());

        // JWT token oluştur
        String token = jwtUtil.generateToken(userDetails);

        // Kullanıcıyı e-posta ile veritabanından bul
        User loggedInUser = userRepository.findByEmail(user.getEmail());

        // Cevap olarak token ve userId döndür
        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("userId", loggedInUser.getId()); // userId'yi ekleyin

        return response;
    }

}
