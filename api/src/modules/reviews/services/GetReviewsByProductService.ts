import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IReviewsRepository} from "../repositories/IReviewsRepository";
import {UsersProfile} from "../../accounts/entities/UsersProfile";
import {Review} from "../entities/Review";

interface IRequest {
    product_id: string;
}

@injectable()
class GetReviewsByProductService {

    constructor(
        @inject("ReviewsRepository")
        private reviewsRepository: IReviewsRepository
    ) {}

    async execute({ product_id }: IRequest): Promise<Review[]> {
        return await this.reviewsRepository.findByProduct(product_id);
    }
}

export { GetReviewsByProductService };