package com.sportcalender;

import com.sportcalender.model.Event;
import com.sportcalender.model.Sport;
import com.sportcalender.model.Team;
import com.sportcalender.repository.EventRepository;
import com.sportcalender.repository.SportRepository;
import org.springframework.boot.ConfigurableBootstrapContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import java.util.Date;

@SpringBootApplication
public class SportCalenderApplication {

    public static void main(String[] args) {
        SpringApplication.run(SportCalenderApplication.class, args);
    }

}
