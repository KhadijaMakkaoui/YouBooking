/*
package com.example.backend.controller;

import com.example.backend.dto.AuthenticationRequest;
import com.example.backend.config.JwtUtils;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepo;
import com.example.backend.service.Implementation.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final UserRepo userRepository;
    private final JwtUtils jwtUtils;
    @Autowired
    UserService userService ;
    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticate(@RequestBody AuthenticationRequest request){

        final UserDetails user= userService.findByEmail(request.getEmail());
        if (user != null){
            final String token=jwtUtils.generateToken(user);
            return ResponseEntity.ok(token);
        }
        return ResponseEntity.badRequest().build();
    }
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user){
        userService.register(user);
        return ResponseEntity.ok("User registered successfully");
    }
}
*/
