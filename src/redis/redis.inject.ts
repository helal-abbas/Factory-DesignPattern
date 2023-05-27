import { Inject } from '@nestjs/common';

export const DOMAINS = Symbol('domain-credentials');
export const API_URL = Symbol('api_url');

export const InjectDomains = () => Inject(DOMAINS);
export const InjectApiUrl = () => Inject(API_URL);
