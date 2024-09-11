package com.Product_Managment_Backend.controller;

import com.Product_Managment_Backend.model.Product;
import com.Product_Managment_Backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {
    /*(@Autowired)Bu anotasyon, bağımlılık enjeksiyonunu sağlar. ProductService sınıfına bağımlıdır.
    public ProductController(ProductService productService) {this.productService = productService; }
    bu kod satırlarının görevini sağlar
    */
    @Autowired
    private ProductService productService;

    @PostMapping("/saveProduct2")
    public ResponseEntity<?> saveProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.CREATED);
    }
    @PostMapping("/{productId}/sowing")
    public ResponseEntity<String> addEvaluation(@PathVariable Integer productId, @RequestBody Map<String, String> request) {
        String rating = request.get("rating");
        productService.addSowing(productId, rating);
        return ResponseEntity.ok("Değerlendirme başarıyla eklendi ve başarı yüzdesi güncellendi.");
    }
    @GetMapping("/product2")
    public ResponseEntity<?> getAllProduct() {
        return new ResponseEntity<>(productService.getAllProduct(), HttpStatus.OK);
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Integer id) {
        return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
    }

    @GetMapping("/deleteProduct/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
        return new ResponseEntity<>(productService.deleteProduct(id), HttpStatus.OK);
    }

    @PostMapping("/editProduct/{id}")
    public ResponseEntity<?> editProduct(@RequestBody Product product, @PathVariable Integer id) {
        return new ResponseEntity<>(productService.editProduct(product, id), HttpStatus.CREATED);
    }
}
