package com.Product_Managment_Backend.service;

import com.Product_Managment_Backend.model.Product;
import com.Product_Managment_Backend.model.Sowing;
import com.Product_Managment_Backend.repository.ProductRepository;
import com.Product_Managment_Backend.repository.SowingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImp implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SowingRepository sowingRepository;

    @Override
    public Product saveProduct(Product product) {

        return productRepository.save(product);
    }


    @Override
    public Product getProductById(Integer id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    /*@Override
    public Product getProductById(Integer id) {
        return productRepository.findById(id).get();
    }*/

    @Override
    public String deleteProduct(Integer id) {
        Product product = productRepository.findById(id).get();

        if (product != null) {
            productRepository.delete(product);
            return "Product Delete Sucessfully";
        }

        return "Something wrong on server";
    }

    @Override
    public Product editProduct(Product p, Integer id) {

        Product oldProduct = productRepository.findById(id).get();

        oldProduct.setProductName(p.getProductName());
        oldProduct.setDescription(p.getDescription());
        //oldProduct.setPrice(p.getPrice());
        //oldProduct.setStatus(p.getStatus());

        return productRepository.save(oldProduct);
    }




    public void addSowing(Integer productId, String rating) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Ürün bulunamadı"));

        Sowing sowing = new Sowing();
        sowing.setRating(rating);
        sowing.setProduct(product);

        sowingRepository.save(sowing);

        updateProductSuccessRate(product); // Ürünün başarı yüzdesini güncelle
    }

    public void updateProductSuccessRate(Product product) {
        // İlgili ürüne ait tüm sowing değerlendirmelerini al
        List<Sowing> sowings = sowingRepository.findByProductId(product.getId());

        // Değerlendirme sayısını hesapla
        int goodCount = (int) sowings.stream().filter(s -> s.getRating().equalsIgnoreCase("Çok İyi")).count();
        int mediumCount = (int) sowings.stream().filter(s -> s.getRating().equalsIgnoreCase("Orta")).count();
        int badCount = (int) sowings.stream().filter(s -> s.getRating().equalsIgnoreCase("Kötü")).count();

        int totalCount = sowings.size(); // Toplam değerlendirme sayısı

        if (totalCount > 0) {
            // Başarı yüzdesini hesapla: 'Çok İyi' için tam puan, 'Orta' için yarım puan ve 'Kötü' için sıfır puan
            double successRate = ((goodCount * 1.0 + mediumCount * 0.5) / totalCount) * 100;

            // Yüzde 30'un altına düşmemesi ve yüzde 95'in üstüne çıkmaması için sınırları kontrol et
            successRate = Math.max(30.0, Math.min(successRate, 95.0)); // %30 altına düşmesin, %95 üstüne çıkmasın

            // Hesaplanan başarı yüzdesini ürüne ata
            product.setSuccessRate(Double.toString(successRate));
            productRepository.save(product); // Ürünü kaydet
        }}

}
