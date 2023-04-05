import { CredentialDetails } from "src/entity/credential.entity";


export abstract class InventoryProvider {
  abstract getOrders(
    credential: CredentialDetails,
    page?: number
  ):Promise<any> 
}


