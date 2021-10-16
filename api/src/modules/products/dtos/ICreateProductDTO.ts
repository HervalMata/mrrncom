import {Color} from "../../colors/entities/Color";
import {Material} from "../../materials/entities/Material";

interface ICreateProductDTO {
    id?: string;
    name: string;
    description: string;
    stock: number;
    price: number;
    category_id?: string;
    colors?: Color[];
    materials?: Material[];
}

export { ICreateProductDTO };