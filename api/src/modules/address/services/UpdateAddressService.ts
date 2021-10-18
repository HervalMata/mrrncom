import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IAddressRepository} from "../repositories/IAddressRepository";

interface IRequest {
    id?: string;
    isBilling?: boolean;
    isShipping?: boolean;
    street: string;
    number: number;
    complement?: string;
    district: string;
    postal_code: string;
    city: string;
    state: string;
}

@injectable()
class UpdateAddressService {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute({ id, isBilling, isShipping, street,
                      number, postal_code, district, city, state, complement
    }: IRequest): Promise<void> {
        const usersAddress = await this.addressRepository.findById(id);
        return await this.addressRepository.update({
            id, user_id: usersAddress.user_id, isBilling, isShipping, street,
            number, postal_code, district, city, state, complement, country: "Brasil"
        });
    }
}
export { UpdateAddressService };