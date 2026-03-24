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
@Table(name="\"FACTINVENTORY\"")
public class FactInventory {
    @Id
    //@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_INVENTORY")
    //@SequenceGenerator(name="SEQ_INVENTORY",sequenceName = "SEQ_INVENTORY", allocationSize = 1)
    private Long INVENT_ID;
    @Column(name="ITEM_ID")
    private Long ITEM_ID;
    @Column(name="QUANTITY_IN_HAND")
    private Long QUANTITY_IN_HAND;
    @Column(name="MIN_STOCK")
    private Long MIN_STOCK;
    @Column(name="DATE_CREATED")
    private Date DATE_CREATED;
    @Column (name="ACTIVE")
    private String ACTIVE ;
}
