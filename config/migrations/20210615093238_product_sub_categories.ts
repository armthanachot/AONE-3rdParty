import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("product_sub_categories", (t) => {
        t.increments("productSubCategoryId").unsigned().primary()
        t.string("productCategoryCode").notNullable()
        t.string("productSubCategoryCode").notNullable()
        t.string("productSubCategory").notNullable()
    })

}


export async function down(knex: Knex): Promise<void> {
}

