import type { PageServerLoad, Actions } from "./$types";
import { z } from "zod";
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { text } from "@sveltejs/kit";
import { field, formSchema, level, services, timezone } from '$lib/formTypes'





export const load: PageServerLoad = async () => {
    const form = await superValidate(zod(formSchema));

    console.log(form.errors)

    return { form, level, field, timezone, services}
};

export const actions: Actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod(formSchema));

         const newForm = await superValidate(zod(formSchema));
        

          const formattedDate = new Date().toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'medium',
            timeZone: 'Africa/Lagos'  
        });

        // Log the form data
        console.log('Form submission attempt:', {
            timestamp: formattedDate,
            data: form.data,
            valid: form.valid,
        });

        // Check for empty arrays in required fields
     

        // Additional validation for required fields
        if (!form.data.name || !form.data.email || !form.data.portfolio) {
            return fail(400, { 
                form,
                message: 'Please fill in all required fields'
            });
        }

        if (!form.valid) {
            console.log('Form validation failed:', form.errors);
            return fail(400, { form });
        }

        // Log successful submission
        console.log('Successful form submission:', {
            timestamp: new Date().toISOString(),
            data: form.data
        });

        return message(form, {
            type: 'success',
            text: 'Application submitted successfully!'
        });
    }
};