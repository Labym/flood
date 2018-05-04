package com.labym.flood.admin.web.rest;

import com.labym.flood.admin.dto.ResourceDTO;
import com.labym.flood.admin.service.ResourceService;
import com.labym.flood.common.util.tree.Tree;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.ResponseHeader;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
                            code = 201, message = "created", response = ResourceDTO.class,
                            responseHeaders = {
                                    @ResponseHeader(
                                            name = "location", description = "created resource url location"
                                    )
                            }
                    ),
                    @ApiResponse(code = 401, message = "Unauthorized")
            }
    )
    public ResponseEntity create(@RequestBody ResourceDTO resource) {
        ResourceDTO resourceDTO = resourceService.create(resource);
        return ResponseEntity.created(URI.create("/api/resources/" + resource.getId())).body(resourceDTO);
    }

    @ApiImplicitParam(name = "Authorization", required = true, dataType = "string", paramType = "header")
    @GetMapping(path = "/menus")
    public ResponseEntity menus(){
        Tree<ResourceDTO, Long> tree = resourceService.currentUserMenus();
        return ResponseEntity.ok(tree);
    }
}
