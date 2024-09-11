package com.Product_Managment_Backend.repository;

import com.Product_Managment_Backend.model.Product;
import com.Product_Managment_Backend.model.Terrain;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TerrainRepository extends JpaRepository<Terrain, Integer> {
}
