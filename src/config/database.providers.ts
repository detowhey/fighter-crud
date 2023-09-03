import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";

@Injectable()
export class MongodbConfigService implements MongooseOptionsFactory {

    constructor(private configService: ConfigService) { }
    
    createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {
        return {
            uri: `mongodb://${this.buildStringEnvValue("DB_HOST")}:${this.buildStringEnvValue("DB_PORT")}/${this.buildStringEnvValue("DB_NAME")}`,
        }
    }

    private buildStringEnvValue(envName: string): string {
        return this.configService.get<string>(envName);
    }
}
