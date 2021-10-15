import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IMaterialsRepository} from "../repositories/IMaterialsRepository";
import {AppError} from "../../../shared/errors/AppError";
import {ICreateMaterialsDTO} from "../dtos/ICreateMaterialsDTO";

@injectable()
class CreateMaterialsService {

    constructor(
        @inject("MaterialsRepository")
        private materialsRepository: IMaterialsRepository
    ) {}

    async execute({ name }: ICreateMaterialsDTO): Promise<void> {
        const materialAlreadyExists = await this.materialsRepository.findByName(name);
        if (materialAlreadyExists) {
            throw new AppError("Material already exists");
        }
        await this.materialsRepository.create({ name });
    }
}

export { CreateMaterialsService };