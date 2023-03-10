import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("provinces", (t) => {
        t.increments("provinceId").unsigned().primary()
        t.string("provinceCode").notNullable()
        t.string("provinceName").notNullable()
    })

}


export async function down(knex: Knex): Promise<void> {
}

