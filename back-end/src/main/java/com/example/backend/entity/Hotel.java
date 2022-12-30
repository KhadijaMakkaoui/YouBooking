package com.example.backend.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Hotel {
    @Id
    private Long id;
    private String nom;
    private String adresse;
    private String ville;
    private String telephone;
    private String imageUrl;
    @OneToMany(mappedBy = "hotel")
    private List<Chambre> chambre;

}
