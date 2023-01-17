package com.example.backend.controller;

import com.example.backend.entity.Reservation;
import com.example.backend.service.Interface.ReservationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/reservation")
public class ReservationController {
    ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping
    public List<Reservation> getAllReservations(){
        return reservationService.getAllReservations();
    }
    @PostMapping("/add/chambre/{chambreId}/{clientId}")
    public Reservation addReservation(@RequestBody Reservation reservation){
        /*System.out.printf(reservation.getDateDebut().toString());*/
        return reservationService.addReservation(reservation);
    }
}
