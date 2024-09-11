package com.Product_Managment_Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "iller")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "il_id")
    private Integer id;

    @Column(name = "il_adi")
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "city")
    private List<District> districts;
}





