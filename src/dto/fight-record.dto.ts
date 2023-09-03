import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class FightRecordDto {

    @ApiProperty({
        description: "Number of wins",
        required: true,
        default: 0,
        minimum: 0
    })
    @IsInt()
    win: number;

    @ApiProperty({
        description: "Number of looses",
        required: true,
        default: 0,
        minimum: 0
    })
    @IsInt()
    loose: number;

    @ApiProperty({
        description: "Number of draw or 'No contests'",
        required: true,
        default: 0,
        minimum: 0
    })
    @IsInt()
    drawOrNoContests: number;

    constructor(win: number = 0, loose: number = 0, draw: number = 0) {
        this.win = win;
        this.loose = loose;
        this.drawOrNoContests = draw;
    }
}
