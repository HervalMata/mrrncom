import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import {IAddressRepository} from "../IAddressRepository";
import {Address} from "../../entities/Address";
import {getRepository, Repository} from "typeorm";

class AddressRepository implements IAddressRepository {
    private repository: Repository<Address>;

    constructor() {
        this.repository = getRepository(Address);
    }

    async create(data: ICreateAddressDTO): Promise<void> {
        const {
            id, user_id, isBilling, isShipping, street,
            number, postal_code, district, city, state, complement, country
        } = data;
        const address = this.repository.create({
            id, user_id, isBilling, isShipping, street,
            number, postal_code, district, city, state, complement, country
        });
        await this.repository.save(address);
    }

    async findById(id: string): Promise<Address> {
        return await this.repository.findOne(id);
    }

    async findByUserId(user_id: string): Promise<Address> {
        return await this.repository.findOne(user_id);
    }

    async list(): Promise<Address[]> {
        return await this.repository.find();
    }

    async update({id, isBilling, isShipping, street,
                     number, postal_code, district, city, state, complement, country}: ICreateAddressDTO): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({
                isBilling: isBilling,
                isShipping: isShipping,
                street: street,
                number: number,
                complement: complement,
                district: district,
                postal_code: postal_code,
                city: city,
                state: state,
                country: "Brasil"
            })
            .where("id = :id")
            .setParameters({ id })
            .execute();
    }

}

export { AddressRepository };