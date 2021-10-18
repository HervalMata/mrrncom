import {IAddressRepository} from "../IAddressRepository";
import {ICreateAddressDTO} from "../../dtos/ICreateAddressDTO";
import {Address} from "../../entities/Address";

class AddressRepositoryInMemory implements IAddressRepository {
    addresses: Address[] = [];

    async create({ id, user_id, isBilling, isShipping, street,
                     number, postal_code, district, city, state, complement, country}: ICreateAddressDTO): Promise<void> {
        const address = new Address();
        Object.assign(address, {
            id, user_id, isBilling, isShipping, street,
            number, postal_code, district, city, state, complement, country
        });
        this.addresses.push(address);
    }

    async findById(id: string): Promise<Address> {
        return this.addresses.find((addresses) => addresses.id === id);
    }

    async findByUserId(user_id: string): Promise<Address> {
        return this.addresses.find((addresses) => addresses.user_id === user_id);
    }

    async list(): Promise<Address[]> {
        return this.addresses;
    }

    async update({ id, user_id, isBilling, isShipping, street,
                     number, postal_code, district, city, state, complement, country
    }: ICreateAddressDTO): Promise<void> {
        const addressIndex = this.addresses.findIndex((address) => address.id === id);
        this.addresses[addressIndex].isBilling = isBilling;
        this.addresses[addressIndex].isShipping = isShipping;
        this.addresses[addressIndex].street = street;
        this.addresses[addressIndex].number = number;
        this.addresses[addressIndex].complement = complement;
        this.addresses[addressIndex].postal_code = postal_code;
        this.addresses[addressIndex].district = district;
        this.addresses[addressIndex].city = city;
        this.addresses[addressIndex].state = state;
        this.addresses[addressIndex].country = "Brasil";
    }

}

export { AddressRepositoryInMemory };