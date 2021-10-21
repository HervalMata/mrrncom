import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {ICouponsRepository} from "../repositories/ICouponsRepository";
import {ICreateCouponDTO} from "../dtos/ICreateCouponDTO";
import {AppError} from "../../../shared/errors/AppError";

@injectable()
class CreateCouponService {

    constructor(
        @inject("CouponsRepository")
        private couponsRepository: ICouponsRepository
    ) {}

    async execute({ id, code, type, value, expire_date }: ICreateCouponDTO): Promise<void> {
        const couponAlreadyExists = await this.couponsRepository.findByCode(code);
        if (couponAlreadyExists) {
            throw new AppError("Coupon already exists");
        }
        await this.couponsRepository.create({ id, code, type, value, expire_date });
    }
}

export { CreateCouponService };