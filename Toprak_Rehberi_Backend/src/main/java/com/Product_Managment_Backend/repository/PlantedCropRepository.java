package com.Product_Managment_Backend.repository;

import com.Product_Managment_Backend.dto.PlantedCropDTO;
import com.Product_Managment_Backend.model.PlantedCrop;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PlantedCropRepository extends JpaRepository<PlantedCrop,Integer> {
    //Optional<PlantedCrop> findByTerrainId(Integer terrainId);

    List<PlantedCrop> findByTerrainId(Integer terrainId);
    //List<PlantedCropDTO> findByTerrainId2(Integer terrainId);


}
