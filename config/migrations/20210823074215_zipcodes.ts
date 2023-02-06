import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("zipcodes", (t) => {
        t.increments("zipCodeId").unsigned().primary()
        t.string("zipcode").notNullable()
        t.string("subDistrictCode").notNullable()
        t.string("provinceCode").notNullable()
        t.string("districtCode").notNullable()
    })

}


export async function down(knex: Knex): Promise<void> {
}

