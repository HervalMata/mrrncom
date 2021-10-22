import {IDeliveryRepository} from "../IDeliveryRepository";
import {ICreateDeliveryDTO} from "../../dtos/ICreateDeliveryDTO";
import {Delivery, Status, Type} from "../../entities/Delivery";
import {getRepository, Repository} from "typeorm";

class DeliveryRepository implements IDeliveryRepository {
    private repository: Repository<Delivery>;

    constructor() {
        this.repository = getRepository(Delivery);
    }

    async create({ id, postal_code, type, status, cost, prize, address_id }: ICreateDeliveryDTO): Promise<void> {
        const delivery = this.repository.create({ id, postal_code, type, status, cost, prize, address_id });
        await this.repository.save(delivery);
    }

    async findById(id: string): Promise<Delivery> {
        return await this.repository.findOne(id);
    }

    async findByStatus(status: Status): Promise<Delivery[]> {
        return await this.repository.find({ status });
    }

    async findByType(type: Type): Promise<Delivery[]> {
        return await this.repository.find({ type });
    }

    async list(): Promise<Delivery[]> {
        return await this.repository.find();
    }

    async update({ id, postal_code, type, status, cost, prize, address_id }: ICreateDeliveryDTO): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ postal_code: postal_code, type: type, status: status, cost: cost, prize: prize, address_id: address_id })
            .where("id = :id").setParameters({ id })
            .execute();
    }

    async findByPostalCode(postal_code: string): Promise<Delivery> {
        return await this.repository.findOne(postal_code);
    }

}

export { DeliveryRepository };