package org.example.ims.repository;
import org.example.ims.entity.FactOrderDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FactOrderDetailRepository  extends CrudRepository<FactOrderDetail, Long>{

}
