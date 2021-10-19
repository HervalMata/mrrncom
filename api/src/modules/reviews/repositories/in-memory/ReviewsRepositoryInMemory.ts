import {IReviewsRepository} from "../IReviewsRepository";
import {ICreateReviewsDTO} from "../../dtos/ICreateReviewsDTO";
import { Review } from "../../entities/Review";

class ReviewsRepositoryInMemory implements IReviewsRepository{
    reviews: Review[] = [];

    async create({ id, user_id, product_id, description, rating }: ICreateReviewsDTO): Promise<void> {
        const review = new Review();
        Object.assign(review, {
            id, user_id, product_id, description, rating
        });
        this.reviews.push(review);
    }

    async findById(id: string): Promise<Review> {
        return this.reviews.find((review) => review.id === id);;
    }

    async findByProduct(product_id: string): Promise<Review> {
        return this.reviews.find((review) => review.product_id === product_id);;
    }

    async findByUser(user_id: string): Promise<Review> {
        return this.reviews.find((review) => review.user_id === user_id);
    }

    async list(): Promise<Review[]> {
        return this.reviews;
    }

}

export { ReviewsRepositoryInMemory };