package com.example.backend.service.Interface;

import com.example.backend.entity.Reservation;

import java.util.List;

public interface ReservationService {
    public Reservation addReservation(Reservation reservation, Long id);
    public Reservation updateReservation(Reservation reservation);
    public void deleteReservation(Reservation reservation);
    public Reservation getReservationById(Long id);
    public List<Reservation> getAllReservations();

}
