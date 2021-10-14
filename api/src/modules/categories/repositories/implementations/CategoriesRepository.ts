import {getRepository, Repository} from "typeorm";
import {Category} from "../../entities/Category";

import {ICategoriesRepository, ICreateCategoryDTO} from "../ICategoriesRepository";


class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            name, description
        });

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        return await this.repository.find();
    }

    async findByName(name: string): Promise<Category> {
        return await this.repository.findOne({name});
    }

    async activate(id: string, isActive: boolean): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({isActive: isActive})
            .where("id = :id")
            .setParameters({ id })
            .execute();
    }

    async findActivate(
         isActive: boolean
    ): Promise<Category[]> {
        const categoriesQuery = await this.repository
            .createQueryBuilder("c")
            .where("c.isActive = :isActive", {
                isActive: true
            });
        /*if (name) {
            categoriesQuery.andWhere("c.name")
        }*/
        return await categoriesQuery.getMany();
    }

    async findByID(id: string): Promise<Category> {
        return await this.repository.findOne(id);
    }
}

export { CategoriesRepository };