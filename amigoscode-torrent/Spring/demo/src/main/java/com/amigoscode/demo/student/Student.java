package com.amigoscode.demo.student;

import java.util.UUID;

public class Student {
    public final UUID studentID;
    public final String firstName;
    public final String lastName;
    public final String email;
    public final Gender gender;

    public Student(UUID studentID, String firstName, String lastName, String email, Gender gender) {
        this.studentID = studentID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
    }

    public UUID getStudentID() {
        return studentID;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public Gender getGender() {
        return gender;
    }

    enum Gender{
        MALE,FEMALE
    }
}
