package com.Product_Managment_Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String productName;

    private String description;


    private String plantingSeason;//ilkbahar


    private String successRate;//%80

    private String optimalTemperature;//18-22derece

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<PlantedCrop> plantedCrops = new HashSet<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Sowing> sowings = new HashSet<>();
}
