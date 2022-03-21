package com.example.demo.student;

import javax.persistence.*;

@Entity
@Table(name="tags")
public class Tags {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long tag_id;
    private Integer id;
    private String name;


    public Tags() {
    }

    public Tags(Integer id, String name) {
        this.id = id;
        this.name = name;
    }



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    @Override
    public String toString() {
        return "Tags{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
