"use strict";

import { Knex } from "knex";
import * as geo from "../../constant/thailand-geo/geography.json"

export async function seed(knex: Knex): Promise<void> {
    await knex("geography").insert(geo);
};
