package com.Product_Managment_Backend.service;

import com.Product_Managment_Backend.dto.PlantedCropDTO;
import com.Product_Managment_Backend.dto.TerrainDTO;
import com.Product_Managment_Backend.model.PlantedCrop;
import com.Product_Managment_Backend.model.Terrain;

import java.util.List;

public interface TerrainService {
    public Terrain saveTerrain(Terrain terrain);
    public Terrain getTerrainById(Integer id);

    public List<Terrain> getAllTerrain();

   // public Terrain getTerrainById(Integer id);
    List<TerrainDTO> getTerrainDTOsByUserId(Long id);


    public String deleteTerrain(Integer id);

    public Terrain editTerrain(Terrain terrain,Integer id);
}
