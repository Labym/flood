package com.labym.flood;

import com.labym.flood.config.FloodProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import java.lang.annotation.*;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Component
@ComponentScan("com.labym.flood")
@EnableConfigurationProperties({FloodProperties.class})
public @interface EnableFloodStarter {
}
