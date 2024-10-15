import { z } from 'zod';
import { createInsertSchema } from 'drizzle-zod';
import { relations, sql } from 'drizzle-orm';
import {
  integer,
  pgTable,
  text,
  timestamp,
  jsonb,
  serial,
  varchar,
  index,
  numeric,
  uniqueIndex,
  doublePrecision,
  boolean,
} from 'drizzle-orm/pg-core';

////
// export const customers = pgTable('customers', {
//   id: text('id').primaryKey(),
//   name: text('name').notNull(),
//   type: text('type').default('Customer'),
//   locationId: integer('location_id').notNull(),
//   inclusionType: text('inclusion_type').notNull(),
//   additionalParams: jsonb('additional_params'),
//   createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
//   updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow()
//   // Removed: email, phone, address, userId
// });

export const customers = pgTable(
  'customers',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    type: varchar('type', { length: 100 }).default('Customer'),
    locationId: integer('location_id')
      .notNull()
      .references(() => locations.id),
    inclusionType: varchar('inclusion_type', { length: 50 }).notNull(),
    additionalParams: jsonb('additional_params'),
    icon: varchar('icon', { length: 255 }).default('default_icon'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow()
  },
  (table) => {
    return {
      inclusionTypeCheck: sql`CHECK (${table.inclusionType} IN ('Include', 'Exclude', 'Consider'))))`
    };
  }
);


export const locations = pgTable('locations', {
  id: serial('id').primaryKey(),
  code: varchar('code', { length: 20 }),
  name: varchar('name', { length: 255 }).notNull(),
  city: varchar('city', { length: 255 }),
  region: varchar('region', { length: 255 }),
  country: varchar('country', { length: 255 }).notNull(),
  address: text('address'),
  latitude: doublePrecision('latitude'),
  longitude: doublePrecision('longitude'),
  autofillCoordinates: boolean('autofill_coordinates').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
}, (table) => ({
  nameIdx: index('idx_location_name').on(table.name),
  cityIdx: index('idx_location_city').on(table.city),
  countryIdx: index('idx_location_country').on(table.country),
  latLongIdx: index('idx_location_lat_long').on(table.latitude, table.longitude),
  uniqueNameCountryIdx: uniqueIndex('idx_location_name_country')
    .on(table.name, table.country)
    .where(sql`${table.autofillCoordinates} IS TRUE`)
}));




export const assetsConstraints = pgTable(
  'assets_constraints',
  {
    id: serial('id').primaryKey(),
    groupId: integer('group_id').notNull(),
    minDcs: integer('min_dcs').notNull(),
    maxDcs: integer('max_dcs').notNull(),
    timePeriodId: integer('time_period_id'),
    inclusionType: varchar('inclusion_type', { length: 10 }).notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow()
  },
  (table) => ({
    groupIdIndex: index('idx_group_time_period').on(
      table.groupId,
      table.timePeriodId
    )
  })
);
export const products = pgTable('products', {
  id: serial('id').primaryKey()
  // ... other columns
});
export const bom = pgTable(
  'bom',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    endProductId: integer('end_product_id')
      .notNull()
      .references(() => products.id, { onDelete: 'cascade' }),
    quantity: numeric('quantity', { precision: 10, scale: 2 }).notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow()
  },
  (table) => ({
    nameIdx: index('idx_bom_name').on(table.name),
    endProductIdx: index('idx_bom_end_product').on(table.endProductId)
  })
);

export const bomComponents = pgTable(
  'bom_components',
  {
    id: serial('id').primaryKey(),
    bomId: integer('bom_id')
      .notNull()
      .references(() => bom.id, { onDelete: 'cascade' }),
    productId: integer('product_id')
      .notNull()
      .references(() => products.id, { onDelete: 'cascade' }),
    quantity: numeric('quantity', { precision: 10, scale: 2 }).notNull()
  },
  (table) => ({
    bomIdIdx: index('idx_bom_components_bom_id').on(table.bomId),
    productIdIdx: index('idx_bom_components_product_id').on(table.productId)
  })
);

export const bomByproducts = pgTable(
  'bom_byproducts',
  {
    id: serial('id').primaryKey(),
    bomId: integer('bom_id')
      .notNull()
      .references(() => bom.id, { onDelete: 'cascade' }),
    productId: integer('product_id')
      .notNull()
      .references(() => products.id, { onDelete: 'cascade' }),
    quantity: numeric('quantity', { precision: 10, scale: 2 }).notNull()
  },
  (table) => ({
    bomIdIdx: index('idx_bom_byproducts_bom_id').on(table.bomId),
    productIdIdx: index('idx_bom_byproducts_product_id').on(table.productId)
  })
);
export const facilities = pgTable('facilities', {
  id: serial('id').primaryKey()
  // ... other columns
});
export const co2Emissions = pgTable(
  'co2_emissions',
  {
    id: serial('id').primaryKey(),
    facilityId: integer('facility_id')
      .notNull()
      .references(() => facilities.id, { onDelete: 'cascade' }),
    emissionSource: varchar('emission_source', { length: 255 }).notNull(),
    co2Produced: numeric('co2_produced', { precision: 12, scale: 2 }).notNull(),
    timeUnit: varchar('time_unit', { length: 50 }).notNull(),
    productUnit: varchar('product_unit', { length: 50 }),
    timePeriodId: integer('time_period_id')
      .notNull()
      .references(() => periods.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow()
  },
  (table) => ({
    facilityIdx: index('idx_emission_facility').on(table.facilityId),
    timePeriodIdx: index('idx_emission_time_period').on(table.timePeriodId)
  })
);
export const periods = pgTable('periods', {
  id: serial('id').primaryKey()
  // ... other columns
});
export const co2EmissionsRelations = relations(co2Emissions, ({ one }) => ({
  facility: one(facilities, {
    fields: [co2Emissions.facilityId],
    references: [facilities.id]
  }),
  timePeriod: one(periods, {
    fields: [co2Emissions.timePeriodId],
    references: [periods.id]
  })
}));

export const customConstraints = pgTable(
  'custom_constraints',
  {
    id: serial('id').primaryKey(),
    leftHandSide: text('left_hand_side').notNull(),
    comparisonType: varchar('comparison_type', { length: 2 }).notNull(),
    rightHandSide: text('right_hand_side').notNull(),
    constraintType: varchar('constraint_type', { length: 20 }).notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow()
  },
  (table) => ({
    leftHandSideIdx: index('idx_custom_constraints_left_hand_side').on(
      table.leftHandSide
    ),
    rightHandSideIdx: index('idx_custom_constraints_right_hand_side').on(
      table.rightHandSide
    ),
    comparisonTypeIdx: index('idx_custom_constraints_comparison_type').on(
      table.comparisonType
    ),
    constraintTypeIdx: index('idx_custom_constraints_constraint_type').on(
      table.constraintType
    ),
    uniqueLeftRight: uniqueIndex('uc_left_right').on(
      table.leftHandSide,
      table.rightHandSide
    )
  })
);

export const someRelatedTable = pgTable('some_related_table', {
  id: serial('id').primaryKey()
  // ... other columns
});

// export const customConstraintsRelations = relations(
//   customConstraints,
//   ({ one }) => ({
//     someRelated: one(someRelatedTable, {
//       fields: [customConstraints.someRelatedId],
//       references: [someRelatedTable.id]
//     })
//   })
// );

/////////////////////////

export const accounts = pgTable('accounts', {
  id: text('id').primaryKey(),
  plaidId: text('plaid_id'),
  name: text('name').notNull(),
  userId: text('user_id').notNull()
});

export const accountsRelations = relations(accounts, ({ many }) => ({
  transactions: many(transactions)
}));

export const insertAccountSchema = createInsertSchema(accounts);

export const categories = pgTable('categories', {
  id: text('id').primaryKey(),
  plaidId: text('plaid_id'),
  name: text('name').notNull(),
  userId: text('user_id').notNull()
});

export const categoriesRelations = relations(categories, ({ many }) => ({
  transactions: many(transactions)
}));

export const insertCategorySchema = createInsertSchema(categories);

export const transactions = pgTable('transactions', {
  id: text('id').primaryKey(),
  amount: integer('amount').notNull(),
  payee: text('payee').notNull(),
  notes: text('notes'),
  date: timestamp('date', { mode: 'date' }).notNull(),
  accountId: text('account_id')
    .references(() => accounts.id, {
      onDelete: 'cascade'
    })
    .notNull(),
  categoryId: text('category_id').references(() => categories.id, {
    onDelete: 'set null'
  })
});

export const transactionsRelations = relations(transactions, ({ one }) => ({
  account: one(accounts, {
    fields: [transactions.accountId],
    references: [accounts.id]
  }),
  categories: one(categories, {
    fields: [transactions.categoryId],
    references: [categories.id]
  })
}));

export const insertTransactionSchema = createInsertSchema(transactions, {
  date: z.coerce.date()
});

export const connectedBanks = pgTable('connected_banks', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  accessToken: text('access_token').notNull()
});

export const subscriptions = pgTable('subscriptions', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().unique(),
  subscriptionId: text('subscription_id').notNull().unique(),
  status: text('status').notNull()
});
