import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IAddressRepository} from "../repositories/IAddressRepository";
import {ICreateAddressDTO} from "../dtos/ICreateAddressDTO";

@injectable()
class CreateAddressService {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute({ id, user_id, isBilling, isShipping, street,
                      number, postal_code, district, city, state, complement, country
    }: ICreateAddressDTO): Promise<void> {
        await this.addressRepository.create({ id, user_id, isBilling, isShipping, street,
            number, postal_code, district, city, state, complement, country
        });
    }
}

export { CreateAddressService };