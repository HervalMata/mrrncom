import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {ICategoriesRepository} from "../repositories/ICategoriesRepository";
import {Category} from "../entities/Category";

@injectable()
class ListActivateCategoriesService {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {
    }

    async execute(): Promise<Category[]> {
        return await this.categoriesRepository.findActivate(true);
    }

}

export { ListActivateCategoriesService }