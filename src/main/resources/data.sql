INSERT INTO SPORT (sport_name)
VALUES ('Football'),
       ('Ice Hockey');

INSERT INTO TEAM (team_name, _sport_id)
VALUES ('Salzburg', select id from SPORT where sport_name='Football'),
       ('Sturm', select id from SPORT where sport_name='Football'),
       ('FC Barcelona', select id from SPORT where sport_name='Football'),
       ('Real Madrid', select id from SPORT where sport_name='Football'),
       ('Dortmund', select id from SPORT where sport_name='Football'),
       ('FC Bayern', select id from SPORT where sport_name='Football'),
       ('KAC', select id from SPORT where sport_name='Ice Hockey'),
       ('Capitals', select id from SPORT where sport_name='Ice Hockey'),
       ('VSV', select id from SPORT where sport_name='Ice Hockey'),
       ('New York Rangers', select id from SPORT where sport_name='Ice Hockey'),
       ('Boston Bruins', select id from SPORT where sport_name='Ice Hockey');
