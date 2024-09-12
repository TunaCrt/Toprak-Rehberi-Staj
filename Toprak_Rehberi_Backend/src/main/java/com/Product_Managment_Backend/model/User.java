package com.Product_Managment_Backend.model;

import jakarta.persistence.*;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "İsim boş olamaz.")
    private String username;

    @NotBlank(message = "Şifre boş olamaz.")
    @Size(min = 8, message = "Şifre en az 8 karakter olmalıdır.")
    @Pattern(regexp = ".*[A-Z].*", message = "Şifre en az bir büyük harf içermelidir.")
    @Pattern(regexp = ".*[a-z].*", message = "Şifre en az bir küçük harf içermelidir.")
    @Pattern(regexp = ".*\\d.*", message = "Şifre en az bir rakam içermelidir.")
    @Pattern(regexp = ".*[!@#$%^&*(),.?\":{}|<>].*", message = "Şifre en az bir özel karakter içermelidir.")
    private String password;

    @Column(unique = true) // E-posta benzersiz olmalı
    @NotBlank(message = "E-posta adresi boş olamaz.")
    @Email(message = "Geçersiz e-posta formatı.")
    private String email;



   /* @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Terrain> terrains = new HashSet<>();*/

}
