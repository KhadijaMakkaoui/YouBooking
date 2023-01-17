package com.example.backend.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Date dateDebut;
    private Date dateFin;
    private String type;
    @ManyToOne
    private User client;
    @ManyToOne
    private Chambre chambre;



}
