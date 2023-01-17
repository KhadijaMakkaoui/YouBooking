package com.example.backend.service.Implementation;

import com.example.backend.entity.Chambre;
import com.example.backend.entity.Reservation;
import com.example.backend.entity.User;
import com.example.backend.repository.ReservationRepo;
import com.example.backend.service.Interface.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReservationServiceImp implements ReservationService {
ReservationRepo reservationRepo;
@Autowired
ChambreServiceImp chambreServiceImp;
@Autowired
UserServiceImp userServiceImp;
    SimpleDateFormat sdf = null;

    public ReservationServiceImp(ReservationRepo reservationRepo) {
        this.reservationRepo = reservationRepo;
    }

    @Override
    public Reservation addReservation(Reservation reservation) {
        Chambre c=chambreServiceImp.getFirstChambreByDisponibleTrue();
        User client=userServiceImp.getUserById(1L);

        if (c!=null && client!=null){
            reservation.setChambre(c);
            reservation.setClient(client);
        }
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
