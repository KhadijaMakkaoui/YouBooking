package com.example.backend.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Chambre {


    @Id
    private Long id;

    private String numero;
    private Boolean disponible;
    private float prix;
    @OneToMany(mappedBy = "chambre")
    private List<Reservation> reservation;
    @ManyToOne
    private Hotel hotel;
}
