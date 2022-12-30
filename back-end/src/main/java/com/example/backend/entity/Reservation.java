package com.example.backend.entity;

import ch.qos.logback.core.net.server.Client;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Reservation {
    @Id
    private Long id;
private String dateDebut;
private String dateFin;
private String dateReservation;
private String etat;
private float prix;
@ManyToOne
private User user;
@ManyToOne
private Chambre chambre;



}
