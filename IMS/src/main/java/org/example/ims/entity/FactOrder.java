package org.example.ims.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="\"FactOrder\"")
public class FactOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_ORDER")
    @SequenceGenerator(name="SEQ_ORDER",sequenceName = "SEQ_ORDER", allocationSize = 1)
    private Long ORDER_ID;
    @Column(name="CUSTOMER_ID")
    private Long CUSTOMER_ID;
    @Column(name="ORDER_DATE")
    private Date ORDER_DATE;
    @Column(name="ORDER_STATUS")
    private String ORDER_STATUS;
    @Column(name="TOTAL_AMOUNT")
    private Long TOTAL_AMOUNT;

}
