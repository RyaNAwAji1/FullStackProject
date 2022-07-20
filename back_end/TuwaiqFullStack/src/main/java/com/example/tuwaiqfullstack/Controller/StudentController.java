package com.example.tuwaiqfullstack.Controller;


import com.example.tuwaiqfullstack.Models.API;
import com.example.tuwaiqfullstack.Models.Student;
import com.example.tuwaiqfullstack.Services.StudentService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/student")
public class StudentController {

    private final StudentService studentService;
    Logger logs = LoggerFactory.getLogger(StudentController.class);

// Login
    @GetMapping("/login")
    public ResponseEntity<?> studentLogin(){
        logs.info(">> studentLogin << in |StudentController| Has been used");
        return ResponseEntity.status(HttpStatus.OK).body(new API("Welcome Student",200));
    }

    // Register/Add Student
    @PostMapping("/register")
    public ResponseEntity Register(@RequestBody @Valid Student student, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.status(400).body(errors.getFieldError().getDefaultMessage());
        }
        logs.info(">> Register << in |StudentController| Has been used. Student has been added!");

        studentService.register(student);
        return ResponseEntity.status(HttpStatus.CREATED).body("A Student ID: " + student.getId() + " has been Added!");
    }
    @GetMapping("/{Index}")
    public ResponseEntity getStudentById(@PathVariable Integer Index){
        logs.info(">> getStudentById << in |StudentController| Has been used. Student has been displayed!");
        return ResponseEntity.status(HttpStatus.OK).body(studentService.getStudentById(Index));
    }


    //get all users
    @GetMapping
    public ResponseEntity getAllStudent() {

        logs.info(">> getAllStudent << in |StudentController| Has been used. All Students have been displayed!");
        return ResponseEntity.status(HttpStatus.OK).body(studentService.getAllStudent());

    }




    //update a user
    @PutMapping("/update/{Id}")
    public ResponseEntity updateStudent( @Valid @PathVariable Integer Id, @RequestBody Student student, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.status(400).body(errors.getFieldError().getDefaultMessage());
        }
        logs.info(">> updateStudent << in |StudentController| Has been used. The Student has been Updated!");
        studentService.updateStudent(Id,student);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body("The Student has been Updated!");
    }


    //delete a user
    @DeleteMapping("/delete/{Id}")
    public ResponseEntity deleteStudent(@PathVariable Integer Id) {
        logs.info(">> deleteStudent << in |StudentController| Has been used. A Student has been Deleted!");
        studentService.deleteStudent(Id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("The Student has been Deleted!");
    }


}