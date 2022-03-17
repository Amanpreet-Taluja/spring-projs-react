package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class PetConfig {
    @Bean
    CommandLineRunner commandLineRunner(PetRepository repository){
        return args -> {
            Pet mariam = new Pet(
                    1,
                    1,
                    4,
                    "24th",
                    "done",
                    true
            );
            Pet alex = new Pet(
                    2,
                    2,
                    5,
                    "25th",
                    "transit",
                    false
            );

            repository.saveAll(
                    List.of(mariam,alex)
            );
        };
    }
}
