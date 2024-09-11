package com.Product_Managment_Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
public class Terrain {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer plantedCropId;

    private Integer mahalleId;

    private String terrainName;

    private String terrainType;

    private String description;

    private String status;

    private Integer adaNo;

    private Integer parselNo;

    private Integer area;

    @OneToMany(mappedBy = "terrain", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<PlantedCrop> plantings = new HashSet<>();

    /*@OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id",nullable = false, referencedColumnName = "id")
    @JsonIgnore
    private User user;*/

   /* @OneToMany(mappedBy = "terrain", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference("terrain-land")
    private List<PlantedCrop> plantedCrop;*/
}
