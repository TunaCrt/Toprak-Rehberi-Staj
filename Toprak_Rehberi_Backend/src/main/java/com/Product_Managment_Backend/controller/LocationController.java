package com.Product_Managment_Backend.controller;

import com.Product_Managment_Backend.model.City;
import com.Product_Managment_Backend.model.District;
import com.Product_Managment_Backend.model.Neighborhood;
import com.Product_Managment_Backend.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping("/cities")
    public List<City> getAllCities() {
        return locationService.getAllCities();
    }

    @GetMapping("/districts/{cityId}")
    public List<District> getDistrictsByCityId(@PathVariable Integer cityId) {
        return locationService.getDistrictsByCityId(cityId);
    }

    @GetMapping("/neighborhoods/{districtId}")
    public List<Neighborhood> getNeighborhoodsByDistrictId(@PathVariable Integer districtId) {
        return locationService.getNeighborhoodsByDistrictId(districtId);
    }
}

