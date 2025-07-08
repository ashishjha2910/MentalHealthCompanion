package com.mentalhealth.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "journal_entries")
public class JournalEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;
    private String userEmail;

    private LocalDateTime createdAt = LocalDateTime.now();

    public JournalEntry() {}

    public JournalEntry(String content, String userEmail) {
        this.content = content;
        this.userEmail = userEmail;
    }

    // Getters and Setters
    // ...
}
