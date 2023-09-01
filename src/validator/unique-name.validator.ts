import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueNameValidator implements ValidatorConstraintInterface {


    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        throw new Error("Method not implemented.");
    }

}