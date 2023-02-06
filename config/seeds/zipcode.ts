"use strict";

import { Knex } from "knex";
import * as zipcodes from "../../constant/thailand-geo/zipcodes.json"

export async function seed(knex: Knex): Promise<void> {
    await knex("zipcodes").insert(zipcodes);
};
