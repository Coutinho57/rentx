import { container } from "tsyringe";

import "./providers";

import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { UsersTokensRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUserRepository";
import { IUsersTokensRepository } from "../../modules/accounts/repositories/IUsersTokensRepository";
import { CarsImageRepository } from "../../modules/cars/infra/typeorm/repositories/CarsImagesRepository";
import { CarsRepository } from "../../modules/cars/infra/typeorm/repositories/CarsRepository";
import { CategoriesRepository } from "../../modules/cars/infra/typeorm/repositories/CategoriesRepositorty";
import { SpecificationsRepository } from "../../modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ICarsImagesRepository } from "../../modules/cars/repositories/ICarsImagesRepository";
import { ICarsRepository } from "../../modules/cars/repositories/ICarsRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { RentalsRepository } from "../../modules/rentals/infra/typeorm/repositories/RentalsRepository";
import { IRentalsRepository } from "../../modules/rentals/repositories/IRentalsRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ICarsImagesRepository>(
    "CarsImagesRepository",
    CarsImageRepository
);

container.registerSingleton<IRentalsRepository>(
    "RentalsRepository",
    RentalsRepository
);

container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",
    UsersTokensRepository
);