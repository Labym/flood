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

    private static  long idX=1;
    static List<ResourceDTO> list=new ArrayList<>();
    static void x(long pid,int count){
        for (int i=0;i<count;i++){
            long id=idX++;
            ResourceDTO dto = ResourceDTO.builder()
                    .parentId(pid)
                    .name("node-" + pid + "-" + id)
                    .id(id).build();
            list.add(dto);

        }
    }


    public static void main(String[] args) {

        ResourceDTO dto = ResourceDTO.builder()
                .parentId(0L)
                .name("root")
                .id(0L).build();
        list.add(dto);
        x(0,5);
        x(1,5);
        x(2,2);
        x(3,2);
        x(7,2);
        x(15,200);
        x(18,200);
        x(400,200);
        x(400,800);
        long l = System.currentTimeMillis();
        Tree<ResourceDTO,Long> tree=new Tree<>(list);
        long e = System.currentTimeMillis();
        System.out.println("u:"+(e-l));

        SpringApplication application = new SpringApplication(FloodAdmin.class);
        DefaultProfileUtil.addDefaultProfile(application);
        application.run(args);
    }
}
