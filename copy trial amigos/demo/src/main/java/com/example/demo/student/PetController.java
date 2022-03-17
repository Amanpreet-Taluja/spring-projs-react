package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path="api/v1/pet")


public class PetController {
    private final PetService petService;
    @Autowired
    public PetController(PetService petService) {
        this.petService = petService;
    }

    @GetMapping
    public List<Pet> getPet(){
        return petService.getPets();
    }

    @PostMapping
    public void RegisterNewPet(@RequestBody Pet pet){
        petService.addPet(pet);
    }

}
