import {IColorsRepository} from "../IColorsRepository";
import {ICreateColorDTO} from "../../dtos/ICreateColorDTO";
import {Color} from "../../entities/Color";

class ColorsRepositoryInMemory implements IColorsRepository{

    colors: Color[] = [];

    async create({ name }: ICreateColorDTO): Promise<void> {
        const color = new Color();
        Object.assign(color, { name });
        this.colors.push(color);
    }

    async findByName(name: string): Promise<Color> {
        return this.colors.find((color) => color.name === name);
    }

    async list(): Promise<Color[]> {
        return this.colors;
    }

}