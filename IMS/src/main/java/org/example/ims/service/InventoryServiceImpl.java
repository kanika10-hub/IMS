package org.example.ims.service;
import org.example.ims.entity.FactInventory;
import org.example.ims.repository.InventoryRepository;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;

@Service
public class InventoryServiceImpl implements InventoryService {
    @Autowired
    private InventoryRepository inventoryRepository;

    @Override
    public FactInventory saveInventory(FactInventory inventory) {
        return inventoryRepository.save(inventory);
    }

    @Override
    public List<FactInventory> fetchInventoryList() {
        return (List<FactInventory>) inventoryRepository.findAll();
    }

    @Override
    public void deleteFactInventoryById(Long FactInventoryId) {
        inventoryRepository.deleteById(FactInventoryId);
    }

    @Override
    public FactInventory updateFactInventory(FactInventory factinventory, Long inventoryId) {
        FactInventory inventoryDB = inventoryRepository.findById(inventoryId).get();
        if (Objects.nonNull(factinventory.getITEM_ID())) {
            inventoryDB.setITEM_ID(inventoryDB.getITEM_ID());
        }
        if (Objects.nonNull(factinventory.getQUANTITY_IN_HAND())) {
            inventoryDB.setITEM_ID(inventoryDB.getQUANTITY_IN_HAND());
        }
        if (Objects.nonNull(factinventory.getMIN_STOCK())) {
            inventoryDB.setITEM_ID(inventoryDB.getMIN_STOCK());
        }
        if (Objects.nonNull(factinventory.getDATE_CREATED())) {
            inventoryDB.setDATE_CREATED(inventoryDB.getDATE_CREATED());
        }

        if (Objects.nonNull(factinventory.getACTIVE()) && "".equalsIgnoreCase(factinventory.getACTIVE())) {
            inventoryDB.setACTIVE(inventoryDB.getACTIVE());
        }
        return inventoryRepository.save(inventoryDB);
    }
}
