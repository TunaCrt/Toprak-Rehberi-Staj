package com.Product_Managment_Backend.config;

import com.Product_Managment_Backend.config.JwtRequestFilter;
import com.Product_Managment_Backend.config.CustomUserDetailsService; // Bu servisi uygulamanıza göre düzeltin
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtRequestFilter jwtRequestFilter;
    private final UserDetailsService userDetailsService;

    @Autowired
    public SecurityConfig(JwtRequestFilter jwtRequestFilter, UserDetailsService userDetailsService) {
        this.jwtRequestFilter = jwtRequestFilter;
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/api/register", "/api/login","/cities", "/districts/**","/getTerrainsByUserId/{id}"
                                        , "/neighborhoods/**","/savePlantedCrop",
                                        "/getPlantedCropsByTerrainId/**","/getPlantedCropsByTerrainId2/**", "/plantedCrop/**","/plantedCrop2/**",
                                        "/deletePlantedCrop/**", "/editPlantedCrop/**","/saveProduct2",
                                        "/product2", "/product/{id}", "/deleteProduct/{id}",
                                        "/editProduct/{id}","/rate", "/{productId}/sowing",
                                        "/saveTerrain", "/terrain", "/terrain/{id}"
                                        , "/deleteTerrain/{id}", "/editTerrain/{id}","/getPlantedCropsByTerrainId2/").permitAll()
                                .requestMatchers("/terrain", "/terrain/**","/cities", "/districts/**"
                                        , "/neighborhoods/**","/savePlantedCrop",
                                        "/getPlantedCropsByTerrainId/**","/getPlantedCropsByTerrainId2/**", "/plantedCrop/**","/plantedCrop2/**",
                                        "/deletePlantedCrop/**", "/editPlantedCrop/**","/saveProduct2",
                                        "/product2", "/product/{id}", "/deleteProduct/{id}",
                                        "/editProduct/{id}","/rate", "/{productId}/sowing",
                                        "/saveTerrain/**","/saveTerrain", "/terrain", "/terrain/{id}"
                                        , "/deleteTerrain/{id}", "/editTerrain/{id}","/getPlantedCropsByTerrainId2/").authenticated() // Güncel endpoint'lerin erişim izinlerini kontrol edin
                                .anyRequest().authenticated()

                        /*
                        * .requestMatchers("/cities", "/districts/**", "/neighborhoods/**").authenticated()
                                .requestMatchers("/savePlantedCrop", "/getPlantedCropsByTerrainId/**", "/plantedCrop/**", "/deletePlantedCrop/**", "/editPlantedCrop/**").authenticated()
                                .requestMatchers("/saveProduct2", "/product2", "/product/{id}", "/deleteProduct/{id}", "/editProduct/{id}").authenticated()
                                .requestMatchers("/saveTerrain", "/terrain", "/terrain/{id}", "/deleteTerrain/{id}", "/editTerrain/{id}").authenticated()
                                .requestMatchers("/rate", "/{productId}/sowing").authenticated()
                        * */
                )
                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
