package com.example.backend.repository;

import com.example.backend.entity.Chambre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChambreRepo extends JpaRepository<Chambre, Long> {
    List<Chambre> findByHotelId(Long id);
    Chambre findFirstByDisponibleTrue();
}
