import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderListModel } from './models/order.model';
import { RedisService } from './redis';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly redis: RedisService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('order')
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
  @Get('submit')
  async response() {
    return 'response'
  }

  @Get('role')
  async getter() {
    return 'Role and responsibility'
  }
  @Get('model')
  async model() {
    console.log("Model economy")
    return 'modelResponsibility'
  }


  @Post('rbac-role')
  async rbacRole(@Body() body, @Res() res) {
    console.log(body)
    console.log("Rbac response")
    return 200;
  }

  @Post('identityId')
  async deleteIdentity(@Body() body){
    console.log(body)
  
    return this.appService.deleteIdentity(body.identityId)
  }

  @Get('getredis')
  async redisCredentials(@Query('key') key: string) {
      return await this.redis.get(key)
    }

  @Post('setredis')
  async setRedisClinet(@Body() body) {
    return await this.redis.set('item-'+body.id,JSON.stringify(body))
  }
}
