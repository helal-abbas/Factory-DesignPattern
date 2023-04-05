import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryProviderFactory } from './factory/inventory.factory';
import { FoodicsProvider } from './factory/foodics.provider';
import { TastyFood } from './factory/tasty.provider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,InventoryProviderFactory,FoodicsProvider,TastyFood],
})
export class AppModule {}
