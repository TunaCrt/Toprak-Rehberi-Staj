package com.Product_Managment_Backend.controller;

import com.Product_Managment_Backend.dto.PlantedCropDTO;
import com.Product_Managment_Backend.model.PlantedCrop;
import com.Product_Managment_Backend.model.Product;
import com.Product_Managment_Backend.model.Terrain;
import com.Product_Managment_Backend.repository.PlantedCropRepository;
import com.Product_Managment_Backend.repository.ProductRepository;
import com.Product_Managment_Backend.service.PlantedCropService;
import com.Product_Managment_Backend.service.ProductService;
import com.Product_Managment_Backend.service.TerrainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PlantedCropController {
    @Autowired
    private PlantedCropService plantedCropService;
    private ProductRepository productRepository;
    private PlantedCropRepository plantedCropRepository;

    @Autowired
    private ProductService productService; // Product servisi eklendi
    @Autowired
    private TerrainService terrainService; // Terrain servisi eklendi

 /*   @PostMapping("/savePlantedCrop")
    public ResponseEntity<?> savePlantedCrop(@RequestBody PlantedCrop plantedCrop) {
        return new ResponseEntity<>(plantedCropService.savePlantedCrop(plantedCrop), HttpStatus.CREATED);
    } */
   /* @PostMapping("/savePlantedCrop")
    public void savePlantedCrop(PlantedCrop plantedCrop) {
        // Önce ilgili Product nesnesini getirin veya oluşturun
        Product product = productRepository.findById(plantedCrop.getProduct().getId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // PlantedCrop nesnesini oluşturun ve product alanını atayın
        plantedCrop.setProduct(product);

        // PlantedCrop nesnesini kaydedin
        plantedCropRepository.save(plantedCrop);
    }*/
 @PostMapping("/savePlantedCrop")
 public ResponseEntity<?> savePlantedCrop(@RequestBody PlantedCropDTO plantedCropDTO) {
     try {
         // Product ve Terrain ID'lerinin doğrulama
         if (plantedCropDTO.getTerrainId() == null) {
             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Terrain ID is missing.");
         }
         if (plantedCropDTO.getProductId() == null) {
             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Product ID is missing.");
         }

         // Veritabanından Product ve Terrain nesnelerini al
         Product product = productService.getProductById(plantedCropDTO.getProductId());
         Terrain terrain = terrainService.getTerrainById(plantedCropDTO.getTerrainId());

         if (product == null) {
             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Product not found.");
         }
         if (terrain == null) {
             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Terrain not found.");
         }

         // PlantedCrop nesnesini oluştur ve alanları ayarla
         PlantedCrop plantedCrop = new PlantedCrop();
         plantedCrop.setProduct(product);
         plantedCrop.setTerrain(terrain);
         plantedCrop.setPlantingDate(plantedCropDTO.getPlantingDate());
         plantedCrop.setPlantedArea(plantedCropDTO.getPlantedArea());
         plantedCrop.setHarvestDate(plantedCropDTO.getHarvestDate());
         plantedCrop.setStatus(plantedCropDTO.getStatus());

         PlantedCrop savedPlantedCrop = plantedCropService.savePlantedCrop(plantedCrop);
         return ResponseEntity.ok(savedPlantedCrop);
     } catch (Exception e) {
         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + e.getMessage());
     }
 }




    @GetMapping("/plantedCrop")
    public ResponseEntity<List<PlantedCropDTO>> getAllPlantedCrop() {
        List<PlantedCropDTO> plantedCropDTOs = plantedCropService.getAllPlantedCrop();
        return new ResponseEntity<>(plantedCropDTOs, HttpStatus.OK);
    }
    @GetMapping("/plantedCrop2")
    public ResponseEntity<?> getAllPlantedCrop2() {
        return new ResponseEntity<>(plantedCropService.getAllPlantedCrop(), HttpStatus.OK);
    }
    @GetMapping("/getPlantedCropsByTerrainId/{id}")
    public ResponseEntity <List<PlantedCrop>> getPlantedCropsByTerrainId(@PathVariable Integer id) {
        List<PlantedCrop> crops = plantedCropService.getPlantedCropByTerrainId(id);
        return new ResponseEntity<>(crops, HttpStatus.OK);
    }
/*
    @GetMapping("/getPlantedCropsByTerrainId2/{id}")
    public ResponseEntity <List<PlantedCropDTO>> getPlantedCropsByTerrainId2(@PathVariable Integer id) {
        List<PlantedCropDTO> crops = plantedCropService.getPlantedCropByTerrainId2(id);
        return new ResponseEntity<>(crops, HttpStatus.OK);
    }   */

    @GetMapping("/getPlantedCropsByTerrainId2/{id}")
    public ResponseEntity<List<PlantedCropDTO>> getPlantedCropsByTerrainId2(@PathVariable Integer id) {
        List<PlantedCropDTO> cropDTOs = plantedCropService.getPlantedCropDTOsByTerrainId2(id);
        return new ResponseEntity<>(cropDTOs, HttpStatus.OK);
    }


    @GetMapping("/plantedCrop/{id}")
    public ResponseEntity<?> getPlantedCropById(@PathVariable Integer id) {
        return new ResponseEntity<>(plantedCropService.getPlantedCropById(id), HttpStatus.OK);
    }

    @GetMapping("/deletePlantedCrop/{id}")
    public ResponseEntity<?> deletePlantedCrop(@PathVariable Integer id) {
        return new ResponseEntity<>(plantedCropService.deletePlantedCrop(id), HttpStatus.OK);
    }

    @PostMapping("/editPlantedCrop/{id}")
    public ResponseEntity<?> editPlantedCrop(@RequestBody PlantedCrop plantedCrop, @PathVariable Integer id) {
        return new ResponseEntity<>(plantedCropService.editPlantedCrop(plantedCrop, id), HttpStatus.CREATED);
    }
}
