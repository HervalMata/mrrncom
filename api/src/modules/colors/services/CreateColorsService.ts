import {inject, injectable} from "tsyringe";
import {IColorsRepository} from "../repositories/IColorsRepository";
import {ICreateColorDTO} from "../dtos/ICreateColorDTO";
import {AppError} from "../../../shared/errors/AppError";

@injectable()
class CreateColorsService {
    constructor(
        @inject("ColorsRepository")
        private colorsRepository: IColorsRepository
    ) {}

    async execute({ name }: ICreateColorDTO): Promise<void> {
        const colorAlreadyExists = await this.colorsRepository.findByName(name);
        if (colorAlreadyExists) {
            throw new AppError("Color already exists");
        }
        await this.colorsRepository.create({ name });
    }
}

export { CreateColorsService };