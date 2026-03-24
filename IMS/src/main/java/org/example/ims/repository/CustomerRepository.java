package org.example.ims.repository;
import org.example.ims.entity.DimCustomer;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CustomerRepository extends CrudRepository<DimCustomer, Long> {

}
