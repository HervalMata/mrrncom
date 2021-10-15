import {ICreateColorDTO} from "../dtos/ICreateColorDTO";
import {Color} from "../entities/Color";

interface IColorsRepository {
    create(data: ICreateColorDTO): Promise<void>;
    findByName(name: string): Promise<Color>;
    list(): Promise<Color[]>;
}

export { IColorsRepository };