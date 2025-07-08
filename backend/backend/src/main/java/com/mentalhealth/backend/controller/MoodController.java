package com.mentalhealth.backend.controller;

import com.mentalhealth.backend.model.MoodEntry;
import com.mentalhealth.backend.repository.MoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/moods")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React frontend
public class MoodController {

    @Autowired
    private MoodRepository moodRepository;

    // Save a mood entry
    @PostMapping
    public MoodEntry saveMood(@RequestBody MoodEntry mood) {
        return moodRepository.save(mood);
    }

    // Fetch all moods for a user, ordered by most recent
    @GetMapping("/{email}")
    public List<MoodEntry> getMoods(@PathVariable String email) {
        return moodRepository.findByUserEmailOrderByTimestampDesc(email);
    }
}


