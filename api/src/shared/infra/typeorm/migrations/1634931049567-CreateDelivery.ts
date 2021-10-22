import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDelivery1634931049567 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "deliveries",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "postal_code",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "type",
                        type: "enum",
                        enum: ["post_offices", "shipping_company", "pick_up_on_site"],
                    },
                    {
                        name: "status",
                        type: "enum",
                        enum: ["packaging", "deliver_the_carrier", "on_way", "delivered"],
                    },
                    {
                        name: "cost",
                        type: "numeric",
                    },
                    {
                        name: "prize",
                        type: "numeric",
                    },
                    {
                        name: "address_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FK_Address_Deliveries_Address",
                        referencedTableName: "address",
                        referencedColumnNames: ["id"],
                        columnNames: ["address_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("deliveries");
    }

}
