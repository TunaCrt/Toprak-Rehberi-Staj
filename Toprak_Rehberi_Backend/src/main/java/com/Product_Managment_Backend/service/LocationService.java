package com.Product_Managment_Backend.service;
import com.Product_Managment_Backend.model.City;
import com.Product_Managment_Backend.model.District;
import com.Product_Managment_Backend.model.Neighborhood;
import com.Product_Managment_Backend.repository.CityRepository;
import com.Product_Managment_Backend.repository.DistrictRepository;
import com.Product_Managment_Backend.repository.NeighborhoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LocationService {

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private DistrictRepository districtRepository;

    @Autowired
    private NeighborhoodRepository neighborhoodRepository;

    public List<City> getAllCities() {
        return cityRepository.findAll();
    }

    public List<District> getDistrictsByCityId(Integer cityId) {
        return districtRepository.findByCityId(cityId);
    }

    public List<Neighborhood> getNeighborhoodsByDistrictId(Integer districtId) {
        return neighborhoodRepository.findByDistrictId(districtId);
    }
}
