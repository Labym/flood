package com.labym.flood.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.web.cors.CorsConfiguration;

import javax.validation.constraints.NotNull;

@Data
@Primary
@ConfigurationProperties(prefix = "flood")
@Configuration
public class FloodProperties {
    private final CorsConfiguration cors = new CorsConfiguration();

    private final Security security = new Security();

    @Data
    public static class Security {

        private final ClientAuthorization clientAuthorization = new ClientAuthorization();

        private final Authentication authentication = new Authentication();

        private final RememberMe rememberMe = new RememberMe();

        @Data
        public static class ClientAuthorization {

            private String accessTokenUri = FloodDefaults.Security.ClientAuthorization.accessTokenUri;

            private String tokenServiceId = FloodDefaults.Security.ClientAuthorization.tokenServiceId;

            private String clientId = FloodDefaults.Security.ClientAuthorization.clientId;

            private String clientSecret = FloodDefaults.Security.ClientAuthorization.clientSecret;

        }

        @Data
        public static class Authentication {

            private final Jwt jwt = new Jwt();

            @Data
            public static class Jwt {

                private String secret = FloodDefaults.Security.Authentication.Jwt.secret;

                private long tokenValidityInSeconds = FloodDefaults.Security.Authentication.Jwt
                        .tokenValidityInSeconds;

                private long tokenValidityInSecondsForRememberMe = FloodDefaults.Security.Authentication.Jwt
                        .tokenValidityInSecondsForRememberMe;

            }
        }

        @Data
        public static class RememberMe {

            @NotNull
            private String key = FloodDefaults.Security.RememberMe.key;

        }
    }
}
