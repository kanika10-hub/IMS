package org.example.ims.service;

import org.example.ims.entity.DimCustomer;
import org.example.ims.entity.Dimitem;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public interface ItemService {
    Dimitem saveItem(Dimitem dimitem);

    List<Dimitem> fetchItemList();

    Dimitem updateItem(Dimitem item, Long itemId);

    void    deleteItemById(Long ItemId);
    Dimitem getItemById(Long dimItemId);
}
