import { IsDateString, IsEmpty, IsNotEmpty, Min, MinLength, ValidateNested } from "class-validator";
import { FightRecordDto } from "../fightRecord.dto";

class FighterRequest {

    @IsNotEmpty()
    @MinLength(3)
    firstName: string;

    @IsNotEmpty()
    @MinLength(3)
    lastName: string;

    @IsEmpty()
    nickName: string;

    @IsNotEmpty()
    nationality: string;

    @IsDateString()
    @IsNotEmpty()
    birDate: string;

    @Min(0)
    height: number = 0.00;

    @Min(0)
    weidth: number = 0.00;

    @ValidateNested()
    fightRecordDto: FightRecordDto = new FightRecordDto();

    @IsNotEmpty({ each: true })
    @MinLength(3, { each: true })
    fightingStyles: string[];
}
