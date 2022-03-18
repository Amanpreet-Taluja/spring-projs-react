package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PetService {
    private final PetRepository petRepository;
    @Autowired
    public PetService(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    public List<Pet> getPets(){
        return petRepository.findAll();
    }

    public void addPet(Pet pet) {
        Optional<Pet> petOptional = petRepository.findPetById(pet.getId());
        if(petOptional.isPresent()){
            throw new IllegalStateException("id taken");
        }
        petRepository.save(pet);
    }

}
