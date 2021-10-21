import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {ICouponsRepository} from "../repositories/ICouponsRepository";
import {Coupon} from "../entities/Coupon";

interface IRequest {
    id: string;
}

@injectable()
class GetCouponService {

    constructor(
        @inject("CouponsRepository")
        private couponsRepository: ICouponsRepository
    ) {}

    async execute({ id }: IRequest): Promise<Coupon> {
        return await this.couponsRepository.findById(id);
    }
}

export { GetCouponService };