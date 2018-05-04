package com.labym.flood.admin;

import com.labym.flood.EnableFloodStarter;
import com.labym.flood.admin.dto.ResourceDTO;
import com.labym.flood.common.util.tree.Tree;
import com.labym.flood.config.DefaultProfileUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@EnableFloodStarter
@SpringBootApplication
public class FloodAdmin {

    public static void main(String[] args) {
        SpringApplication application = new SpringApplication(FloodAdmin.class);
        DefaultProfileUtil.addDefaultProfile(application);
        application.run(args);
    }
}
