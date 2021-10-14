import {Category} from "../../entities/Category";

import {ICategoriesRepository, ICreateCategoryDTO} from "../ICategoriesRepository";


class CategoriesRepositoryInMemory implements ICategoriesRepository {
    categories: Category[] = [];

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category();
        Object.assign(category, {
            name, description
        });

        this.categories.push(category);
    }

    async list(): Promise<Category[]> {
        return this.categories;
    }

    async findByName(name: string): Promise<Category> {
        return this.categories.find((category) => category.name === name);
    }

    async activate(id: string, isActive: boolean): Promise<void> {
        const categoryIndex = this.categories.findIndex((category) => category.id === id);
        this.categories[categoryIndex].isActive = isActive;
    }

    async findActivate(
         isActive: boolean
    ): Promise<Category[]> {
        return this.categories.filter((category) => {
            if (category.isActive === true) {
                return category;
            }
            return null;
        });
    }

    async findByID(id: string): Promise<Category> {
        return this.categories.find((category) => category.id === id);
    }
}

export { CategoriesRepositoryInMemory };