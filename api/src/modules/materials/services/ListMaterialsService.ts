import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IMaterialsRepository} from "../repositories/IMaterialsRepository";
import {Color} from "../../colors/entities/Color";

@injectable()
class ListMaterialsService {

    constructor(
        @inject("MaterialsRepository")
        private materialsRepository: IMaterialsRepository
    ) {}

    async execute(): Promise<Color[]> {
        return await this.materialsRepository.list();
    }
}

export { ListMaterialsService };