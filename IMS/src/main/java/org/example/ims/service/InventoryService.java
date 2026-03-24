package org.example.ims.service;

import org.example.ims.entity.FactInventory;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface InventoryService {


    FactInventory saveInventory(FactInventory inventory);

    List<FactInventory> fetchInventoryList();

    FactInventory updateFactInventory(FactInventory factInventory, Long factInventoryId);

    void    deleteFactInventoryById(Long factInventoryId);
}
