import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FighterEntitySchema, Fighter } from "../schema/fighter.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Fighter.name, schema: FighterEntitySchema }])]
})
export class FighterModule { }
