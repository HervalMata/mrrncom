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
import {IProductsImagesRepository} from "../../modules/products/repositories/IProductsImagesRepository";
import {ProductsImagesRepository} from "../../modules/products/repositories/implementations/ProductsImagesRepository";
import {IUsersTokensRepository} from "../../modules/accounts/repositories/IUsersTokensRepository";
import {UsersTokensRepository} from "../../modules/accounts/repositories/implementations/UsersTokensRepository";
import {IDateProvider} from "./providers/DateProvider/IDateProvider";
import {DayjsDateProvider} from "./providers/DateProvider/implementations/DayjsDateProvider";
import {IMailProvider} from "./providers/MailProvider/IMailProvider";
import {EtherealMailProvider} from "./providers/MailProvider/implementations/EtherealMailProvider";
import {IUsersProfileRepository} from "../../modules/accounts/repositories/IUsersProfileRepository";
import {UsersProfileRepository} from "../../modules/accounts/repositories/implementations/UsersProfileRepository";
import {IAddressRepository} from "../../modules/address/repositories/IAddressRepository";
import {AddressRepository} from "../../modules/address/repositories/implementations/AddressRepository";
import {IWishlistsRepository} from "../../modules/wishlists/repositories/IWishlistsRepository";
import {WishlistsRepository} from "../../modules/wishlists/repositories/implementations/WishlistsRepository";
import {IWishlistProductsRepository} from "../../modules/wishlists/repositories/IWishlistProductsRepository";
import {WishlistProductsRepository} from "../../modules/wishlists/repositories/implementations/WishlistProductsRepository";
import {ICouponsRepository} from "../../modules/coupons/repositories/ICouponsRepository";
import {CouponsRepository} from "../../modules/coupons/repositories/implementations/CouponsRepository";

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

container.registerSingleton<IProductsImagesRepository>(
    "ProductsImagesRepository",
    ProductsImagesRepository
);

container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",
    UsersTokensRepository
);

container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",
    DayjsDateProvider
);

container.registerInstance<IMailProvider>(
    "EtherealMailProvider",
    new EtherealMailProvider()
);

container.registerSingleton<IUsersProfileRepository>(
    "UsersProfileRepository",
    UsersProfileRepository
);

container.registerSingleton<IAddressRepository>(
    "AddressRepository",
    AddressRepository
);

container.registerSingleton<IWishlistsRepository>(
    "WishlistsRepository",
    WishlistsRepository
);

container.registerSingleton<IWishlistProductsRepository>(
    "WishlistProductsRepository",
    WishlistProductsRepository
);

container.registerSingleton<ICouponsRepository>(
    "CouponsRepository",
    CouponsRepository
);