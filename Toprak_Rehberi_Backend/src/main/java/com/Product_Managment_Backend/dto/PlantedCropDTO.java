package com.Product_Managment_Backend.dto;

import lombok.Data;

@Data
public class PlantedCropDTO {
    private Integer id;
    private Integer productId;
    private String productName;
    private Integer terrainId;
    private String plantingDate;
    private Integer plantedArea;
    private String harvestDate;
    private String status;
}
