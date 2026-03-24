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
@Table(name="\"DimItemCategory\"")

public class DimItemCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_ITEMCATEGORY")
    @SequenceGenerator(name="SEQ_ITEMCATEGORY",sequenceName = "SEQ_ITEMCATEGORY", allocationSize = 1)
    private Long ITEM_CATEGORY_ID;
    @Column(name="ITEM_CATEGORY_NAME")
    private String ITEM_CATEGORY_NAME;
    @Column(name="ITEM_CATEGORY_DESCRIP")
    private String ITEM_CATEGORY_DESCRIP;
    @Column(name="ACTIVE")
    private String ACTIVE;
    @Column(name="DATE_CREATED")
    private Date DATE_CREATED;
}