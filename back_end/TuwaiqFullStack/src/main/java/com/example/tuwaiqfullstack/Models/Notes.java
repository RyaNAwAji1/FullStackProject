package com.example.tuwaiqfullstack.Models;

import lombok.*;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Entity;
import javax.validation.Valid;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Notes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;
    private String title;
    private String body;
}
