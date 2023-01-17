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
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String adresse;
    private String ville;
    private String telephone;
    private String description;
    private String imagePath;
    @Column(columnDefinition = "boolean default false")
    private boolean approved;
    @OneToMany(mappedBy = "hotel",fetch = FetchType.LAZY)
    @JsonIgnore
    @ToString.Exclude
    private List<Chambre> chambres;
    @ManyToOne
    private User proprietaire;

}
