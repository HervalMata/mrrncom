import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterProductAddDimensions1634927860787 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "products",
            new TableColumn({
                name: "alturaCm",
                type: "numeric",
                default: 0,
            })
        );
        await queryRunner.addColumn(
            "products",
            new TableColumn({
                name: "larguraCm",
                type: "numeric",
                default: 0,
            })
        );
        await queryRunner.addColumn(
            "products",
            new TableColumn({
                name: "profundidadeCm",
                type: "numeric",
                default: 0,
            })
        );
        await queryRunner.addColumn(
            "products",
            new TableColumn({
                name: "pesoKg",
                type: "numeric",
                default: 0,
            })
        );
        await queryRunner.addColumn(
            "products",
            new TableColumn({
                name: "freteGratis",
                type: "boolean",
                default: false
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("products", "alturaCM");
        await queryRunner.dropColumn("products", "larguraCM");
        await queryRunner.dropColumn("products", "profundidadeCM");
        await queryRunner.dropColumn("products", "pesoKg");
        await queryRunner.dropColumn("products", "freteGratis");
    }

}
