import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("geography", (t) => {
        t.increments("geoId").unsigned().primary()
        t.string("geoName").notNullable()
    })

}


export async function down(knex: Knex): Promise<void> {
}

