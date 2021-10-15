import { ICreateMaterialsDTO } from "../../dtos/ICreateMaterialsDTO";
import { Material } from "../../entities/Material";
import {IMaterialsRepository} from "../IMaterialsRepository";

class MaterialsRepositoryInMemory implements IMaterialsRepository{

    materials: Material[] = [];

    async create({ name }: ICreateMaterialsDTO): Promise<void> {
        const material = new Material();
        Object.assign(material, { name });
        this.materials.push(material);
    }

    async findByName(name: string): Promise<Material> {
        return this.materials.find((material) => material.name === name);
    }

    async list(): Promise<Material[]> {
        return this.materials;
    }

}

export { MaterialsRepositoryInMemory };