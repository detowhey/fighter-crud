import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import FighterEntity, { FighterEntitySchema } from "src/entity/fighter.entity";

@Module({
    imports: [MongooseModule.forFeature([{ name: FighterEntity.name, schema: FighterEntitySchema }])]
})
export class FighterModule { }
