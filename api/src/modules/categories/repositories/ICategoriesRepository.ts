import { Category } from "../models/Category";

interface ICreateCategoryDTO {
    name: string,
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
    activate(category_id: string, isActive: boolean): Promise<void>;
    findActivate(name?: string): Promise<Category[]>;
}

export { ICreateCategoryDTO, ICategoriesRepository };