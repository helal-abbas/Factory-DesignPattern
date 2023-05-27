import { DynamicModule, Module } from "@nestjs/common";
import { RedisConfig } from "./redis.config";
import { DOMAINS } from "./redis.inject";
import { RedisService } from "./redis.service";

@Module({
    imports: [],
    controllers: [],
    providers: [],
    exports: []
  })
export class RedisModule {
    static forRoorAsync(config: RedisConfig): DynamicModule{
        return {
            module : RedisModule,
            providers: [
                RedisService,
                {
                    provide: DOMAINS,
                    useValue: config
                }
            ],
            exports: [
                RedisService
            ]
        }

    }
}