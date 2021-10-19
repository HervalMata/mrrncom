import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProductsWishlist1634681698690 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "wishlist_products",
                columns: [
                    {
                        name: "product_id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "wishlist_id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FK_Products_Wishlist_Products_Product",
                        referencedTableName: "products",
                        referencedColumnNames: ["id"],
                        columnNames: ["product_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "FK_Wishlists_Wishlist_Products_Wishlist",
                        referencedTableName: "wishlists",
                        referencedColumnNames: ["id"],
                        columnNames: ["wishlist_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("wishlist_products");
    }

}
