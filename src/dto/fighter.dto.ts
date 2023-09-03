import { IsDateString, IsEmpty, IsNotEmpty, Min, MinLength, ValidateNested, min } from "class-validator";
import { FightRecordDto } from "./fight-record.dto";
import { ApiProperty } from "@nestjs/swagger";
import { FightingStyles } from "../enum/fighting-styles.enum";

export class FighterDto {

    @ApiProperty({
        description: "Firstname of fighter",
        required: true,
        minLength: 3,
        example: "Firstname"
    })
    @IsNotEmpty()
    @MinLength(3)
    firstName: string;

    @ApiProperty({
        description: "Lastname of fighter",
        required: true,
        minLength: 3,
        example: "Lastname"
    })
    @IsNotEmpty()
    @MinLength(3)
    lastName: string;

    @ApiProperty({
        description: "Nickname of fighter",
        required: false,
        example: "Nickname",
        default: ""

    })
    @IsEmpty()
    nickName: string;


    @ApiProperty({
        description: "Nationality of fighter",
        required: true,
        example: "Brazilian"
    })
    @IsNotEmpty()
    nationality: string;

    @ApiProperty({
        description: "Birthdate of fighter",
        required: true,
        pattern: "dd/MM//yyy",
        example: "01/01/1990"
    })
    @IsDateString()
    @IsNotEmpty()
    birDate: string;

    @ApiProperty({
        description: "Height of fighter",
        required: true,
        pattern: "0.00",
        default: 0.00,
        minimum: 0.00
    })
    @Min(0)
    height: number = 0.00;

    @ApiProperty({
        description: "Weidth of fighter",
        required: true,
        pattern: "0.00",
        default: 0.00,
        minimum: 0.00
    })
    @Min(0)
    weidth: number = 0.00;

    @ApiProperty({
        description: "The record of fighter",
        required: true,
        type: FightRecordDto
    })
    @ValidateNested()
    fightRecordDto: FightRecordDto = new FightRecordDto();

    @ApiProperty({
        default: "List of fighting styles",
        required: true,
        type: [FightingStyles],
        isArray: true
    })
    @IsNotEmpty({ each: true })
    @MinLength(3, { each: true })
    fightingStyles: FightingStyles[];
}
