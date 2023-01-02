package com.example.backend.service.Interface;

import com.example.backend.entity.Reservation;
import com.example.backend.repository.ReservationRepo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationService {
    public Reservation addReservation(Reservation reservation);
    public Reservation updateReservation(Reservation reservation);
    public void deleteReservation(Reservation reservation);
    public Reservation getReservationById(Long id);
    public List<Reservation> getAllReservations();
}
