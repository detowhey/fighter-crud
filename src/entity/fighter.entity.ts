import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


@Schema()
export class FighterEntity {

    @Prop({ required: true })
    id: string;
    
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    nickName: string;

    @Prop({ required: true })
    nationality: string;

    @Prop({ required: true })
    birthDate: Date;

    @Prop({ required: true })
    height: number;

    @Prop({ required: true })
    weidth: number;

    @Prop(raw({
        win: { type: Number, require: true },
        loose: { type: Number, require: true },
        draw: { type: Number, require: true }
    }))
    fightRecord: Record<string, FightRecord>;

    @Prop({ type: [String] })
    fightingStyles: string[];
}

export type FighterEntityDocument = HydratedDocument<FighterEntity>;
export const FighterEntitySchema = SchemaFactory.createForClass(FighterEntity);
