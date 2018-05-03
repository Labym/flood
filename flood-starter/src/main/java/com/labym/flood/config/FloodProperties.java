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
    private final Async async=new Async();
    private final Swagger swagger=new Swagger();


    @Data
    public static class Async {

        private int corePoolSize = FloodDefaults.Async.corePoolSize;

        private int maxPoolSize = FloodDefaults.Async.maxPoolSize;

        private int queueCapacity = FloodDefaults.Async.queueCapacity;

    }



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


    @Data
    public static class Swagger {

        private String title = FloodDefaults.Swagger.title;

        private String description = FloodDefaults.Swagger.description;

        private String version = FloodDefaults.Swagger.version;

        private String termsOfServiceUrl = FloodDefaults.Swagger.termsOfServiceUrl;

        private String contactName = FloodDefaults.Swagger.contactName;

        private String contactUrl = FloodDefaults.Swagger.contactUrl;

        private String contactEmail = FloodDefaults.Swagger.contactEmail;

        private String license = FloodDefaults.Swagger.license;

        private String licenseUrl = FloodDefaults.Swagger.licenseUrl;

        private String defaultIncludePattern = FloodDefaults.Swagger.defaultIncludePattern;

        private String host = FloodDefaults.Swagger.host;

        private String[] protocols = FloodDefaults.Swagger.protocols;

    }

}
