package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
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
    @OneToMany(mappedBy = "chambre",fetch = FetchType.LAZY)
    @ToString.Exclude
    @JsonIgnore
    private List<Reservation> reservation;
    @ManyToOne
    private Hotel hotel;
}
