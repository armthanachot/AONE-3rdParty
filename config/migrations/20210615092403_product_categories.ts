import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("product_categories", (t) => {
        t.increments("productCategoryId").unsigned().primary()
        t.string("productCategoryCode").notNullable()
        t.string("productCategory").notNullable()
    })

}


export async function down(knex: Knex): Promise<void> {
}

