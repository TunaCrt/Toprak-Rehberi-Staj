package com.Product_Managment_Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "ilceler")
public class District {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ilce_id")
    private Integer id;

    @Column(name = "ilce_adi")
    private String name;

    @ManyToOne
    @JoinColumn(name = "il_id")
    private City city;

    @JsonIgnore
    @OneToMany(mappedBy = "district")
    private List<Neighborhood> neighborhoods;
}