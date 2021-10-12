import { Category } from "../models/Category";
import {v4 as uuidV4} from "uuid";

interface ICreateCategoryDTO {
    name: string,
    description: string;
}

class CategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name, description, id: uuidV4(), isActive: true, created_at: new Date()
        });

        this.categories.push(category);
    }
}

export { CategoriesRepository };