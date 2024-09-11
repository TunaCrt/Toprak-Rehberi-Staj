package com.Product_Managment_Backend.controller;

import com.Product_Managment_Backend.model.Product;
import com.Product_Managment_Backend.model.Sowing;
import com.Product_Managment_Backend.repository.ProductRepository;
import com.Product_Managment_Backend.repository.SowingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SowingController {

    @Autowired
    private SowingRepository sowingRepository;

    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/rate")
    public Sowing rateProduct(@RequestParam Integer productId, @RequestParam String rating) {
        Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Ürün bulunamadı"));

        Sowing sowing = new Sowing();
        sowing.setProduct(product);
        sowing.setRating(rating);
        sowingRepository.save(sowing);

        // Ürünün başarı oranını güncelle
        updateProductSuccessRate(product);

        return sowing;
    }

    private void updateProductSuccessRate(Product product) {
        List<Sowing> sowings = sowingRepository.findByProduct(product);

        // Aritmetik ortalama hesapla
        double average = sowings.stream()
                .mapToInt(s -> {
                    switch (s.getRating().toLowerCase()) {
                        case "iyi":
                            return 3;
                        case "orta":
                            return 2;
                        case "kötü":
                            return 1;
                        default:
                            return 0;
                    }
                })
                .average().orElse(0.0);

        // Başarı oranını yüzdeye çevir
        String successRate = String.format("%.0f%%", (average / 3.0) * 100);
        product.setSuccessRate(successRate);
        productRepository.save(product);
    }
}
