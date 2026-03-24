package org.example.ims.repository;
import org.example.ims.entity.FactInventory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryRepository extends CrudRepository<FactInventory, Long> {

}
