package com.labym.flood.admin;

import com.labym.flood.config.DefaultProfileUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FloodAdmin {
    public static void main(String[] args) {
        SpringApplication application = new SpringApplication();
        DefaultProfileUtil.addDefaultProfile(application);
        SpringApplication.run(FloodAdmin.class);
    }
}
