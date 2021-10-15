import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateMaterialsProducts1634337818755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "materials_products",
                columns: [
                    {
                        name: "product_id",
                        type: "uuid",
                    },
                    {
                        name: "material_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "materials_products",
            new TableForeignKey({
                name: "FK_Materials_Products_Material",
                referencedTableName: "materials",
                referencedColumnNames: ["id"],
                columnNames: ["material_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "materials_products",
            new TableForeignKey({
                name: "FK_Materials_Products_Product",
                referencedTableName: "products",
                referencedColumnNames: ["id"],
                columnNames: ["product_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "materials_products",
            "FK_Materials_Products_Material"
        );
        await queryRunner.dropForeignKey(
            "materials_products",
            "FK_Materials_Products_Product"
        );
        await queryRunner.dropTable("materials_products");
    }

}
