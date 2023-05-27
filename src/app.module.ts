import { Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryProviderFactory } from './factory/inventory.factory';
import { FoodicsProvider } from './factory/foodics.provider';
import { TastyFood } from './factory/tasty.provider';
import { NestModule, MiddlewareConsumer  } from '@nestjs/common';
import { CorsMiddleware } from './middleware/cors.middleware';
import { RedisModule } from './redis';
@Module({
  imports: [RedisModule.forRoorAsync(
    {
      host: '127.0.0.1',
      port: 6379
    }
  )],
  controllers: [AppController],
  providers: [AppService,InventoryProviderFactory,FoodicsProvider,TastyFood],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes({ path: "*", method: RequestMethod.ALL });
  }
}
