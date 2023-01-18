package com.example.backend.service.Implementation;

import com.example.backend.entity.Chambre;
import com.example.backend.entity.Reservation;
import com.example.backend.repository.ReservationRepo;
import com.example.backend.service.Interface.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.List;

@Service
public class ReservationServiceImp implements ReservationService {
ReservationRepo reservationRepo;
@Autowired
HotelServiceImp hotelServiceImp;
@Autowired
ChambreServiceImp chambreServiceImp;
@Autowired
UserService userServiceImp;
    SimpleDateFormat sdf = null;

    public ReservationServiceImp(ReservationRepo reservationRepo) {
        this.reservationRepo = reservationRepo;
    }

    @Override
    public Reservation addReservation(Reservation reservation, Long idHotel) {
        //get the dispo chambre in the hotel
        Chambre c=chambreServiceImp.getFirstChambreByHotel(hotelServiceImp.getById(idHotel));
        //set disponible of current chambre to false
        c.setDisponible(false);
        chambreServiceImp.updateChambre(c);
        //set chambre of the reservation
        reservation.setChambre(c);
        //set user of the reservation
        reservation.setClient(userServiceImp.getUserById(1L));

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
