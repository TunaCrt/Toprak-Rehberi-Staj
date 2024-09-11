package com.Product_Managment_Backend.service;

import com.Product_Managment_Backend.dto.PlantedCropDTO;
import com.Product_Managment_Backend.model.PlantedCrop;
import com.Product_Managment_Backend.model.Product;
import com.Product_Managment_Backend.model.Terrain;
import com.Product_Managment_Backend.repository.PlantedCropRepository;
import com.Product_Managment_Backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlantedCropServiceImp implements PlantedCropService {

    @Autowired
    private PlantedCropRepository plantedCropRepository;
    @Autowired

    private ProductService productService; // Product servis


    @Override
    public PlantedCrop savePlantedCrop(PlantedCrop plantedCrop) {

        return plantedCropRepository.save(plantedCrop);
    }



    public List<PlantedCropDTO> getAllPlantedCrop() {
        List<PlantedCrop> plantedCrops = plantedCropRepository.findAll();
        List<PlantedCropDTO> plantedCropDTOs = new ArrayList<>();

        for (PlantedCrop plantedCrop : plantedCrops) {
            PlantedCropDTO dto = new PlantedCropDTO();
            dto.setId(plantedCrop.getId());
            dto.setPlantingDate(plantedCrop.getPlantingDate());
            dto.setPlantedArea(plantedCrop.getPlantedArea());
            dto.setHarvestDate(plantedCrop.getHarvestDate());
            dto.setStatus(plantedCrop.getStatus());

            // Product bilgilerini ekle
            Product product = productService.getProductById(plantedCrop.getProduct().getId());
            if (product != null) {
                dto.setProductName(product.getProductName());
                dto.setProductId(product.getId());

            }

            plantedCropDTOs.add(dto);
        }

        return plantedCropDTOs;
    }

   /* public PlantedCropDTO getPlantedCropById(Integer id) {
        PlantedCrop plantedCrop = plantedCropRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("PlantedCrop not found with id: " + id)); // Nesne bulunamazsa hata fırlat

        // PlantedCropDTO nesnesini oluştur ve verileri ayarla
        PlantedCropDTO dto = new PlantedCropDTO();
        dto.setId(plantedCrop.getId());
        dto.setPlantingDate(plantedCrop.getPlantingDate());
        dto.setPlantedArea(plantedCrop.getPlantedArea());
        dto.setHarvestDate(plantedCrop.getHarvestDate());
        dto.setStatus(plantedCrop.getStatus());

        // Product bilgilerini ekle
        Product product = productService.getProductById(plantedCrop.getProduct().getId());
        if (product != null) {
            dto.setProductName(product.getProductName());
            dto.setProductId(product.getId());
        }

        return dto;
    }*/

    @Override
    public PlantedCrop getPlantedCropById(Integer id) {
        return plantedCropRepository.findById(id).get();
    }
   /* public PlantedCropDTO getPlantedCropById2(Integer id) {
        PlantedCrop plantedCrop = plantedCropRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("PlantedCrop not found with id: " + id)); // Nesne bulunamazsa hata fırlat

        // PlantedCropDTO nesnesini oluştur ve verileri ayarla
        PlantedCropDTO dto = new PlantedCropDTO();
        dto.setId(plantedCrop.getId());
        dto.setPlantingDate(plantedCrop.getPlantingDate());
        dto.setPlantedArea(plantedCrop.getPlantedArea());
        dto.setHarvestDate(plantedCrop.getHarvestDate());
        dto.setStatus(plantedCrop.getStatus());

        // Product bilgilerini ekle
        Product product = productService.getProductById(plantedCrop.getProduct().getId());
        if (product != null) {
            dto.setProductName(product.getProductName());
            dto.setProductId(product.getId());
        }

        return dto;
    }  */

    public List<PlantedCropDTO> getPlantedCropDTOsByTerrainId2(Integer id) {
        List<PlantedCrop> plantedCrops = plantedCropRepository.findByTerrainId(id);
        List<PlantedCropDTO> plantedCropDTOs = new ArrayList<>();

        for (PlantedCrop plantedCrop : plantedCrops) {
            PlantedCropDTO dto = new PlantedCropDTO();
            dto.setId(plantedCrop.getId());
            dto.setPlantingDate(plantedCrop.getPlantingDate());
            dto.setPlantedArea(plantedCrop.getPlantedArea());
            dto.setHarvestDate(plantedCrop.getHarvestDate());
            dto.setStatus(plantedCrop.getStatus());

            // Product bilgilerini ekle
            Product product = productService.getProductById(plantedCrop.getProduct().getId());
            if (product != null) {
                dto.setProductName(product.getProductName());
                dto.setProductId(product.getId());
            }

            plantedCropDTOs.add(dto);
        }

        return plantedCropDTOs;
    }


    @Override
    public List<PlantedCrop> getPlantedCropByTerrainId(Integer id) {
        return plantedCropRepository.findByTerrainId(id);
    }
 /*   @Override
    public List<PlantedCropDTO> getPlantedCropByTerrainId2(Integer id) {
        return plantedCropRepository.findByTerrainId2(id);
    }   */

    @Override
    public String deletePlantedCrop(Integer id) {
        PlantedCrop plantedCrop = plantedCropRepository.findById(id).get();

        if (plantedCrop != null) {
            plantedCropRepository.delete(plantedCrop);
            return "PlantedCrop Delete Sucessfully";
        }

        return "Something wrong on server";
    }

    @Override
    public PlantedCrop editPlantedCrop(PlantedCrop p, Integer id) {

        PlantedCrop oldplantedCrop = plantedCropRepository.findById(id).get();

        /*oldplantedCrop.setProductName(p.getProductName());
        oldplantedCrop.setDescription(p.getDescription());
        oldplantedCrop.setPrice(p.getPrice());
        oldplantedCrop.setStatus(p.getStatus());  */

        return plantedCropRepository.save(oldplantedCrop);
    }
}
