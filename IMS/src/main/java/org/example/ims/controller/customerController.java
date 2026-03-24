package org.example.ims.controller;
import jakarta.validation.Valid;
import org.example.ims.entity.DimCustomer;
import org.example.ims.service.CustomerService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@CrossOrigin("*")
//@RequestMapping()//
@RestController
public class customerController {
    @Autowired private CustomerService customerService;

    @GetMapping("/customer")
    public List<DimCustomer> fetchCustomerList()
    {
        return customerService.fetchCustomerList();
    }

    // Save operation
    @PostMapping("/customer")
    public DimCustomer saveCustomers (@Valid @RequestBody DimCustomer dimCustomer)
    {
        return customerService.saveCustomer(dimCustomer);
    }

    @GetMapping("/customer/{id}")
    public DimCustomer getCustomerById(@PathVariable Long id)
    {
        return customerService.getCustomerById(id);
    }

    @PutMapping("/customer/{id}")
    public DimCustomer updateCustomer(@PathVariable Long id, @RequestBody DimCustomer dimCustomer)
    {
        return customerService.updateCustomer(dimCustomer, id);
    }

}
