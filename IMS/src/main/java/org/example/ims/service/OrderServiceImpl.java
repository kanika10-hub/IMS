package org.example.ims.service;
import org.example.ims.entity.DimItemCategory;
import org.example.ims.entity.FactOrder;
import org.example.ims.repository.OrderRepository;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl  implements OrderService{
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public FactOrder saveOrder(FactOrder factOrder){
        return orderRepository.save(factOrder);
    }

    @Override
    public List<FactOrder> fetchOrderList(){
        return (List<FactOrder>)orderRepository.findAll() ;
    }
    @Override
    public void deleteFactOrderById(Long OrderId)
    {
        orderRepository.deleteById(OrderId);
    }

    @Override
    public FactOrder getFactOrderById(Long orderId) {
        Optional<FactOrder> OptionalFactOrder =  orderRepository.findById(orderId);
        return OptionalFactOrder.orElse(null);
    }

    @Override
    public FactOrder updateFactOrder(FactOrder factOrder, Long orderId)
    {
        FactOrder FactOrderDB = orderRepository.findById(orderId).get();

        if (Objects.nonNull(factOrder.getCUSTOMER_ID())) {
            FactOrderDB.setCUSTOMER_ID(factOrder.getCUSTOMER_ID());
        }


        if (Objects.nonNull(factOrder.getORDER_STATUS())  && "".equalsIgnoreCase(String.valueOf(factOrder.getORDER_STATUS()))){
            FactOrderDB.setORDER_STATUS(factOrder.getORDER_STATUS());
        }

        if (Objects.nonNull(factOrder.getTOTAL_AMOUNT())  ){
            FactOrderDB.setTOTAL_AMOUNT(factOrder.getTOTAL_AMOUNT());
        }

        return orderRepository.save(FactOrderDB);
    }
}
