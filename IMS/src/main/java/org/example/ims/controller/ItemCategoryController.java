package org.example.ims.controller;
import jakarta.validation.Valid;
import org.example.ims.entity.DimItemCategory;

import org.example.ims.entity.Dimitem;
import org.example.ims.service.ItemCategoryService;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
public class ItemCategoryController {

    @Autowired private ItemCategoryService itemCategoryService;

    @GetMapping("/itemCategory")
    public List<DimItemCategory> fetchItemCategoryList()
    {
        return itemCategoryService.fetchItemCategoryList();
    }

    @PostMapping("/itemCategory")
    public DimItemCategory saveItem (@Valid @RequestBody DimItemCategory dimItemCategory)
    {
        return itemCategoryService.saveItemCategory(dimItemCategory);
    }

    @GetMapping("/itemCategory/{id}")
    public DimItemCategory getItemCategoryById(@PathVariable Long id)
    {
        return itemCategoryService.getItemCategoryById(id);
    }
    @PutMapping("/itemCategory/{id}")
    public DimItemCategory updateItem(@PathVariable Long id, @RequestBody DimItemCategory dimItemCategory)
    {
        return itemCategoryService.updateItemCategory(dimItemCategory, id);
    }

}
