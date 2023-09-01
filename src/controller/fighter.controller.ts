import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { FighterDto } from "src/dto/fighter.dto";
import { FighterService } from "src/service/fighter.service";

@Controller("/fighter")
export class FighterController {
    constructor(private readonly fighterService: FighterService) { };

    @Get()
    async getAllFighters() {
        return this.createTemplateResponse(await this.fighterService.getAllFighters(), "All fighters data found successfully");
    }

    @Get("/:id")
    async getFighterById(@Param("id") fighterString: string) {
        return this.createTemplateResponse(await this.fighterService.getFighterById(fighterString), "Fighter found sucessfully");
    }

    @Post()
    async  createFighter(@Body() fighterDto: FighterDto) {
        return this.createTemplateResponse(await this.fighterService.createFighter(fighterDto), "Fighter data create sucessfully");
    }

    private createTemplateResponse(data: any, message: string) {
        return {
            timeStamp: new Date().toISOString,
            fighter: data,
            message: message
        }
    }
}
