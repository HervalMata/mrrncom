import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePayment1635027996210 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "payments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "card",
                        type: "json",
                    },
                    {
                        name: "address_id",
                        type: "uuid",
                    },
                    {
                        name: "value",
                        type: "numeric",
                    },
                    {
                        name: "installments",
                        type: "numeric",
                    },
                    {
                        name: "method",
                        type: "enum",
                        enum: ["boleto", "creditCard"],
                    },
                    {
                        name: "status",
                        type: "enum",
                        enum: ["pending", "in_analysis", "payed", "available", "in_dispute", "returned", "cancelled"],
                    },
                    {
                        name: "pagseguroCode",
                        type: "varchar",
                    },
                    {
                        name: "payload",
                        type: "varchar",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FK_Users_Payments_User",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FK_Address_Payments_Address",
                        referencedTableName: "address",
                        referencedColumnNames: ["id"],
                        columnNames: ["address_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("payments");
    }

}
