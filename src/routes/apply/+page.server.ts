import type { PageServerLoad, Actions } from "./$types";
import { z } from "zod";
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { text } from "@sveltejs/kit";


const level = ['JUNIOR', 'FREELANCER', 'STUDIO', 'AGENCY', 'SENIOR SOLO', 'INDIE'] as const;

const field = ['ANIMATION','ARCHITECTURE', 'ART DIRECTION', 'CREATIVE CODING', 'COPYWRITING', 
    'EDITORIAL DESIGN', 'GRAPHIC DESIGN', 'ILLUSTRATION', 'INTERACTION DESIGN', 'INTERIOR DESIGN', 'PHOTOGRAPHY', 'PRODUCT DESIGN',
    'SOCIAL MEDIA', 'SOUND DESIGN', 'TYPE DESIGN', 'UI/UX DESIGN', 'VIDEOMAKING', 'WEB DESIGN' ] as const;

const timezone = ['LAGOS', 'ABUJA', 'IBADAN', 'PORT HARCOURT', 'AKWA IBOM', 'NOMAD'] as const;

const services = [
    '3D Art',
    '3D Model/Render',
    '3D Motion',
    'Advertising',
    'App Design',
    'AR/VR',
    'Back-end',
    'Books',
    'Brand Identity',
    'Campaigns',
    'Communication Strategy',
    'Data Visualization',
    'Digital Design',
    'E-Commerce',
    'Event Planning',
    'Exhibition Design',
    'Front-end',
    'Furniture Design',
    'Information Design',
    'Interior Design',
    'Logos and Trademarks',
    'Magazine',
    'Marketing',
    'Motion Graphics',
    'Packaging',
    'Retail Design',
    'Retouching',
    'Typefaces',
    'Wayfinding',
    'Websites'
    ] as const;

const formSchema = z.object({
    level: z.array(z.enum(level, {message: 'choose at least one'})), 
    field: z.array(z.enum(field, {message: 'choose at least one'})), 
    timezone: z.array(z.enum(timezone, {message: 'choose one'})).optional(),
    services: z.array(z.enum(services, {message: 'choose one'})).optional(), 
    name: z.string().min(3, {message: ''}),
    others: z.string().min(3, {message: 'Is that a name ?'}).optional(),
    email: z.string().email(),
    portfolio: z.string().url().min(5, {message: ''})
});






export const load: PageServerLoad = async () => {
    const form = await superValidate({ services: [], timezone: [], level: [], field: [] }, zod(formSchema));


    return { form, level, services, field, timezone }
};

export const actions: Actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod(formSchema));

        console.log(form);
       

        if (!form.valid){
            return fail(400, {form})
        }

       // Process 
       // form submission here

        const newForm = await superValidate(zod(formSchema));

        return message (
            form,
            {message: 'success', text: 'application submited'},
            
        )

    }


};


export const _handleSubmit = (event: Event) => {
    event.preventDefault();
    console.log('Form submitted:', formSchema);
}