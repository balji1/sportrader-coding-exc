INSERT INTO SPORT (sport_name)
VALUES ('Football'),
       ('Ice Hockey');

INSERT INTO TEAM (team_name, _sport)
VALUES ('Salzburg', select id_sport from SPORT where sport_name='Football'),
       ('Sturm', select id_sport from SPORT where sport_name='Football'),
       ('FC Barcelona', select id_sport from SPORT where sport_name='Football'),
       ('Real Madrid', select id_sport from SPORT where sport_name='Football'),
       ('Dortmund', select id_sport from SPORT where sport_name='Football'),
       ('FC Bayern', select id_sport from SPORT where sport_name='Football'),
       ('KAC', select id_sport from SPORT where sport_name='Ice Hockey'),
       ('Capitals', select id_sport from SPORT where sport_name='Ice Hockey'),
       ('VSV', select id_sport from SPORT where sport_name='Ice Hockey'),
       ('New York Rangers', select id_sport from SPORT where sport_name='Ice Hockey'),
       ('Boston Bruins', select id_sport from SPORT where sport_name='Ice Hockey');
