CREATE TABLE SPORT
(
    id_sport INT AUTO_INCREMENT PRIMARY KEY,
    sport_name VARCHAR(250) NOT NULL
);

CREATE TABLE TEAM
(
    id_team   INT AUTO_INCREMENT PRIMARY KEY,
    team_name VARCHAR(250) NOT NULL,
    _sport INT NOT NULL,
    FOREIGN KEY (_sport) REFERENCES SPORT(id_sport)
);

CREATE TABLE EVENT
(
    id_event INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(250) NOT NULL,
    _sport INT NOT NULL,
    _team_one INT NOT NULL,
    _team_two INT NOT NULL,
    FOREIGN KEY (_sport) REFERENCES SPORT(id_sport),
    FOREIGN KEY (_team_one) REFERENCES TEAM(id_team),
    FOREIGN KEY (_team_two) REFERENCES TEAM(id_team)
);
