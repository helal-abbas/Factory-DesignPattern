import { CredentialDetails } from "src/entity/credential.entity";
import { InventoryProvider } from "./inventory.class";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TastyFood extends InventoryProvider{

    async getOrders(credential: CredentialDetails): Promise<any> {
        console.log("Tasty Service Called using factory pattern")
        return "Tasty Service Called using factory pattern"
    }
}