import { Injectable } from '@nestjs/common';
import { InventoryProviderFactory } from './factory/inventory.factory';
import { OrderListModel } from './models/order.model';
import axios from 'axios';

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

  async deleteIdentity(identityId: string) {
    
    try{
      const response = await axios.delete(`http://127.0.0.1:4434/identities/`+ identityId);

    console.log('response of all server and service resource', response);
    return true;
    }catch(error) {
      console.log(error)
      throw Error(error);
    }
  }
}
