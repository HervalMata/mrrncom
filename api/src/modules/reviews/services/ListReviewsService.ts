import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IReviewsRepository} from "../repositories/IReviewsRepository";
import {Review} from "../entities/Review";

@injectable()
class ListReviewsService {

    constructor(
        @inject("ReviewsRepository")
        private reviewsRepository: IReviewsRepository
    ) {}

    async execute(): Promise<Review[]> {
        return await this.reviewsRepository.list();
    }
}

export { ListReviewsService };