package com.labym.flood.admin.web.rest;

import com.labym.flood.admin.domain.Resource;
import com.labym.flood.admin.dto.ResourceDTO;
import com.labym.flood.admin.service.ResourceService;
import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.net.URI;

@RestController
@RequestMapping("/api/resources")
public class ResourceEndpoint {
    private final ResourceService resourceService;

    public ResourceEndpoint(ResourceService resourceService) {
        this.resourceService = resourceService;
    }

    @PostMapping
    @ApiImplicitParam(name = "Authorization", required = true, dataType = "string", paramType = "header")
   @ApiResponses(
           {
                   @ApiResponse(
                           code = 201,message = "created",response=ResourceDTO.class,
                           responseHeaders = {
                                   @ResponseHeader(
                                           name = "location",description="created resource url location"
                                   )
                           }
                   ),
                   @ApiResponse(code = 401,message = "Unauthorized")
           }
   )
    public ResponseEntity create(@RequestBody ResourceDTO resource) {
        ResourceDTO resourceDTO = resourceService.create(resource);
        return ResponseEntity.created(URI.create("/api/resources/" + resource.getId())).body(resourceDTO);
    }
}
