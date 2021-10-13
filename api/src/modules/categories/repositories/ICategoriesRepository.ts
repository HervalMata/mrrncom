import { Category } from "../models/Category";

interface ICreateCategoryDTO {
    name: string,
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
    activateCategories(category_id: string, isActive: boolean): Promise<void>;
}

export { ICreateCategoryDTO, ICategoriesRepository };