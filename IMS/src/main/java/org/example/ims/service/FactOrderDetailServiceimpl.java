package org.example.ims.service;
import org.example.ims.entity.FactOrderDetail;
import org.example.ims.repository.FactOrderDetailRepository;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;

@Service
public class FactOrderDetailServiceimpl implements FactOrderDetailService {

    @Autowired
    private FactOrderDetailRepository factOrderDetailRepository;

    @Override
    public FactOrderDetail saveOrderDetail(FactOrderDetail FactOrderDetail) {
        return factOrderDetailRepository.save(FactOrderDetail);
    }
    @Override
    public List<FactOrderDetail> fetchOrderDetailList() {
        return (List<FactOrderDetail>) factOrderDetailRepository.findAll();
    }
    @Override
    public void deletefactOrderDetailById(Long FactOrderDetail) {
        factOrderDetailRepository.deleteById(FactOrderDetail);
    }
    @Override
    public FactOrderDetail updateFactOrderDetail(FactOrderDetail factOrderDetail, Long factOrderDetailId) {
        FactOrderDetail OrderDetailDB = factOrderDetailRepository.findById(factOrderDetailId).get();



        if (Objects.nonNull(factOrderDetail.getITEM_ID())) {
            OrderDetailDB.setITEM_ID(factOrderDetail.getITEM_ID());
        }
        if (Objects.nonNull(factOrderDetail.getQUANTITY())) {
            OrderDetailDB.setQUANTITY(factOrderDetail.getQUANTITY());
        }

        if (Objects.nonNull(factOrderDetail.getPRICE_AT_PURCHASE())) {
            OrderDetailDB.setPRICE_AT_PURCHASE(factOrderDetail.getPRICE_AT_PURCHASE());
        }

        if (Objects.nonNull(factOrderDetail.getORDER_DETAIL_ID())) {
            OrderDetailDB.setORDER_DETAIL_ID(factOrderDetail.getORDER_DETAIL_ID());
        }


        return factOrderDetailRepository.save(OrderDetailDB);
    }



}
