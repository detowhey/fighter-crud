import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags } from "@nestjs/swagger";
import { FighterDto } from "../dto/fighter.dto";
import { FighterService } from "../service/fighter.service";

@ApiTags("fighters-web-api")
@Controller("/fighter")
export class FighterController {

    constructor(private readonly fighterService: FighterService) { };

    @ApiOkResponse({
        description: "Return all fighters created",
        type: [FighterDto]
    })
    @Get()
    async getAllFighters() {
        return this.createTemplateResponse(
            await this.fighterService.getAllFighters(),
            "All fighters data found successfully"
        );
    }

    @ApiOkResponse({
        description: "Return fighter widh id",
        type: FighterDto
    })
    @ApiParam({
        name: "id",
        required: true,
        description: "The id of fighter"
    })
    @Get("/:id")
    async getFighterById(@Param("id") fighterId: string) {
        return this.createTemplateResponse(
            await this.fighterService.getFighterById(fighterId),
            "Fighter found sucessfully"
        );
    }

    @ApiCreatedResponse({
        description: "Create a fighter data",
        type: FighterDto
    })
    @Post()
    async createFighter(@Body() fighterDto: FighterDto) {
        return this.createTemplateResponse(
            await this.fighterService.createFighter(fighterDto),
            "Fighter data create sucessfully"
        );
    }

    @ApiOkResponse({
        description: "Delete fighter data",
        type:"Fighter date delete sucessfully"
    })
    @ApiParam({
        name: "id",
        required: true,
        description: "The id of fighter"
    })
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
