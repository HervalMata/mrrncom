import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IAddressRepository} from "../repositories/IAddressRepository";
import {Address} from "../entities/Address";

interface IRequest {
    user_id: string;
}

@injectable()
class GetAddressByUserService {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute({ user_id }: IRequest): Promise<Address> {
        return await this.addressRepository.findByUserId(user_id);
    }
}

export { GetAddressByUserService };