package com.example.backend.service.Implementation;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepo;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp {
    UserRepo userRepo;

    public UserServiceImp(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User getUserById(Long clientId) {
        return userRepo.findById(clientId).orElse(null);
    }
}
