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
@Table(name="\"FactOrderDetail\"")
public class FactOrderDetail {
  @Id
  //@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_INVENTORY")
  //@SequenceGenerator(name="SEQ_INVENTORY",sequenceName = "SEQ_INVENTORY", allocationSize = 1)
  private Long ORDER_ID;
    @Column(name="ITEM_ID")
    private Long ITEM_ID;
    @Column(name="QUANTITY")
    private String QUANTITY;
    @Column(name="PRICE_AT_PURCHASE")
    private String PRICE_AT_PURCHASE;
    @Column(name="ORDER_DETAIL_ID")
    private Long ORDER_DETAIL_ID;
}
