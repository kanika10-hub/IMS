package org.example.ims.service;
import org.example.ims.entity.DimItemCategory;
import org.example.ims.entity.Dimitem;
import org.example.ims.repository.ItemCategoryRepository;


import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;

@Service
public class ItemCategoryServiceImpl implements ItemCategoryService{
    @Autowired
    private ItemCategoryRepository itemCategoryRepository;

    @Override
    public DimItemCategory saveItemCategory(DimItemCategory itemCategory){
        Date today = new Date();
        itemCategory.setDATE_CREATED(today);
        return itemCategoryRepository.save(itemCategory);
    }

    @Override
    public List<DimItemCategory> fetchItemCategoryList(){
        return (List<DimItemCategory>)itemCategoryRepository.findAll() ;
    }

    @Override
    public void deleteItemCategoryById(Long itemCategoryId)
    {
        itemCategoryRepository.deleteById(itemCategoryId);
    }

    @Override
    public DimItemCategory getItemCategoryById(Long itemCategoryId) {
        Optional<DimItemCategory> OptionalItemCategory =  itemCategoryRepository.findById(itemCategoryId);
        return OptionalItemCategory.orElse(null);
    }

    @Override
    public DimItemCategory updateItemCategory(DimItemCategory itemCategory, Long itemCategoryId)
    {
        DimItemCategory itemCategoryDB = itemCategoryRepository.findById(itemCategoryId).get();

        if (Objects.nonNull(itemCategory.getITEM_CATEGORY_NAME()) ){
            itemCategoryDB.setITEM_CATEGORY_NAME(itemCategory.getITEM_CATEGORY_NAME());
        }

        if (Objects.nonNull(itemCategory.getITEM_CATEGORY_DESCRIP()) ){
            itemCategoryDB.setITEM_CATEGORY_DESCRIP(itemCategory.getITEM_CATEGORY_DESCRIP());
        }

        if (Objects.nonNull(itemCategory.getACTIVE()) ){
            itemCategoryDB.setACTIVE(itemCategory.getACTIVE());
        }


        return itemCategoryRepository.save(itemCategoryDB);
    }

}
