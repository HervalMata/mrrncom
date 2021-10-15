import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1634324645849 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "available",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "stock",
                        type: "numeric",
                    },
                    {
                        name: "price",
                        type: "numeric",
                    },
                    {
                        name: "isOffer",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "discount",
                        type: "numeric",
                        isNullable: true,
                    },
                    {
                        name: "category_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FK_Products_Category",
                        referencedTableName: "categories",
                        referencedColumnNames: ["id"],
                        columnNames: ["category_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
