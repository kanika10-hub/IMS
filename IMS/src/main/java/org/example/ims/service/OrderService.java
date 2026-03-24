package org.example.ims.service;
import org.example.ims.entity.Dimitem;
import org.example.ims.entity.FactOrder;

import org.springframework.stereotype.Service;
import java.util.List;
@Service
public interface OrderService {
    FactOrder saveOrder(FactOrder order);

    List<FactOrder> fetchOrderList();

    FactOrder updateFactOrder(FactOrder factOrder, Long factOrderId);

    void deleteFactOrderById(Long factOrderId);

    FactOrder getFactOrderById(Long factOrderId);
}
