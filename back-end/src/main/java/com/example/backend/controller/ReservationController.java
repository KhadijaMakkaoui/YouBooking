package com.example.backend.controller;

import com.example.backend.entity.Reservation;
import com.example.backend.service.Interface.ReservationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public Reservation addReservation(@RequestBody Reservation reservation,@PathVariable Long chambreId,@PathVariable Long clientId){
        /*System.out.printf(reservation.getDateDebut().toString());*/
        return reservationService.addReservation(reservation,chambreId,clientId);
    }
}
