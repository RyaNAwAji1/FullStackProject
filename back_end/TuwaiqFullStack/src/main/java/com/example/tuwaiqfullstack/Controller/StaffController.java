package com.example.tuwaiqfullstack.Controller;


import com.example.tuwaiqfullstack.Models.API;
import com.example.tuwaiqfullstack.Models.Staff;
import com.example.tuwaiqfullstack.Services.StaffService;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/staff")
public class StaffController {

    private final StaffService staffService;
    Logger logs = LoggerFactory.getLogger(StaffController.class);

    // Login
    @GetMapping("/login")
    public ResponseEntity<?> staffLogin(){
        logs.info(">> staffLogin << in |StaffController| Has been used");
        return ResponseEntity.status(HttpStatus.OK).body(new API("Welcome Staff",200));
    }

    // Register/Add Staff
    @PostMapping("/register")
    public ResponseEntity Register(@RequestBody @Valid Staff staff, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.status(400).body(errors.getFieldError().getDefaultMessage());
        }
        logs.info(">> Register << in |StaffController| Has been used. Staff has been added!");

        staffService.register(staff);
        return ResponseEntity.status(HttpStatus.CREATED).body("A Staff ID: " + staff.getId() + " has been Added!");
    }
    @GetMapping("/{Index}")
    public ResponseEntity getStaffById(@PathVariable Integer Index){
        logs.info(">> getStaffById << in |StaffController| Has been used. Staff has been displayed!");
        return ResponseEntity.status(HttpStatus.OK).body(staffService.getStaffById(Index));
    }


    //get all users
    @GetMapping
    public ResponseEntity getAllStaff() {

        logs.info(">> getAllStaff << in |StaffController| Has been used. All Staffs have been displayed!");
        return ResponseEntity.status(HttpStatus.OK).body(staffService.getAllStaff());

    }




    //update a user
    @PutMapping("/update/{Id}")
    public ResponseEntity updateStaff(@PathVariable Integer Id, @RequestBody Staff staff) {
        logs.info(">> updateStaff << in |StaffController| Has been used. The Staff has been Updated!");
        staffService.updateStaff(Id,staff);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body("The Staff has been Updated!");
    }


    //delete a user
    @DeleteMapping("/delete/{Id}")
    public ResponseEntity deleteStaff(@PathVariable Integer Id) {
        logs.info(">> deleteStaff << in |StaffController| Has been used. A Staff has been Deleted!");
        staffService.deleteStaff(Id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("The Staff has been Deleted!");
    }


}