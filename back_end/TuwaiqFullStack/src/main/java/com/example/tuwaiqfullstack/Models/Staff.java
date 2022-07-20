package com.example.tuwaiqfullstack.Models;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.Collection;
import java.util.Collections;

@Getter @Setter
@NoArgsConstructor
@Valid
@Entity
public class Staff implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;

    @NotEmpty(message = "Name most not be empty")
    @Length(min = 3, max = 20, message = "Name must be between 3 and 20 length range")
    private String staffName;
    @NotEmpty(message = "Password most not be empty")
    private String staffPassword;
    private String staffRole = "ADMIN";





    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(new SimpleGrantedAuthority(this.getStaffRole()));
    }

    @Override
    public String getPassword() {
        return staffPassword;
    }

    @Override
    public String getUsername() {
        return staffName;
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
