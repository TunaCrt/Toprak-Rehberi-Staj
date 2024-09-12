package com.Product_Managment_Backend.repository;

import com.Product_Managment_Backend.model.PlantedCrop;
import com.Product_Managment_Backend.model.Product;
import com.Product_Managment_Backend.model.Terrain;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TerrainRepository extends JpaRepository<Terrain, Integer> {
    List<Terrain> findByUserId(Long terrainId);

}
