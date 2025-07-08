package com.mentalhealth.backend.controller;

import com.mentalhealth.backend.model.JournalEntry;
import com.mentalhealth.backend.repository.JournalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/journal")
@CrossOrigin(origins = "http://localhost:3000")
public class JournalController {

    @Autowired
    private JournalRepository journalRepository;

    @PostMapping
    public JournalEntry saveEntry(@RequestBody JournalEntry entry) {
        return journalRepository.save(entry);
    }

    @GetMapping("/{email}")
    public List<JournalEntry> getEntriesByEmail(@PathVariable String email) {
        return journalRepository.findByUserEmail(email);
    }
}
