package com.Product_Managment_Backend.service;

import com.Product_Managment_Backend.dto.PlantedCropDTO;
import com.Product_Managment_Backend.model.PlantedCrop;
import com.Product_Managment_Backend.model.Product;
import com.Product_Managment_Backend.model.Terrain;
import org.springframework.stereotype.Service;

import java.util.List;


public interface PlantedCropService {

    public PlantedCrop savePlantedCrop(PlantedCrop plantedCrop);


    public List<PlantedCropDTO> getAllPlantedCrop();

    public PlantedCrop getPlantedCropById(Integer id);
   // public PlantedCropDTO getPlantedCropById2(Integer id);
   // List<PlantedCropDTO> getPlantedCropByTerrainId2(Integer id);
   List<PlantedCropDTO> getPlantedCropDTOsByTerrainId2(Integer id);

    public List<PlantedCrop> getPlantedCropByTerrainId(Integer id);

    public String deletePlantedCrop(Integer id);

    public PlantedCrop editPlantedCrop(PlantedCrop plantedCrop,Integer id);
}
