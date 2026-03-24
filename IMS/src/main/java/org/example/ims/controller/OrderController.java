package org.example.ims.controller;

import jakarta.validation.Valid;
import org.example.ims.entity.Dimitem;
import org.example.ims.entity.FactOrder;

import org.example.ims.service.OrderService;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
public class OrderController {

    @Autowired private OrderService orderService;

    @GetMapping("/order")
    public List<FactOrder> fetchOrderList()
    {
        return orderService.fetchOrderList();
    }

    @PostMapping("/order")
    public FactOrder saveOrder (@Valid @RequestBody FactOrder factOrder)
    {
        Date today = new Date();
        factOrder.setORDER_DATE(today);
//        try{
//            factOrder =  orderService.saveOrder(factOrder);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
        return orderService.saveOrder(factOrder);
    }

    @GetMapping("/order/{id}")
    public FactOrder getItemById(@PathVariable Long id)
    {
        return orderService.getFactOrderById(id);
    }

    @PutMapping("/order/{id}")
    public FactOrder updateItem(@PathVariable Long id, @RequestBody FactOrder factOrder)
    {
        return orderService.updateFactOrder(factOrder, id);
    }

}
