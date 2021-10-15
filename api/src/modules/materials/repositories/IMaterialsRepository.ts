import {ICreateMaterialsDTO} from "../dtos/ICreateMaterialsDTO";
import {Material} from "../entities/Material";

interface IMaterialsRepository {
    create(data: ICreateMaterialsDTO): Promise<void>;
    findByName(name: string): Promise<Material>;
    list(): Promise<Material[]>;
}

export { IMaterialsRepository };