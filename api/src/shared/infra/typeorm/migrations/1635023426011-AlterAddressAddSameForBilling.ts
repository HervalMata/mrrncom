import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterAddressAddSameForBilling1635023426011 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "address",
            new TableColumn({
                name: "same_for_billing",
                type: "boolean",
                default: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("address", "same_for_billing");
    }

}
