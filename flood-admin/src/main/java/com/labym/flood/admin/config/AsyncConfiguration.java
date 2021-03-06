package com.labym.flood.admin.config;
import com.labym.flood.async.ExceptionHandlingAsyncTaskExecutor;
import com.labym.flood.config.FloodProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler;
import org.springframework.aop.interceptor.SimpleAsyncUncaughtExceptionHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.*;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

@Configuration
@EnableAsync
@EnableScheduling
public class AsyncConfiguration implements AsyncConfigurer {

    private final Logger log = LoggerFactory.getLogger(AsyncConfiguration.class);

    private final FloodProperties floodProperties;

    public AsyncConfiguration(FloodProperties floodProperties) {
        this.floodProperties = floodProperties;
    }

    @Override
    @Bean(name = "taskExecutor")
    public Executor getAsyncExecutor() {
        log.debug("Creating Async Task Executor");
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(floodProperties.getAsync().getCorePoolSize());
        executor.setMaxPoolSize(floodProperties.getAsync().getMaxPoolSize());
        executor.setQueueCapacity(floodProperties.getAsync().getQueueCapacity());
        executor.setThreadNamePrefix("jhipster-sample-application-react-Executor-");
        return new ExceptionHandlingAsyncTaskExecutor(executor);
    }

    @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return new SimpleAsyncUncaughtExceptionHandler();
    }
}
