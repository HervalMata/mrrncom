import {container} from "tsyringe";
import {ICategoriesRepository} from "../../modules/categories/repositories/ICategoriesRepository";
import {CategoriesRepository} from "../../modules/categories/repositories/implementations/CategoriesRepository";
import {IUsersRepository} from "../../modules/accounts/repositories/IUsersRepository";
import {UsersRepository} from "../../modules/accounts/repositories/implementations/UsersRepository";
import {IColorsRepository} from "../../modules/colors/repositories/IColorsRepository";
import {ColorsRepository} from "../../modules/colors/repositories/implementations/ColorsRepository";
import {IMaterialsRepository} from "../../modules/materials/repositories/IMaterialsRepository";
import {MaterialsRepository} from "../../modules/materials/repositories/implementations/MaterialsRepository";
import {IProductsRepository} from "../../modules/products/repositories/IProductsRepository";
import {ProductsRepository} from "../../modules/products/repositories/implementations/ProductsRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IColorsRepository>(
    "ColorsRepository",
    ColorsRepository
);

container.registerSingleton<IMaterialsRepository>(
    "MaterialsRepository",
    MaterialsRepository
);

container.registerSingleton<IProductsRepository>(
    "ProductsRepository",
    ProductsRepository
);