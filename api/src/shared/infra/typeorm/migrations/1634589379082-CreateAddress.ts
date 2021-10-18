import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAddress1634589379082 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name: "address",
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
                      name: "isBilling",
                      type: "boolean",
                      default: true,
                  },
                  {
                      name: "isShipping",
                      type: "boolean",
                      default: false,
                  },
                  {
                      name: "street",
                      type: "varchar",
                  },
                  {
                      name: "number",
                      type: "numeric",
                  },
                  {
                      name: "complement",
                      type: "varchar",
                      isNullable: true,
                  },
                  {
                      name: "district",
                      type: "varchar",
                  },
                  {
                      name: "postal_code",
                      type: "varchar",
                  },
                  {
                      name: "city",
                      type: "varchar",
                  },
                  {
                      name: "state",
                      type: "varchar",
                  },
                  {
                      name: "country",
                      type: "varchar",
                  },
                  {
                      name: "created_at",
                      type: "timestamp",
                      default: "now()",
                  },
              ],
              foreignKeys: [
                  {
                      name: "FK_Users_Address_User",
                      referencedTableName: "users",
                      referencedColumnNames: ["id"],
                      columnNames: ["user_id"],
                      onDelete: "SET NULL",
                      onUpdate: "SET NULL",
                  },
              ],
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("address");
    }

}
