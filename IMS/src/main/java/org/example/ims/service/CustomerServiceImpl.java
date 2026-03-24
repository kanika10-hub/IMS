package org.example.ims.service;
import org.example.ims.entity.DimCustomer;
import org.example.ims.repository.CustomerRepository;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public DimCustomer saveCustomer(DimCustomer dimCustomer) {
        return customerRepository.save(dimCustomer);
    }
    @Override
    public List<DimCustomer> fetchCustomerList() {
        return (List<DimCustomer>) customerRepository.findAll();
    }
    @Override
    public void deleteCustomerById(Long customerId) {
        customerRepository.deleteById(customerId);
    }

    @Override
    public DimCustomer getCustomerById(Long customerId) {
        Optional<DimCustomer> OptionalCustomer =  customerRepository.findById(customerId);
        return OptionalCustomer.orElse(null);
    }

    @Override
    public DimCustomer updateCustomer(DimCustomer dimCustomer, Long DimCustomerId) {

        DimCustomer customerDB = customerRepository.findById(DimCustomerId).get();

        if (Objects.nonNull(dimCustomer.getNAME())) {
            customerDB.setNAME(dimCustomer.getNAME());
        }
        if (Objects.nonNull(dimCustomer.getEMAIL()) && "".equalsIgnoreCase(dimCustomer.getEMAIL())) {
            customerDB.setEMAIL(dimCustomer.getEMAIL());
        }
        if (Objects.nonNull(dimCustomer.getPHONE_NO())) {
            customerDB.setPHONE_NO(dimCustomer.getPHONE_NO());
        }
        return customerRepository.save(customerDB);
    }
}
