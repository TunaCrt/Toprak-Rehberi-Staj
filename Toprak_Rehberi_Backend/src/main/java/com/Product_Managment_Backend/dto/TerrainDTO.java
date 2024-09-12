package com.Product_Managment_Backend.dto;

import lombok.Data;

@Data
public class TerrainDTO {
    private Integer id;

    private Integer mahalleId;

    private String terrainName;

    private String terrainType;

    private String description;

    private String status;

    private Integer adaNo;

    private Integer parselNo;

    private Integer area;

    private Long userId;
}
