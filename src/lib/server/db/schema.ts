import { relations } from 'drizzle-orm/relations';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const designer = sqliteTable('designer', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull().default(''),
	category: text('category').notNull(),
	field: text('field').notNull().default(''),
	portfolio: text('portfolio').notNull().default(''),
	level: text('level').notNull().default('')


});

export const design_field = sqliteTable('design_field', {
	id: integer('id').primaryKey(),
	field_name: text('field_name').notNull().default(''),
	category: text('category').notNull().default('')
});

export const designer_services = sqliteTable('designer_services', {
	id: integer('id').primaryKey(),
	designerId: integer('designerId').references(() => designer.id).notNull(),
	fieldId: integer('fieldId').references(() => design_field.id).notNull(),
});



export const designerRelations = relations(designer, ({ many }) => ({
  services: many(designer_services),
}));

// In design_field schema
export const designFieldRelations = relations(design_field, ({ many }) => ({
  designers: many(designer_services),
}));

// For the junction table
export const designerServicesRelations = relations(designer_services, ({ one }) => ({
  designer: one(designer, {
    fields: [designer_services.designerId],
    references: [designer.id],
  }),
  field: one(design_field, {
    fields: [designer_services.fieldId],
    references: [design_field.id],
  }),
}));
