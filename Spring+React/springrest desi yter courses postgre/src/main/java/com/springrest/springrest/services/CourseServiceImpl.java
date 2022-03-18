package com.springrest.springrest.services;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CourseServiceImpl implements CourseService{
    @Autowired
    private CourseDao courseDao;

    @Override
    public List<Courses> getCourses() {
        return courseDao.findAll();
    }

    @Override
    public Courses getCourse(long courseId) {
        return courseDao.getOne(courseId);
    }

    @Override
    public Courses addCourse(Courses course) {
        courseDao.save(course);
        return course;
    }

    @Override
    public Courses updateCourse(Courses course) {
        courseDao.save(course);
        return course;
    }

    @Override
    public void deleteCourse(long parseLong) {
        Courses entity=courseDao.getById(parseLong);
        courseDao.delete(entity);
    }
}
