package com.Product_Managment_Backend.repository;

import com.Product_Managment_Backend.model.Neighborhood;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NeighborhoodRepository extends JpaRepository<Neighborhood, Integer> {
    List<Neighborhood> findByDistrictId(Integer districtId);
}
