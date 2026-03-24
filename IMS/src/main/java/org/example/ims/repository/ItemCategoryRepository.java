package org.example.ims.repository;

import org.example.ims.entity.DimItemCategory;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemCategoryRepository extends CrudRepository<DimItemCategory, Long>{

}
