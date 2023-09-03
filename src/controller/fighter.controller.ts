import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { FighterDto } from "../dto/fighter.dto";
import { FighterService } from "../service/fighter.service";

@Controller("/fighter")
export class FighterController {
    constructor(private readonly fighterService: FighterService) { };

    @Get()
    async getAllFighters() {
        return this.createTemplateResponse(
            await this.fighterService.getAllFighters(),
            "All fighters data found successfully"
        );
    }

    @Get("/:id")
    async getFighterById(@Param("id") fighterId: string) {
        return this.createTemplateResponse(
            await this.fighterService.getFighterById(fighterId),
            "Fighter found sucessfully"
        );
    }

    @Post()
    async createFighter(@Body() fighterDto: FighterDto) {
        return this.createTemplateResponse(
            await this.fighterService.createFighter(fighterDto),
            "Fighter data create sucessfully"
        );
    }

    @Delete("/:id")
    async name(@Param("id") fighterId: string) {
        return this.createTemplateResponse(
            await this.fighterService.deleteFighterById(fighterId),
            "Fighter date delete sucessfully"
        );
    }

    private createTemplateResponse(data: any, message: string) {
        return {
            fighter: data,
            message: message,
            timeStamp: new Date().toISOString
        }
    }
}
