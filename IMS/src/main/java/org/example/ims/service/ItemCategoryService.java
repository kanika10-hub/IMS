package org.example.ims.service;


import org.example.ims.entity.DimItemCategory;
import org.example.ims.entity.Dimitem;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface ItemCategoryService {
    DimItemCategory saveItemCategory(DimItemCategory itemCategory);

    List<DimItemCategory> fetchItemCategoryList();

    DimItemCategory updateItemCategory(DimItemCategory itemCategory, Long itemCategoryId);

    void    deleteItemCategoryById(Long ItemCategoryId);

    DimItemCategory getItemCategoryById(Long dimItemCategoryId);
}
