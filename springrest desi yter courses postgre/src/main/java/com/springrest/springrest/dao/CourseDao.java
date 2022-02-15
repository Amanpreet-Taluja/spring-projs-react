package com.springrest.springrest.dao;

import com.springrest.springrest.entities.Courses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseDao extends JpaRepository<Courses,Long> {



}
