import {inject, injectable} from "tsyringe";
import {ICategoriesRepository} from "../repositories/ICategoriesRepository";
import {Category} from "../models/Category";

interface IRequest {
    name?: string;
}

@injectable()
class ListActivateCategoriesService {
    constructor(
        @inject("CategoriesRepositories")
        private categoriesRepository: ICategoriesRepository
    ) {
    }

    async execute({ name }: IRequest): Promise<Category[]> {
        return await this.categoriesRepository.findActivate(name);
    }

}

export { ListActivateCategoriesService }