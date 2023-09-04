import { Injectable } from "@nestjs/common";
import { ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { FighterService } from "../service/fighter.service";

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueNameValidator implements ValidatorConstraintInterface {
    constructor(private fighterService: FighterService) { }

    async validate(value: any): Promise<boolean> {
        return !this.fighterService.getFighterByName(value);
    }
}

export const NameIsUnique = (validationOptions: ValidationOptions) => {
    return (object: object, property: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: validationOptions,
            constraints: [],
            validator: UniqueNameValidator,
        });
    };
};
