package com.labym.flood.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;

@Data
@ConfigurationProperties(prefix = "flood")
@Configuration
public class FloodProperties {
    private final CorsConfiguration cors = new CorsConfiguration();
}
