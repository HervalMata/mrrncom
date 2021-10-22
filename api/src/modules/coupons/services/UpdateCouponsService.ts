import 'reflect-metadata';
import { inject, injectable} from "tsyringe";
import {ICouponsRepository} from "../repositories/ICouponsRepository";
import {Type} from "../entities/Coupon";

interface IRequest {
    id: string;
    type: Type;
    value?: number;
    expire_date?: Date;
}

@injectable()
class UpdateCouponsService {

    constructor(
        @inject("CouponsRepository")
        private couponsRepository: ICouponsRepository
    ) {}

    async execute({ id, type, value, expire_date }: IRequest): Promise<void> {
        return await this.couponsRepository.update({id, type, value, expire_date});
    }
}

export { UpdateCouponsService };