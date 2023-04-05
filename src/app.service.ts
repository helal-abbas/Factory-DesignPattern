import { Injectable } from '@nestjs/common';
import { InventoryProviderFactory } from './factory/inventory.factory';
import { OrderListModel } from './models/order.model';

@Injectable()
export class AppService {
  constructor(
    private readonly _inventoryProviderFactory: InventoryProviderFactory
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getOrder(query: OrderListModel){
    const injectable = this._inventoryProviderFactory.inject(query.provider)
    console.log(injectable)
    const response = await injectable.getOrders(query.credentialDetails, query.page)
    return response;
  }
}
