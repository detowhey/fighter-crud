import { NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FighterDto } from "src/dto/fighter.dto";
import { IFighter } from "src/interface/fighter.interface";

export class FighterService {

    constructor(@InjectModel("Fighter") private fighterInterface: Model<IFighter>) { }

    async createFighter(fighterDto: FighterDto): Promise<IFighter> {
        return await new this.fighterInterface(fighterDto).save();
    }

    async getAllFighters(): Promise<IFighter[]> {
        try {
            return await this.fighterInterface.find();
        } catch {
            throw new NotFoundException("Fighters data not found!");
        }
    }

    async getFighterById(fighterId: string): Promise<IFighter> {
        const fighter = await this.fighterInterface.findById(fighterId).exec();
        this.thowNotFoundException(!fighter, fighterId);
        return fighter;
    }

    async deleteFighterById(fighterId: string): Promise<IFighter> {
        const fighter = await this.fighterInterface.findByIdAndDelete(fighterId);
        this.thowNotFoundException(!fighter, fighterId);
        return fighter;
    }

    async updateFighter(fighterId: string, updateDto: FighterDto): Promise<IFighter> {
        const fighter = await this.fighterInterface.findByIdAndUpdate(fighterId, updateDto, { new: true });
        this.thowNotFoundException(!fighter, fighterId);
        return fighter;
    }

    private thowNotFoundException(condition: boolean, fighterId: string): void {
        if (condition)
            throw new NotFoundException(`Fighter with id: ${fighterId} not found!`);
    }
}
