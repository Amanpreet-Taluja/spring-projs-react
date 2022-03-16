package com.example.demo.Test;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Arrays;
import java.util.List;

@RestController
public class TestController {
    @RequestMapping("/hello")
    public String hello(){
        return "hello";
    }

    @GetMapping(value = "/countries")
    public String getCountries(){
        String url="https://petstore.swagger.io/v2/pet/1";
        WebClient client = WebClient.create();
        WebClient.ResponseSpec responseSpec = client.get()
                .uri(url)
                .retrieve();
        String responseBody = responseSpec.bodyToMono(String.class).block();
        return responseBody;
    }
}
