"use strict";

import { Knex } from "knex";
import * as sub_districts from "../../constant/thailand-geo/subDistricts.json"

export async function seed(knex: Knex): Promise<void> {
    await knex("sub_districts").insert(sub_districts);
};
