package org.example.ims.service;

import org.example.ims.entity.FactOrderDetail;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FactOrderDetailService {

    FactOrderDetail saveOrderDetail(FactOrderDetail factOrderDetail);

    List<FactOrderDetail> fetchOrderDetailList();

    FactOrderDetail updateFactOrderDetail(FactOrderDetail factOrderDetail, Long factOrderDetailId);

    void    deletefactOrderDetailById(Long factOrderDetailId);
}
