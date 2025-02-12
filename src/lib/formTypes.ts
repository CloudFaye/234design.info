import { z } from "zod";

export const level = ['JUNIOR', 'FREELANCER', 'STUDIO', 'AGENCY', 'SENIOR SOLO', 'INDIE'] as const;
export const field = ['ANIMATION', 'ARCHITECTURE'] as const;
export const timezone = ['LAGOS', 'ABUJA'] as const;
export const services = ['3D Art', '3D Model/Render'] as const;

// Client-safe schema
export const formSchema = z.object({
    level: z.array(z.enum(level, {message: 'text here '})).optional(), 
    field: z.array(z.enum(field, {message: 'choose at least one'})), 
    timezone: z.array(z.enum(timezone, {message: 'choose one'})),
    services: z.array(z.enum(services, {message: 'choose one'})), 
    name: z.string().min(3, {message: 'That a name?'}),
    others: z.string().min(3, {message: 'No other details?'}),
    email: z.string().email().min(1, {message: 'Invalid email'}),
    portfolio: z.string().url().min(5, {message: 'Kindly affix https:// if you missed it'})
});

export type FormSchema = typeof formSchema;