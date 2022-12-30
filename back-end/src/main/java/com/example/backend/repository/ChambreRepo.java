package com.example.backend.repository;

import com.example.backend.entity.Chambre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChambreRepo extends JpaRepository<Chambre, Long> {

}
