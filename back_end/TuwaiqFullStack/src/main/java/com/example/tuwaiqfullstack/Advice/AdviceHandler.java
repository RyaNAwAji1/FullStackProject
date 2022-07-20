package com.example.tuwaiqfullstack.Advice;

import com.example.tuwaiqfullstack.ExpectError.InvalidIDException;
import com.example.tuwaiqfullstack.ExpectError.UsernameNotFoundException;
import com.example.tuwaiqfullstack.Models.API;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
@RestControllerAdvice
public class AdviceHandler {
    @ExceptionHandler(InvalidIDException.class)
    public ResponseEntity InvalidIDException(InvalidIDException E) {
        String error = E.getMessage();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new API(error, 400));
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity UsernameNotFoundException(UsernameNotFoundException E) {
        String error = E.getMessage();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new API(error, 400));
    }
}