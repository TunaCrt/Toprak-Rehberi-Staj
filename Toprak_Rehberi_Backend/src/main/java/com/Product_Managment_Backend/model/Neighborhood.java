package com.Product_Managment_Backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "mahalleler")

public class Neighborhood {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mahalle_id")
    private Integer id;

    @Column(name = "mahalle_adi")
    private String name;

    @ManyToOne
    @JoinColumn(name = "ilce_id")
    private District district;
}