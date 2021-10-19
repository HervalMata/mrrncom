interface ICreateReviewsDTO {
    id?: string;
    user_id: string;
    product_id: string;
    description: string;
    rating: number;
}

export { ICreateReviewsDTO };