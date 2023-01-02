package com.example.backend.service.Implementation;

import com.example.backend.entity.Reservation;
import com.example.backend.repository.ReservationRepo;
import com.example.backend.service.Interface.ReservationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServiceImp implements ReservationService {
ReservationRepo reservationRepo;

    public ReservationServiceImp(ReservationRepo reservationRepo) {
        this.reservationRepo = reservationRepo;
    }

    @Override
    public Reservation addReservation(Reservation reservation) {
        return reservationRepo.save(reservation);
    }

    @Override
    public Reservation updateReservation(Reservation reservation) {
        return reservationRepo.save(reservation);
    }

    @Override
    public void deleteReservation(Reservation reservation) {
        reservationRepo.delete(reservation);
    }

    @Override
    public Reservation getReservationById(Long id) {
        return reservationRepo.findById(id).orElse(null);
    }

    @Override
    public List<Reservation> getAllReservations() {
        return reservationRepo.findAll();
    }
}
