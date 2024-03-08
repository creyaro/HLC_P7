package com.hlc.studentsservice.integration;

import com.hlc.studentsservice.Repository.Impl.StudentRepository;
import com.hlc.studentsservice.Student;
import jakarta.ws.rs.core.MediaType;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
public class StudentsControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StudentRepository studentRepository;

    @Test
    void testCreateStudent() throws Exception {
        // Se configura el comportamiento del mock del repositorio
        Student student = new Student("John", "2000-01-29", "12345678A");
        when(studentRepository.save(any(Student.class))).thenReturn(student);
        // Se realiza la solicitud POST al endpoint /students
        String studentJson = "{\"name\": \"John\", \"birthDate\": \"2000-01-29\", \"dni\": \"12345678A\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/students")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(studentJson))
                .andExpect(status().isCreated());
    }
}
