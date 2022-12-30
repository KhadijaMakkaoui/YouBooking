package com.example.backend.entity;

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
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private String password;
    private String adresse;
    @ManyToOne
    private Role role;
    @ManyToMany
    private List<Permission> permission;


}
