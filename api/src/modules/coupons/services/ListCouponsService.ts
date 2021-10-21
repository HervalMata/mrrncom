import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {ICouponsRepository} from "../repositories/ICouponsRepository";
import {Coupon} from "../entities/Coupon";

@injectable()
class ListCouponsService {

    constructor(
        @inject("CouponsRepository")
        private couponsRepository: ICouponsRepository
    ) {}

    async execute(): Promise<Coupon[]> {
        return await this.couponsRepository.list();
    }
}

export { ListCouponsService };