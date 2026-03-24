package org.example.ims.service;
import org.example.ims.entity.Dimitem;
import org.example.ims.repository.ItemRepository;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService  {

   @Autowired
    private ItemRepository itemRepository;

    @Override
    public Dimitem saveItem(Dimitem item){
        return itemRepository.save(item);
    }

    @Override
    public List<Dimitem> fetchItemList(){
        return (List<Dimitem>)itemRepository.findAll() ;
    }

    @Override
    public void deleteItemById(Long ItemId)
    {
        itemRepository.deleteById(ItemId);
    }

    @Override
    public Dimitem getItemById(Long ItemId) {
        Optional<Dimitem> OptionalItem =  itemRepository.findById(ItemId);
        return OptionalItem.orElse(null);
    }
    @Override
    public Dimitem updateItem(Dimitem item, Long itemId)
    {
        Dimitem itemDB = itemRepository.findById(itemId).get();
        if (Objects.nonNull(item.getITEM_NAME())  && "".equalsIgnoreCase(item.getITEM_NAME())){
            itemDB.setITEM_NAME(item.getITEM_NAME());
        }

        if (Objects.nonNull(item.getUNITPRICE())  ){
            itemDB.setUNITPRICE(item.getUNITPRICE());
        }

        if (Objects.nonNull(item.getITEM_CATEGORY_ID())  ){
            itemDB.setITEM_CATEGORY_ID(item.getITEM_CATEGORY_ID());
        }
     return itemRepository.save(itemDB);
    }

}
