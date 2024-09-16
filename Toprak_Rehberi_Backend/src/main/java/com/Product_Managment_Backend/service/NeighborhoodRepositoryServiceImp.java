package com.Product_Managment_Backend.service;

import com.Product_Managment_Backend.model.Neighborhood;
import com.Product_Managment_Backend.repository.NeighborhoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NeighborhoodRepositoryServiceImp implements NeighborhoodRepositoryService{
    @Autowired
    private NeighborhoodRepository neighborhoodRepository;

    // Mahalle ID'ye göre mahalleyi döndüren metod
    public Neighborhood getNeighborhoodById(Integer id) {
        return neighborhoodRepository.findById(id).orElse(null);
    }
}
