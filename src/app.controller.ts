import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderListModel } from './models/order.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/orders')
  async getOrders() {
    const query = {
      provider: 'foodics',
      credentialDetails: {
        token: 'wj749Bajd9JSPO8746bdbsjd838djksdlABdhkdAKSIDKSdhs638483jf',
        type: 'bearer'
      },
      page: 1
    } as OrderListModel
    const response = await this.appService.getOrder(query)
    return response
  }
}
