package com.example.demo.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PetRepository extends JpaRepository<Pet,Long> {
    @Query("SELECT s FROM Pet s WHERE s.id=?1")
    Optional<Pet> findPetById(Integer id);

}
