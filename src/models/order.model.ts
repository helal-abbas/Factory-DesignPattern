import { CredentialDetails } from "src/entity/credential.entity";
import { Provider } from "src/entity/providers.enum";

export class OrderListModel {
    readonly provider: Provider;
    readonly credentialDetails: CredentialDetails;
    readonly page: number;
}

export interface FoodicsError {
    readonly data: string;
    readonly message?: string;
  }