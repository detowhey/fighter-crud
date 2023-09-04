import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";

@Injectable()
export class MongodbConfigService implements MongooseOptionsFactory {

    constructor(private configService: ConfigService) { }

    createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {
        return {
            uri: `mongodb://${this.buildEnvValue("DB_HOST")}:${this.buildEnvValue("DB_PORT")}/${this.buildEnvValue("DB_NAME")}`,
        }
    }

    private buildEnvValue(envName: string): string {
        return this.configService.get<string>(envName);
    }
}
