import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FighterEntitySchema, Fighter } from "../schema/fighter.schema";
import { FighterController } from "../controller/fighter.controller";
import { FighterService } from "../service/fighter.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Fighter.name, schema: FighterEntitySchema }])],
    controllers: [FighterController],
    providers: [FighterService]
})
export class FighterModule { }
