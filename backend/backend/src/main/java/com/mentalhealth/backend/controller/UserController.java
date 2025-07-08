package com.mentalhealth.backend.controller;

import com.mentalhealth.backend.model.User;
import com.mentalhealth.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")  // Match your frontend port
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public Map<String, String> handleLogin(@RequestBody User user) {
        Map<String, String> response = new HashMap<>();
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isPresent()) {
            response.put("message", "User already exists, login successful");
        } else {
            userRepository.save(user);
            response.put("message", "New user registered and login successful");
        }

        return response;
    }
}



