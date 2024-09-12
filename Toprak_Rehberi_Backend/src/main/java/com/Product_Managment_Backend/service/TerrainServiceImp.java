package com.Product_Managment_Backend.service;

import com.Product_Managment_Backend.dto.PlantedCropDTO;
import com.Product_Managment_Backend.dto.TerrainDTO;
import com.Product_Managment_Backend.model.PlantedCrop;
import com.Product_Managment_Backend.model.Product;
import com.Product_Managment_Backend.model.Terrain;
import com.Product_Managment_Backend.model.User;
import com.Product_Managment_Backend.repository.ProductRepository;
import com.Product_Managment_Backend.repository.TerrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class TerrainServiceImp implements TerrainService{

    @Autowired
    private TerrainRepository terrainRepository;

    @Autowired
    private UserService userService;

    @Override
    public Terrain saveTerrain(Terrain terrain) {

        return terrainRepository.save(terrain);
    }
    public List<TerrainDTO> getTerrainDTOsByUserId(Long id) {
        List<Terrain> terrains = terrainRepository.findByUserId(id);
        List<TerrainDTO> terrainDTOS = new ArrayList<>();

        for (Terrain terrain : terrains) {
            TerrainDTO dto = new TerrainDTO();
            dto.setId(terrain.getId());
            //dto.setUserId(terrain.getUser().getId());
            dto.setAdaNo(terrain.getAdaNo());
            dto.setArea(terrain.getArea());
            dto.setMahalleId(terrain.getMahalleId());
            dto.setTerrainName(terrain.getTerrainName());
            dto.setDescription(terrain.getDescription());
            dto.setStatus(terrain.getStatus());
            dto.setParselNo(terrain.getParselNo());
            dto.setTerrainType(terrain.getTerrainType());
            // User bilgilerini ekle
            User user = userService.getUserById(terrain.getUser().getId());
            if (user != null) {
                dto.setUserId(terrain.getUser().getId());
            }

            terrainDTOS.add(dto);
        }

        return terrainDTOS;
    }
    @Override
    public List<Terrain> getAllTerrain() {
        return terrainRepository.findAll();
    }
    @Override
    public Terrain getTerrainById(Integer id) {
        return terrainRepository.findById(id).orElse(null);
    }
/*    @Override
    public Terrain getTerrainById(Integer id) {
        return terrainRepository.findById(id).get();
    }*/

    @Override
    public String deleteTerrain(Integer id) {
        Terrain terrain = terrainRepository.findById(id).get();

        if (terrain != null) {
            terrainRepository.delete(terrain);
            return "terrain Delete Sucessfully";
        }

        return "Something wrong on server";
    }

    @Override
    public Terrain editTerrain(Terrain p, Integer id) {

        Terrain oldTerrain = terrainRepository.findById(id).get();

        oldTerrain.setTerrainName(p.getTerrainName());
        oldTerrain.setDescription(p.getDescription());
        oldTerrain.setArea(p.getArea());
        oldTerrain.setAdaNo(p.getAdaNo());
        oldTerrain.setParselNo(p.getParselNo());
        oldTerrain.setTerrainType(p.getTerrainType());
        oldTerrain.setMahalleId(p.getMahalleId());

        oldTerrain.setStatus(p.getStatus());

        return terrainRepository.save(oldTerrain);
    }
}
