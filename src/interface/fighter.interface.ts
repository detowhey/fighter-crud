import { Document } from "mongoose"

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