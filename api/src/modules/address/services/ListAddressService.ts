import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IAddressRepository} from "../repositories/IAddressRepository";
import {Address} from "../entities/Address";

@injectable()
class ListAddressService {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute(): Promise<Address[]> {
        return await this.addressRepository.list();
    }
}

export { ListAddressService };