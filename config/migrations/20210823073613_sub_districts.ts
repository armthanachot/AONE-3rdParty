import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("sub_districts", (t) => {
        t.increments("subDistrictId").unsigned().primary()
        t.string("subDistrictCode").notNullable()
        t.string("subDistrictName").notNullable()
        t.string("districtCode").notNullable()
        t.string("provinceCode").notNullable()
    })

}


export async function down(knex: Knex): Promise<void> {
}

