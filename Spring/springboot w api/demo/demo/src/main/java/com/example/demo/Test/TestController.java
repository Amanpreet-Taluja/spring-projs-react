package com.example.demo.Test;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.List;

@RestController
public class TestController {
    public Integer input=1;
    @RequestMapping("/hello")
    public String hello(){
        return "hello";
    }

    @GetMapping(value = "/countries")
    public String getCountries(){
        String url="https://petstore.swagger.io/v2/store/order/"+input.toString();
        WebClient client = WebClient.create();
        WebClient.ResponseSpec responseSpec = client.get()
                .uri(url)
                .retrieve();
        Mono<Model> responseBody = responseSpec.bodyToMono(Model.class);
        return responseBody.toString();
    }
}
