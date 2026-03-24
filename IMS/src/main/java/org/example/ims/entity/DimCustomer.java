package org.example.ims.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="\"DimCustomer\"")
public class DimCustomer {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_CUSTOMER")
    @SequenceGenerator(name="SEQ_CUSTOMER",sequenceName = "SEQ_CUSTOMER", allocationSize = 1)
    private Long CUSTOMER_ID;
    @Column(name="NAME")
    private String NAME;
    @Column(name="PHONE_NO")
    private Long PHONE_NO;
    @Column(name="EMAIL")
    private String EMAIL;


}
