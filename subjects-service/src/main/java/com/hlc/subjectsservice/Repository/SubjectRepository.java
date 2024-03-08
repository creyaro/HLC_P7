package com.hlc.subjectsservice.Repository;

import com.hlc.subjectsservice.Subject;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SubjectRepository extends MongoRepository<Subject, String> {
    List<Subject> findAll();
}
