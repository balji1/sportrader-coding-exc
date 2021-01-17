package com.sportcalender.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="TEAM")
@NoArgsConstructor
@Getter
@Setter
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String teamName;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "_sport_id", referencedColumnName = "id")
    private Sport _sport;
}
