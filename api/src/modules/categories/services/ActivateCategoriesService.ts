import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {ICategoriesRepository} from "../repositories/ICategoriesRepository";

interface IRequest {
    id: string;
    isActive: boolean;
}

@injectable()
class ActivateCategoriesService {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {
    }

    async execute({ id, isActive }: IRequest): Promise<void> {
        const category = this.categoriesRepository.findByID(id);
        return await this.categoriesRepository.activate(
            id,
            isActive
        );
    }
}

export { ActivateCategoriesService }