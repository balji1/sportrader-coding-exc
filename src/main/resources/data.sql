INSERT INTO SPORT (sport_name)
VALUES ('Football'),
       ('IceHockey'),
       ('Basketball');

INSERT INTO TEAM (team_name, _sport_id)
VALUES ('Salzburg', select id from SPORT where sport_name='Football'),
       ('Sturm', select id from SPORT where sport_name='Football'),
       ('FC Barcelona', select id from SPORT where sport_name='Football'),
       ('Real Madrid', select id from SPORT where sport_name='Football'),
       ('Dortmund', select id from SPORT where sport_name='Football'),
       ('FC Bayern', select id from SPORT where sport_name='Football'),
       ('KAC', select id from SPORT where sport_name='IceHockey'),
       ('Capitals', select id from SPORT where sport_name='IceHockey'),
       ('VSV', select id from SPORT where sport_name='IceHockey'),
       ('New York Rangers', select id from SPORT where sport_name='IceHockey'),
       ('Boston Bruins', select id from SPORT where sport_name='IceHockey');

INSERT INTO EVENT (date, event_name, _team_one, _team_two, _sport_id)
VALUES ('2018-10-20','Football Event: Salzburg vs Sturm',1,2,1),
       ('2019-10-20','Football Event: FC Barcelona vs Real Madrid',3,4,1),
       ('2020-11-20','Football Event: Salzburg vs Real Madrid',2,4,1),
       ('2020-10-20','Ice Hockey Event: KAC vs Capitals',7,8,2);
