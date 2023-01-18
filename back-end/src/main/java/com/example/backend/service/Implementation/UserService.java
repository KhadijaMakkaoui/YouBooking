package com.example.backend.service.Implementation;

import com.example.backend.entity.Role;
import com.example.backend.entity.User;
import com.example.backend.repository.RoleRepo;
import com.example.backend.repository.UserRepo;
/*
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
*/
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserService {


    UserRepo userRepository;
    RoleRepo roleRepository;

    public UserService(UserRepo userRepository, RoleRepo roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }
   /* public UserDetails findByEmail(String email){
        User user= userRepository.findByEmail(email);
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                Collections.singleton(
                        new SimpleGrantedAuthority(user.getRole().getTitre().toString()))
        );
    }*/
    public User getUserById(Long clientId) {
        return userRepository.findById(clientId).orElse(null);
    }


    public User register(User user){
        Role role = roleRepository.findByTitre("ROLE_USER");

        user.setRole(role);
        return userRepository.save(user);
    }

}
