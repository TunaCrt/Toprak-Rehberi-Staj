package com.Product_Managment_Backend.service;

import com.Product_Managment_Backend.model.Terrain;

import java.util.List;

public interface TerrainService {
    public Terrain saveTerrain(Terrain terrain);
    public Terrain getTerrainById(Integer id);

    public List<Terrain> getAllTerrain();

   // public Terrain getTerrainById(Integer id);

    public String deleteTerrain(Integer id);

    public Terrain editTerrain(Terrain terrain,Integer id);
}
