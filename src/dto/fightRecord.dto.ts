import { IsInt } from "class-validator";

export class FightRecordDto {

    @IsInt()
    win: number;
    @IsInt()
    loose: number;
    @IsInt()
    draw: number;

    constructor(win: number = 0, loose: number = 0, draw: number = 0) {
        this.win = win;
        this.loose = loose;
        this.draw = draw;
    }
}
