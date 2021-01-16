package com.sportcalender.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="EVENT")
@NoArgsConstructor
@Getter
@Setter
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String eventName;
    private Date date;
    @OneToOne
    @JoinColumn(name = "_sport_id", referencedColumnName = "id")
    private Sport sport;
    @OneToOne
    @JoinColumn(name = "_team_one")
    private Team _teamOne;
    @OneToOne
    @JoinColumn(name = "_team_two")
    private Team _teamTwo;
}
