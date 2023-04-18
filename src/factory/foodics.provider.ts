import { Injectable } from "@nestjs/common";
import { InventoryProvider } from "./inventory.class";
import { CredentialDetails } from "src/entity/credential.entity";

@Injectable()
export class FoodicsProvider extends InventoryProvider {
    
    async getOrders(
        credentialDetails: CredentialDetails,
        page = 1
      ) {
        console.log("Tasty Service Called using factory pattern",credentialDetails)
        return credentialDetails
      }
}