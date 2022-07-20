package com.example.tuwaiqfullstack.ExpectError;

public class InvalidIDException extends RuntimeException {
    public InvalidIDException(String message) {
        super(message);
    }
}