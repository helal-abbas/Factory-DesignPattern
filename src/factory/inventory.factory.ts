import { Provider } from "src/entity/providers.enum";
import { FoodicsProvider } from "./foodics.provider";
import { InventoryProvider } from "./inventory.class";
import { Injectable } from "@nestjs/common";
import { TastyFood } from "./tasty.provider";

@Injectable()
export class InventoryProviderFactory {
    constructor(
        private readonly _foodicsProvider: FoodicsProvider,
        private readonly _tastyProvider : TastyFood
    ){}

    inject(provider: Provider):InventoryProvider {
        switch(provider){
            case Provider.Foodics:
                return this._foodicsProvider;
            
            case Provider.Tasty:
                return this._tastyProvider;
            }
    }
}