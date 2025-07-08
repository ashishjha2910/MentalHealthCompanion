package com.mentalhealth.backend.repository;

import com.mentalhealth.backend.model.JournalEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface JournalRepository extends JpaRepository<JournalEntry, Long> {
    List<JournalEntry> findByUserEmail(String userEmail);
}
