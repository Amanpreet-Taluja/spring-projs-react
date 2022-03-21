package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;


@RestController
@RequestMapping(path="/pet")


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
        String url="https://petstore.swagger.io/v2/pet/10001";
        WebClient client = WebClient.create();
        try {
            WebClient.ResponseSpec responseSpec = client.get()
                    .uri(url)
                    .retrieve();
            Mono<Pet> responseBody = responseSpec.bodyToMono(Pet.class);
            Integer id=responseBody.map(pet -> pet.getId()).block();
            String name=responseBody.map(pet -> pet.getName()).block();
            String status=responseBody.map(pet -> pet.getStatus()).block();
            String[] photoUrls=responseBody.map(pet -> pet.getPhotoUrls()).block();
            Integer category_Id=responseBody.map(pet ->pet.getCategory().getId()).block();
            String category_name=responseBody.map(pet -> pet.getCategory().getName()).block();
            Category cat=new Category(category_Id,category_name);
            List<Tags> tag=responseBody.map(pet->pet.getTags()).block();
            Pet p=new Pet(id,cat,name,photoUrls,tag,status);
            /*Pet p=new Pet(id,name,photoUrls,status);*/
            petService.addPet(p);
            /*
            */

            return "Done";
        }
        catch(java.lang.Exception e)
        {
            return e.getMessage();
        }


        /*For Response headers:
        ResponseEntity<String> response = client.get()
                .uri(url)
                .retrieve()
                .toEntity(String.class)
                .block();
        HttpHeaders responseHeaders = response.getHeaders();
        String headerValue = responseHeaders.get("Connection").get(0);
        if(headerValue=="close")
        {
            return headerValue;
        }
        */

    }

}
