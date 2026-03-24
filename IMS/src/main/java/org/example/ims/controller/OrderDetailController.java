package org.example.ims.controller;
import org.example.ims.entity.FactOrderDetail;
import org.example.ims.service.FactOrderDetailService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
public class OrderDetailController {

        @Autowired private FactOrderDetailService factOrderDetailService;

        @GetMapping("/orderDetail")
        public List<FactOrderDetail> fetchOrderDetailList ()
        {
            return factOrderDetailService.fetchOrderDetailList();
        }
}

