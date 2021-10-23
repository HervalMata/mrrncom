import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserProfileAddBirthDate1635022779669 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users_profile",
            new TableColumn({
                name: "birth_date",
                type: "varchar",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users_profile", "birth_date");
    }

}
