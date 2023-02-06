"use strict";

import { Knex } from "knex";
import * as districts from "../../constant/thailand-geo/districts.json"

export async function seed(knex: Knex): Promise<void> {
    await knex("districts").insert(districts);
};
