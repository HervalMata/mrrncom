import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
    name: string,
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
    activate(id: string, isActive: boolean): Promise<void>;
    findActivate(isActive: boolean): Promise<Category[]>;
    findByID(id: string): Promise<Category>;
}

export { ICreateCategoryDTO, ICategoriesRepository };