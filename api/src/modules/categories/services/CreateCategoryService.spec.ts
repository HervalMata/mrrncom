import {CategoriesRepositoryInMemory} from "../repositories/in-memory/CategoriesRepositoryInMemory";
import {CreateCategoryService} from "./CreateCategoryService";
import {AppError} from "../../../errors/AppError";

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let createCategoryService: CreateCategoryService;

describe("Create Category", () => {
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoriesRepositoryInMemory);
    });

    it('should be able to create a category', async () => {
        const newCategory = {
            name: "Category Test", description: "Category description Test",
        };
        await createCategoryService.execute(newCategory);
        const categoryCreated = await categoriesRepositoryInMemory.findByName(newCategory.name);
        expect(categoryCreated).toHaveProperty("id");
    });

    it('should not be able to create a category', async () => {
        await expect(async () => {
            const newCategory = {
                name: "Category Test", description: "Category description Test",
            };
            await createCategoryService.execute(newCategory);
            await createCategoryService.execute(newCategory);
        }).rejects.toBeInstanceOf(AppError);
    });
});