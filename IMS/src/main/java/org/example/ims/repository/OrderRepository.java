package org.example.ims.repository;
import org.example.ims.entity.Dimitem;
import org.example.ims.entity.FactOrder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface OrderRepository extends CrudRepository<FactOrder, Long> {

}
