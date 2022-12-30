package com.example.backend.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Permission {
    @Id
    private Long id;
    private String titre;
    @ManyToMany(mappedBy = "permission")
    private List<User> user;

}
