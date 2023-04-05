// eslint-disable-next-line prettier/prettier
export enum CredentialType {
  apiKey = 'api-key',
  bearer = 'bearer',
}

export interface BearerCredentialDetails {
  readonly token: string;
  readonly type?: CredentialType.bearer;
}

export interface ApiKeyCredentialDetails {
  readonly type: CredentialType.apiKey;
  readonly key: string;
  readonly secret: string;
  readonly host: string;
}

export type CredentialDetails =
  | BearerCredentialDetails
  | ApiKeyCredentialDetails;

  