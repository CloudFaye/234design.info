import { db } from "$lib/server/db/db";
import { asc } from "drizzle-orm";
import type { PageServerLoad } from "./$types";
import { designer } from "$lib/server/db/schema";







export const load: PageServerLoad = async () => {
    const allDesigners = await db.query.designer.findMany({
        orderBy: [asc(designer.name)]}); 


        return {
            allDesigners
        }
};