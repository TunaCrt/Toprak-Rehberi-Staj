package com.Product_Managment_Backend.repository;

import com.Product_Managment_Backend.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Integer> {
}