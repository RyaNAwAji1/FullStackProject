package com.example.tuwaiqfullstack.Controller;
import com.example.tuwaiqfullstack.ExpectError.InvalidIDException;
import com.example.tuwaiqfullstack.Services.NotesService;


import com.example.tuwaiqfullstack.Models.API;
import com.example.tuwaiqfullstack.Models.Notes;
import com.example.tuwaiqfullstack.Models.Staff;
import com.example.tuwaiqfullstack.Repo.NotesRepo;
import lombok.AllArgsConstructor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/notes")
@CrossOrigin("*")
public class NotesController {
    private final NotesService notesService;


    @GetMapping
    public ResponseEntity getAll(){

        return ResponseEntity.status(200).body(notesService.getAll());
    }
    @GetMapping("/{Id}")
    public ResponseEntity getById(@PathVariable Integer Id){
        return ResponseEntity.status(HttpStatus.OK).body(notesService.getById(Id));
    }
    @PostMapping("/add")
    public ResponseEntity addNotes(@RequestBody Notes notes, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.status(400).body(errors.getFieldError().getDefaultMessage());
        }

        notesService.register(notes);
        return ResponseEntity.status(HttpStatus.CREATED).body("A Note ID: " + notes.getId() + " has been Added!");
    }



    @PutMapping("/update/{Id}")
    public ResponseEntity updateNotes(@PathVariable Integer Id, @RequestBody
    Notes notes) {
        notesService.updateNotes(Id,notes);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body("The Note has been Updated!");

}}