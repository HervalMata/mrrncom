import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IReviewsRepository} from "../repositories/IReviewsRepository";
import {Review} from "../entities/Review";

interface IRequest {
    user_id: string;
}

@injectable()
class GetReviewsByUserService {

    constructor(
        @inject("ReviewsRepository")
        private reviewsRepository: IReviewsRepository
    ) {}

    async execute({ user_id }: IRequest): Promise<Review[]> {
        return await this.reviewsRepository.findByUser(user_id);
    }
}

export { GetReviewsByUserService };