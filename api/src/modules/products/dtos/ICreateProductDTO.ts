interface ICreateProductDTO {
    id?: string;
    name: string;
    description: string;
    stock: number;
    price: number;
    category_id?: string;
}

export { ICreateProductDTO };