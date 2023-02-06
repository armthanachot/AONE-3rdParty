import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("districts", (t) => {
        t.increments("districtId").unsigned().primary()
        t.string("districtCode").notNullable()
        t.string("districtName").notNullable()
        t.string("provinceCode").notNullable()
    })

}


export async function down(knex: Knex): Promise<void> {
}

