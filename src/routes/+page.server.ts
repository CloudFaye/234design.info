import { db } from "$lib/server/db/db";
import { asc } from "drizzle-orm";
import type { PageServerLoad } from "./$types";
import { design_field, designer, designer_services } from "$lib/server/db/schema";







export const load: PageServerLoad = async () => {
    const allDesigners = await db.query.designer.findMany({
        orderBy: [asc(designer.name)],
    with: {
        services: {
            with: {
                field: true
            }
        }
    }
    }); 

    const designServices = [
    await db.query.design_field.findMany({
        orderBy: [asc(design_field.field_name)]})
    ] 


    const tooling = 
[  
  { id: 1, name: "Figma", category: "Design" },  
  { id: 2, name: "Sketch", category: "Design" },  
  { id: 3, name: "Adobe XD", category: "Design" },  
  { id: 4, name: "Framer", category: "Prototyping" },  
  { id: 5, name: "ProtoPie", category: "Prototyping" },  
  { id: 6, name: "Webflow", category: "Development" },  
  { id: 7, name: "Spline", category: "3D" },  
  { id: 8, name: "Blender", category: "3D" },  
  { id: 9, name: "Unity", category: "Development" },  
  { id: 10, name: "Figma Jam", category: "Collaboration" },  
  { id: 11, name: "Miro", category: "Collaboration" },  
  { id: 12, name: "Zeplin", category: "Handoff" },  
  { id: 13, name: "Storybook", category: "Documentation" },  
  { id: 14, name: "GitHub", category: "Development" },  
  { id: 15, name: "Jira", category: "Management" },  
  { id: 16, name: "Notion", category: "Documentation" },  
  { id: 17, name: "UserTesting", category: "Research" },  
  { id: 18, name: "Hotjar", category: "Analytics" },  
  { id: 19, name: "Rive", category: "Animation" },  
  { id: 20, name: "Lottie", category: "Animation" },  
  { id: 21, name: "Axure RP", category: "Wireframing" },  
  { id: 22, name: "Proto.io", category: "Prototyping" },  
  { id: 23, name: "Galileo AI", category: "AI" },  
  { id: 24, name: "ChatGPT", category: "AI" },  
  { id: 25, name: "Stark", category: "Accessibility" },  
  { id: 26, name: "Zeroheight", category: "Documentation" },  
  { id: 27, name: "Plasmic", category: "Development" },  
  { id: 28, name: "Whimsical", category: "Wireframing" }  
]  




        return {
            allDesigners, tooling, designServices
        }
};

// Create designer
/* const [newDesigner] = await db.insert(designer).values({
  name: 'John Doe',
  email: 'john@example.com',
  portfolio: 'example.com',
  category: 'UI/UX',
}).returning();

// Add services
await db.insert(designer_services).values([
  { designerId: newDesigner.id, fieldId: 1 },
  { designerId: newDesigner.id, fieldId: 2 },
]); */