import { Knex } from "knex";
import { STATUS } from "../../constant/config";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("products", (t) => {
        t.increments("productId").unsigned().primary()
        t.string("productCode").notNullable()
        t.string("productCategoryCode").notNullable()
        t.string("productSubCategoryCode").notNullable()
        t.string("distributedBy").defaultTo("ALLKONS-ONE")
        t.string("productModel")
        t.string("productSize")
        t.string("productColor")
        t.string("productName").notNullable()
        t.double("productPrice").notNullable()
        t.string("productDescription")
        t.enum("status", Object.values(STATUS)).defaultTo(STATUS.ACTIVE)
        t.string("updatedBy").defaultTo("system")
        t.timestamp("updatedAt").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
        t.string("createdBy").notNullable().defaultTo("system")
        t.timestamp("createdAt").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP"))
    }).raw("ALTER TABLE products AUTO_INCREMENT = 10000")

}


export async function down(knex: Knex): Promise<void> {
}

