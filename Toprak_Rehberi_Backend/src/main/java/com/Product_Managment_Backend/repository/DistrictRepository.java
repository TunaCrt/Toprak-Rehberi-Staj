package com.Product_Managment_Backend.repository;

import com.Product_Managment_Backend.model.District;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DistrictRepository extends JpaRepository<District, Integer> {
    List<District> findByCityId(Integer cityId);
}
