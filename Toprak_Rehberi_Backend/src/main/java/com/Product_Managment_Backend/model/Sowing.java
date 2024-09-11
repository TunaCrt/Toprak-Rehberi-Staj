package com.Product_Managment_Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
@Data
@Entity
public class Sowing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String rating;
    private LocalDateTime sowingDate;
    @PrePersist // Sınıf kaydedilmeden önce bu metot çağrılacak
    public void prePersist() {
        this.sowingDate = LocalDateTime.now(); // SowingDate alanına mevcut tarih ve saati atar
    }

    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id",nullable = false, referencedColumnName = "id")
    @JsonIgnore
    private Product product;
}
