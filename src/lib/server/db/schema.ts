import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const designer = sqliteTable('designer', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	services: text('services').notNull(),
	category: text('category').notNull()

});
