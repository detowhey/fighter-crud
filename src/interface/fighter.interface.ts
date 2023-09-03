import { Document } from "mongoose"
import { FightRecord } from "../schema/fight-record.schema";

export interface IFighter extends Document {
   readonly firstName: string;
   readonly lastName: string;
   readonly nickName: string;
   readonly nationality: string;
   readonly birthDate: Date;
   readonly height: number;
   readonly weidth: number;
   readonly fightRecord: FightRecord;
   readonly fightingStyles: string[];
}
