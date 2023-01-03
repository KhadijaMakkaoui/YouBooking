package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "utilisateur")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private String password;
    private String adresse;
    @ManyToOne
    private Role role;

    @OneToMany(mappedBy = "proprietaire")
    @JsonIgnore
    @ToString.Exclude
    private List<Hotel> hotel;
    @OneToMany(mappedBy = "client")
    @JsonIgnore
    @ToString.Exclude
    private List<Reservation> reservation;


}
