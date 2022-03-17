package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
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

    @GetMapping(value = "/getapi")
    public String getPetsFromApi(){
        String url="https://petstore.swagger.io/v2/store/order/8";
        WebClient client = WebClient.create();
        WebClient.ResponseSpec responseSpec = client.get()
                .uri(url)
                .retrieve();
        Mono<Pet> responseBody = responseSpec.bodyToMono(Pet.class);
        Integer id=responseBody.map(pet -> pet.getId()).block();
        Integer petId=responseBody.map(pet -> pet.getPetId()).block();
        Integer quantity=responseBody.map(pet -> pet.getQuantity()).block();
        String shipDate=responseBody.map(pet -> pet.getShipDate()).block();
        String status=responseBody.map(pet -> pet.getStatus()).block();
        Boolean complete=responseBody.map(pet -> pet.getComplete()).block();
        Pet p=new Pet(id,petId,quantity,shipDate,status,complete);
        petService.addPet(p);
        return shipDate;
    }

}
