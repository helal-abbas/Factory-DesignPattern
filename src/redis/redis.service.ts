import { Injectable } from "@nestjs/common";
import { InjectDomains } from "./redis.inject";
import { RedisConfig } from "./redis.config";
import { createClient } from "redis";
import { promisify } from "util";

@Injectable()
export class RedisService {
    private readonly redisClient;
    private readonly getAsync: (key: string) => Promise<string|null>;
    private  readonly setAsync: (key: string, value: string) => Promise<string>;
    constructor(
        @InjectDomains() private readonly domain: RedisConfig
    ) {
        this.redisClient = createClient ({
            socket: {
                host: this.domain.host,
                port: this.domain.port              
            }
        })

        // this.getAsync = promisify(this.redisClient.get).bind(this.redisClient);
        // this.setAsync = promisify(this.redisClient.set).bind(this.redisClient);
        this.redisClient.connect();
    }


    async get(key: string): Promise<string| null> {
        // await this.redisClient.connect();
        return JSON.parse(await this.redisClient.get(key));
    }

    async set(key: string, value: string): Promise<string> {
        
        return await this.redisClient.set(key, value);
    }

  
}