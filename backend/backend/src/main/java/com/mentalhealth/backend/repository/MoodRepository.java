package com.mentalhealth.backend.repository;

import com.mentalhealth.backend.model.MoodEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MoodRepository extends JpaRepository<MoodEntry, Long> {
    List<MoodEntry> findByUserEmailOrderByTimestampDesc(String userEmail);
}


