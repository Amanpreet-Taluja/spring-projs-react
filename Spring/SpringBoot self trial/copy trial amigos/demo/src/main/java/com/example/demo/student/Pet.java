package com.example.demo.student;

import javax.persistence.*;

import java.util.Arrays;

@Entity
@Table(name="pets")
public class Pet {

    @Id
    @Column(name = "id")
    private Integer id;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;
    private String name;
    private String[]  photoUrls;
    private String status;

    public Pet() {
    }

    public Pet(Integer id, String name, String[] photoUrls, String status) {
        this.id = id;
        this.name = name;
        this.photoUrls = photoUrls;
        this.status = status;
    }

    public Pet(Integer id, Category category, String name, String[] photoUrls, String status) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.photoUrls = photoUrls;
        this.status = status;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String[] getPhotoUrls() {
        return photoUrls;
    }

    public void setPhotoUrls(String[] photoUrls) {
        this.photoUrls = photoUrls;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Pet{" +
                "id=" + id +
                ", category=" + category +
                ", name='" + name + '\'' +
                ", photoUrls=" + Arrays.toString(photoUrls) +
                ", status='" + status + '\'' +
                '}';
    }


}

