package com.Product_Managment_Backend.controller;

import com.Product_Managment_Backend.dto.PlantedCropDTO;
import com.Product_Managment_Backend.dto.TerrainDTO;
import com.Product_Managment_Backend.model.*;
import com.Product_Managment_Backend.service.NeighborhoodRepositoryService;
import com.Product_Managment_Backend.service.ProductService;
import com.Product_Managment_Backend.service.TerrainService;
import com.Product_Managment_Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TerrainController {
    @Autowired
    private TerrainService terrainService;
    @Autowired
    private UserService userService;
    @Autowired
    private NeighborhoodRepositoryService neighborhoodRepositoryService;


    /*@PostMapping("/saveTerrain")
    public ResponseEntity<?> saveTerrain(@RequestBody Terrain terrain) {
        try {
            Terrain savedTerrain = terrainService.saveTerrain(terrain);
            return new ResponseEntity<>(savedTerrain, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }*/
    @PostMapping("/saveTerrain")
    public ResponseEntity<?> savePlantedCrop(@RequestBody TerrainDTO terrainDTO) {
        try {
            // Product ve Terrain ID'lerinin doğrulama

            if (terrainDTO.getUserId() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User ID is missing.");
            }

            // Veritabanından Product ve Terrain nesnelerini al
            User user = userService.getUserById(terrainDTO.getUserId());


            if (user == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Product not found.");
            }
            // Mahalle (Neighborhood) bilgisini ID'ye göre alıyoruz
            Neighborhood neighborhood = neighborhoodRepositoryService.getNeighborhoodById(terrainDTO.getMahalleId());
            if (neighborhood == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Neighborhood not found.");
            }

            // PlantedCrop nesnesini oluştur ve alanları ayarla
            Terrain terrain = new Terrain();

            terrain.setUser(user);
            terrain.setArea(terrainDTO.getArea());
            terrain.setAdaNo(terrainDTO.getAdaNo());
            terrain.setNeighborhood(neighborhood);
            terrain.setStatus(terrainDTO.getStatus());
            terrain.setTerrainType(terrainDTO.getTerrainType());
            terrain.setParselNo(terrainDTO.getParselNo());
            terrain.setTerrainName(terrainDTO.getTerrainName());
            terrain.setDescription(terrainDTO.getDescription());


            Terrain savedTerrain = terrainService.saveTerrain(terrain);

            return ResponseEntity.ok(terrain);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + e.getMessage());
        }
    }
    @GetMapping("/getTerrainsByUserId/{id}")
    public ResponseEntity<List<TerrainDTO>> getTerrainsByUserId(@PathVariable Long id) {
        List<TerrainDTO> terrainDTOs = terrainService.getTerrainDTOsByUserId(id);
        return new ResponseEntity<>(terrainDTOs, HttpStatus.OK);
    }

    @GetMapping("/terrain")
    public ResponseEntity<?> getAllTerrain() {
        return new ResponseEntity<>(terrainService.getAllTerrain(), HttpStatus.OK);
    }

    @GetMapping("/terrain/{id}")
    public ResponseEntity<?> getTerrainById(@PathVariable Integer id) {
        return new ResponseEntity<>(terrainService.getTerrainById(id), HttpStatus.OK);
    }

    @DeleteMapping("/deleteTerrain/{id}")
    public ResponseEntity<?> deleteTerrain(@PathVariable Integer id) {
        return new ResponseEntity<>(terrainService.deleteTerrain(id), HttpStatus.OK);
    }

    @PostMapping("/editTerrain/{id}")
    public ResponseEntity<?> editTerrain(@RequestBody Terrain terrain, @PathVariable Integer id) {
        return new ResponseEntity<>(terrainService.editTerrain(terrain, id), HttpStatus.CREATED);
    }
}
