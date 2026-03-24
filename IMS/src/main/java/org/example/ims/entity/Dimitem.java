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
@Table(name="\"DimItem\"")
public class Dimitem {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_ITEM")
    @SequenceGenerator(name="SEQ_ITEM",sequenceName = "SEQ_ITEM", allocationSize = 1)
    private Long Item_ID;
    @Column(name="ITEM_CATEGORY_ID")
    private Long ITEM_CATEGORY_ID;
    @Column(name="ITEM_NAME")
    private String ITEM_NAME;
    @Column(name="UNITPRICE")
    private Long UNITPRICE;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "ITEM_CATEGORY_ID")
//    private DimItemCategory itemCategory;
//
//    // Getter for the category object
//    public DimItemCategory getCategory() { return itemCategory; }
}
