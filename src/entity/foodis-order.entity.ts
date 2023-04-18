import { Expose, Type } from 'class-transformer';



export class FoodicsProductsOrder {
  readonly id: string;
  @Expose({ name: 'discount_type', toClassOnly: true })
  readonly discountType: string;

  readonly quantity: number;

  @Expose({ name: 'unit_price', toClassOnly: true })
  readonly unitPrice: number;

  @Expose({ name: 'total_price', toClassOnly: true })
  readonly totalPrice: number;

  @Expose({ name: 'total_cost', toClassOnly: true })
  readonly totalCost: number;

  readonly status: number;
}

export class FoodicsCharge {
  readonly id: string;
  readonly name: string;
  readonly type: number;
  readonly value: number;

  @Expose({ name: 'name_localized', toClassOnly: true })
  readonly name_localized: string;

  @Expose({ name: 'is_auto_applied', toClassOnly: true })
  readonly isAutoApplied: boolean;

  @Type(() => Date)
  @Expose({ name: 'created_at', toClassOnly: true })
  readonly createdAt: Date;

  @Type(() => Date)
  @Expose({ name: 'updated_at', toClassOnly: true })
  readonly updatedAt: Date;

  @Type(() => Date)
  @Expose({ name: 'deleted_at', toClassOnly: true })
  readonly deletedAt: Date;
}

export class FoodicsTaxesPivot {
  readonly amount: number;
  readonly rate: number;

  @Expose({ name: 'tax_exclusive_discount_amount', toClassOnly: true })
  readonly taxExclusiveDiscountAmount: number;
}

export class FoodicsOrderTax {
  readonly id: string;
  readonly name: string;
  readonly rate: number;

  @Type(() => FoodicsTaxesPivot)
  readonly pivot: FoodicsTaxesPivot;

  @Type(() => Date)
  @Expose({ name: 'created_at', toClassOnly: true })
  readonly createdAt: Date;

  @Type(() => Date)
  @Expose({ name: 'updated_at', toClassOnly: true })
  readonly updatedAt: Date;
}

export class FoodicsChargeAndTax {
  @Type(() => FoodicsCharge)
  readonly charge: FoodicsCharge;

  readonly amount: number;

  @Expose({ name: 'tax_exclusive_amount', toClassOnly: true })
  readonly taxExclusiveAmount: number;

  @Type(() => FoodicsOrderTax)
  readonly taxes: FoodicsOrderTax[];
}
export class FoodicsOrder {
  readonly id: string;

  @Expose({ name: 'app_id', toClassOnly: true })
  readonly appId: string;

  @Expose({ name: 'promotion_id', toClassOnly: true })
  readonly promotionId: string;

  @Expose({ name: 'delivered_at', toClassOnly: true })
  readonly deliveredAt: string;

  @Expose({ name: 'closed_at', toClassOnly: true })
  readonly closedAt: Date;

  @Type(() => Date)
  @Expose({ name: 'created_at', toClassOnly: true })
  readonly createdAt: Date;

  @Type(() => Date)
  @Expose({ name: 'updated_at', toClassOnly: true })
  readonly updatedAt: Date;

  @Expose({ name: 'total_price', toClassOnly: true })
  readonly totalPrice: Date;

  @Type(() => FoodicsProductsOrder)
  readonly products?: FoodicsProductsOrder[];


  @Type(() => FoodicsChargeAndTax)
  readonly charges?: FoodicsChargeAndTax[];
}

export enum FoodicsOrderQueryProps {
  id = 'id',
  name = 'name',
  sku = 'sku',
  barcode = 'barcode',
  products = 'products',
  isDeleted = 'is_deleted',
  branch = 'branch',
  charges = 'charges',
  createdAt = 'created_at',
  updatedAt = 'updated_at',
  deletedAt = 'deleted_at',
}
