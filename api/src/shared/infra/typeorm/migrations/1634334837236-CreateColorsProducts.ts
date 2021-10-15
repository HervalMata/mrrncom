import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateColorsProducts1634334837236 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "colors_products",
                columns: [
                    {
                        name: "product_id",
                        type: "uuid",
                    },
                    {
                        name: "color_id",
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
            "colors_products",
            new TableForeignKey({
                name: "FK_Colors_Products_Color",
                referencedTableName: "colors",
                referencedColumnNames: ["id"],
                columnNames: ["color_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "colors_products",
            new TableForeignKey({
                name: "FK_Colors_Products_Product",
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
            "colors_products",
            "FK_Colors_Products_Color"
        );
        await queryRunner.dropForeignKey(
            "colors_products",
            "FK_Colors_Products_Product"
        );
        await queryRunner.dropTable("colors_products");
    }

}
