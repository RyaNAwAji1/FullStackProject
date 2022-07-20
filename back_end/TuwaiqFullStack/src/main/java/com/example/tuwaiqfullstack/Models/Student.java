package com.example.tuwaiqfullstack.Models;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.Valid;
import org.hibernate.validator.constraints.Length;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.validation.constraints.*;
import java.util.Collection;
import java.util.Collections;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Valid
@Entity
public class Student implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;
    @NotEmpty(message = "Name most not be empty")
    @Length(min = 3, max = 20, message = "Name must be between 3 and 20 length range")
    private String studentName;
    @NotEmpty(message = "Password most not be empty")
    private String studentPassword;
    @Email(message = "Email most be in Email format")
    @NotEmpty(message = "Email most not be empty")
    private String studentEmail;
//    @Pattern(regexp = "^(009665|9665|/+9665|05|5)[013456789][0-9]{7}$", message = "invalid phone Number")
    private String studentPhone;
    @NotNull(message = "Age most not be empty")
    @Positive(message = "Age Only positive!")
    private Integer studentAge;
    private String studentRole = "STUDENT";



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(new SimpleGrantedAuthority(this.getStudentRole()));
    }

    @Override
    public String getPassword() {
        return studentPassword;
    }

    @Override
    public String getUsername() {
        return studentName;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }



}
