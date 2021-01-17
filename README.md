# Coding Challenge: Sport-Calender
This project is my take on the coding challenge provided by sportradar. The aim was to develop a sport-calender where you can view sport events, search for events by sport types and add new events.

## ERD
The ERD diagram can be found in sportrader-coding-exc/src/main/resources. There is a png and mwb file.

# Frameworks
The frameworks used in this project are **Spring Boot + Hibernate** as backend and **Angular** as frontend. I used a h2 in memory database and included a data.sql file, which fills the database on startup.

# How to start
In this section I will cover how to start backend and frontend
## Backend
 ### IntelliJ
 - Run *Sportcalenderapplication* and the backend-service will start on localhost:8080
## Frontend
### IntelliJ
- Navigate to the frontend folder, right click the folder and open terminal
- In terminal enter *npm install*
- After the packages have been installed, start with *ng serve* and the frontend will run on localhost:4200

# Additional Information
This section covers additional information about the project
## Database
The database is filled with example data, when starting the backend. Since its a in memory database it is not persistent. If you restart the backend-service, newly added data will be lost.
### I added two sporttypes:
 - Football
 - IceHockey
### I also added a few teams:
 - Salzburg
 - Sturm
 - FC Barcelona
 - Real Madrid
 - Dortmund
 - KAC
 - Capitals
 - VSV

I also added a few events, more details can be seen in the *data.sql* file.

## Frontend navigation
In the navigation bar there is a search field, which can be used to search events by a given sport name.
Following the navbar there is a form group, where you can add new events. There is button, which initially was designed for testint purposes, which fills the fields with hard-coded data. By pressing the *Submit event* button, the event is then send to the backend-service. 


