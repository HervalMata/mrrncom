import {ICreateAddressDTO} from "../dtos/ICreateAddressDTO";
import {Address} from "../entities/Address";

interface IAddressRepository {
    create(data: ICreateAddressDTO): Promise<void>;
    findById(id: string): Promise<Address>;
    findByUserId(user_id: string): Promise<Address>;
    list(): Promise<Address[]>;
    update(data: ICreateAddressDTO): Promise<void>;

}

export { IAddressRepository };