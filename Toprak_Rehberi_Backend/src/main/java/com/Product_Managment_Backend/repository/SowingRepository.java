package com.Product_Managment_Backend.repository;

import com.Product_Managment_Backend.model.Product;
import com.Product_Managment_Backend.model.Sowing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SowingRepository extends JpaRepository<Sowing, Integer> {
    List<Sowing> findByProduct(Product product);
    List<Sowing> findByProductId(Integer productId);
}
