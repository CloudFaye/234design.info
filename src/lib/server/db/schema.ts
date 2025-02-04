import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const designer = sqliteTable('designer', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull().default(''),
	services: text('services').notNull(),
	category: text('category').notNull(),
	field: text('field').notNull().default(''),
	portfolio: text('portfolio').notNull().default(''),
	level: text('level').notNull().default('')


});

