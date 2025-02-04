import type { PageServerLoad, Actions } from "./$types";
import { z } from "zod";
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

const level = ['JUNIOR', 'FREELANCER', 'STUDIO', 'AGENCY', 'SENIOR SOLO', 'INDIE'] as const

const formSchema = z.object({
    level:  z.enum(level, { required_error: "Please select a skill level" }),
    field: z.string(),
    services: z.string(),
    name: z.string().min(3, {message: 'Is that a name ?'}),
    email: z.string().email(),
    portfolio: z.string().url().min(5, {message: 'Enter a valid website amigo'})
});


export const load: PageServerLoad = async () => {
    const form = await superValidate(zod(formSchema));


    return { form,  skilllevel: level }
};

export const actions: Actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod(formSchema));

        console.log(form)
    }


};