import {UsersRepositoryInMemory} from "../repositories/in-memory/UsersRepositoryInMemory";
import {AuthenticateUserService} from "./AuthenticateUserService";
import {CreateUserService} from "./CreateUserService";
import {ICreateUserDTO} from "../dtos/ICreateUserDTO";
import {AppError} from "../../../shared/errors/AppError";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserService: AuthenticateUserService;
let createUserService: CreateUserService;

describe('Authenticate user',  () => {
    beforeEach( () => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        // @ts-ignore
        authenticateUserService = new AuthenticateUserService(usersRepositoryInMemory);
        createUserService = new CreateUserService(usersRepositoryInMemory);
    });

    it('should be able to authenticate a user', async () => {
        const user: ICreateUserDTO = {
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        };

        await createUserService.execute(user);
        const result = await authenticateUserService.execute({
            email: user.email, password: user.password,
        });

        expect(result).toHaveProperty("token");
    });

    it('should not permit a nonexistent user to authenticate',  () => {
        expect(async () => {
            await authenticateUserService.execute({
                email: "false@test.com", password: "secret",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to authenticate a user with incorrect password', () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                name: "User Test",
                email: "user@test.com",
                password: "1234"
            };

            await createUserService.execute(user);
            const result = await authenticateUserService.execute({
                email: user.email, password: "incorrect",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});