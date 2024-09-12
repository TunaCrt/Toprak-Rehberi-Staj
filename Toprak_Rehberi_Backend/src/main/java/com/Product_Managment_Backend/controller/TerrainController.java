package com.Product_Managment_Backend.controller;

import com.Product_Managment_Backend.model.Product;
import com.Product_Managment_Backend.model.Terrain;
import com.Product_Managment_Backend.service.ProductService;
import com.Product_Managment_Backend.service.TerrainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TerrainController {
    @Autowired
    private TerrainService terrainService;

    @PostMapping("/saveTerrain")
    public ResponseEntity<?> saveTerrain(@RequestBody Terrain terrain) {
        try {
            Terrain savedTerrain = terrainService.saveTerrain(terrain);
            return new ResponseEntity<>(savedTerrain, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
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
