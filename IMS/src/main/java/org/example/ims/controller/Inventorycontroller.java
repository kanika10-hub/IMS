package org.example.ims.controller;
import org.example.ims.entity.FactInventory;
import org.example.ims.service.InventoryService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
public class Inventorycontroller {
    @Autowired private InventoryService inventoryService;

    @GetMapping("/inventory")
    public List<FactInventory> fetchInventoryList()
    {
        return inventoryService.fetchInventoryList();
    }


}
