package com.springCars.app.Entity;


import javax.persistence.*;

import lombok.*;

@Entity
@Table(name = "cars")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Car {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    long id;

    @Column(name = "marka")
    String marka;

    @Column(name = "model")
    String model;

    @Column(name = "rok")
    int rok;

    @Column(name = "przebieg")
    int przebieg;

    @Column(name = "cena")
    int cena;
}
