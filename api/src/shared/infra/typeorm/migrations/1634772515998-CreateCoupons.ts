import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCoupons1634772515998 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "coupons",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "code",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "type",
                        type: "enum",
                        enum: ["fixed", "percentage"],
                    },
                    {
                        name: "value",
                        type: "numeric",
                    },
                    {
                        name: "expire_date",
                        type: "date",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("coupons");
    }

}
