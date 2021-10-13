import {inject, injectable} from "tsyringe";
import {ICategoriesRepository} from "../repositories/ICategoriesRepository";

interface IRequest {
    category_id?: string;
    isActive?: boolean;
}

@injectable()
class ActivateCategoriesService {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {
    }

    async execute({ category_id, isActive }: IRequest): Promise<void> {
        return await this.categoriesRepository.activateCategories(
            category_id, isActive
        );
    }
}

export { ActivateCategoriesService }