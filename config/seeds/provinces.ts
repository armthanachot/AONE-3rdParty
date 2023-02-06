"use strict";

import { Knex } from "knex";
import * as provinces from "../../constant/thailand-geo/provinces.json"

export async function seed(knex: Knex): Promise<void> {
    await knex("provinces").insert(provinces);
};
