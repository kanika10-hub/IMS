package org.example.ims.service;
import org.example.ims.entity.DimCustomer;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public interface CustomerService {
    DimCustomer saveCustomer(DimCustomer dimCustomer);

    List<DimCustomer> fetchCustomerList();

    DimCustomer updateCustomer(DimCustomer dimCustomer, Long dimCustomerId);

    void deleteCustomerById(Long dimCustomerId);

    DimCustomer getCustomerById(Long dimCustomerId);


}
