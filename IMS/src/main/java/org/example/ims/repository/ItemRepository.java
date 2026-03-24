package org.example.ims.repository;

import org.example.ims.entity.Dimitem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends CrudRepository<Dimitem, Long> {

}
