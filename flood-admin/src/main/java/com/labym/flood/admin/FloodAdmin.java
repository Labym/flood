package com.labym.flood.admin;

import com.labym.flood.EnableFloodStarter;
import com.labym.flood.config.DefaultProfileUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableFloodStarter
@SpringBootApplication
public class FloodAdmin {
    public static void main(String[] args) {
        SpringApplication application = new SpringApplication(FloodAdmin.class);
        DefaultProfileUtil.addDefaultProfile(application);
        application.run(args);
    }
}
