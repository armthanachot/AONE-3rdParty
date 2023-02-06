import { Knex } from "knex";
import { STATUS } from "constant/config";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("clients", (t) => {
        t.increments("id").unsigned().primary()
        t.text("clientId").notNullable()
        t.string("clientSecret").notNullable()
        t.string("salt").notNullable()
        t.string("appName").notNullable()
        t.string("host").notNullable()
        t.string("description")
        t.string("lastToken")
        t.enum("status", Object.values(STATUS)).defaultTo(STATUS.ACTIVE)
        t.string("lastToken")
        t.timestamp("updatedAt").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
        t.timestamp("createdAt").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP"))

    })

}


export async function down(knex: Knex): Promise<void> {
}

