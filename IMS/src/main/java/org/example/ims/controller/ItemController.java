package org.example.ims.controller;
import jakarta.validation.Valid;
import org.example.ims.entity.DimCustomer;
import org.example.ims.entity.Dimitem;
import org.example.ims.service.ItemService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("*")

@RestController
public class ItemController {
    @Autowired private ItemService itemService;

    @GetMapping("/item")
    public List<Dimitem> fetchItemList()
    {
        return itemService.fetchItemList();
    }
    @PostMapping("/item")
    public Dimitem saveItem (@Valid @RequestBody Dimitem dimitem)
    {
        return itemService.saveItem(dimitem);
    }

    @GetMapping("/item/{id}")
    public Dimitem getItemById(@PathVariable Long id)
    {
        return itemService.getItemById(id);
    }
    @PutMapping("/item/{id}")
    public Dimitem updateItem(@PathVariable Long id, @RequestBody Dimitem dimitem)
    {
        return itemService.updateItem(dimitem, id);
    }



}
