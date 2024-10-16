import { pgTable, index, serial, varchar, text, doublePrecision, timestamp, foreignKey, integer, numeric, real, unique, jsonb, boolean, uniqueIndex, date, primaryKey } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"




export const cogNewLocations = pgTable("cog_new_locations", {
	id: serial("id").primaryKey().notNull(),
	code: varchar("code", { length: 20 }),
	name: varchar("name", { length: 255 }).notNull(),
	city: varchar("city", { length: 255 }),
	region: varchar("region", { length: 255 }),
	country: varchar("country", { length: 255 }),
	address: text("address"),
	latitude: doublePrecision("latitude"),
	longitude: doublePrecision("longitude"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		idxCogLocationCity: index("idx_cog_location_city").using("btree", table.city.asc().nullsLast()),
		idxCogLocationCountry: index("idx_cog_location_country").using("btree", table.country.asc().nullsLast()),
		idxCogLocationLatLong: index("idx_cog_location_lat_long").using("btree", table.latitude.asc().nullsLast(), table.longitude.asc().nullsLast()),
		idxCogLocationName: index("idx_cog_location_name").using("btree", table.name.asc().nullsLast()),
	}
});

export const demandCoverageByDistances = pgTable("demand_coverage_by_distances", {
	id: serial("id").primaryKey().notNull(),
	siteId: integer("site_id").notNull(),
	siteName: varchar("site_name", { length: 255 }),
	distanceToSiteKm: numeric("distance_to_site_km", { precision: 10, scale:  2 }),
	demandPercentage: numeric("demand_percentage", { precision: 8, scale:  2 }),
	demandM3: numeric("demand_m3", { precision: 15, scale:  2 }),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		idxDemandCoverageByDistanceSite: index("idx_demand_coverage_by_distance_site").using("btree", table.siteId.asc().nullsLast()),
		demandCoverageByDistancesSiteIdFacilitiesIdFk: foreignKey({
			columns: [table.siteId],
			foreignColumns: [facilities.id],
			name: "demand_coverage_by_distances_site_id_facilities_id_fk"
		}),
	}
});

export const distanceCoverageByDemands = pgTable("distance_coverage_by_demands", {
	id: serial("id").primaryKey().notNull(),
	siteId: integer("site_id").notNull(),
	siteName: varchar("site_name", { length: 255 }),
	demandPercentage: numeric("demand_percentage", { precision: 8, scale:  2 }),
	demandM3: numeric("demand_m3", { precision: 15, scale:  2 }),
	distanceToSiteKm: numeric("distance_to_site_km", { precision: 10, scale:  2 }),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		idxDistanceCoverageByDemandSite: index("idx_distance_coverage_by_demand_site").using("btree", table.siteId.asc().nullsLast()),
		distanceCoverageByDemandsSiteIdFacilitiesIdFk: foreignKey({
			columns: [table.siteId],
			foreignColumns: [facilities.id],
			name: "distance_coverage_by_demands_site_id_facilities_id_fk"
		}),
	}
});

export const playingWithNeon = pgTable("playing_with_neon", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	value: real("value"),
});

export const paths = pgTable("paths", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	fromLocation: varchar("from_location", { length: 255 }).notNull(),
	toLocation: varchar("to_location", { length: 255 }).notNull(),
	costCalculationPolicy: varchar("cost_calculation_policy", { length: 50 }).notNull(),
	costCalculationParams: jsonb("cost_calculation_params").default({}),
	co2CalculationParams: jsonb("co2_calculation_params").default({}),
	currency: varchar("currency", { length: 10 }),
	distance: numeric("distance", { precision: 10, scale:  2 }).default('0'),
	distanceUnit: varchar("distance_unit", { length: 20 }),
	transportationTime: numeric("transportation_time", { precision: 10, scale:  2 }).default('0'),
	timeUnit: varchar("time_unit", { length: 20 }),
	straight: boolean("straight").default(false),
	vehicleTypeId: integer("vehicle_type_id"),
	transportationPolicy: varchar("transportation_policy", { length: 10 }),
	minLoadRatio: numeric("min_load_ratio", { precision: 5, scale:  2 }),
	timePeriod: varchar("time_period", { length: 50 }),
	inclusionType: varchar("inclusion_type", { length: 10 }).default('Include'),
	costPuPk: numeric("cost_pu_pk", { precision: 10, scale:  2 }).default('0'),
},
(table) => {
	return {
		idxPathsCostCalculationPolicy: index("idx_paths_cost_calculation_policy").using("btree", table.costCalculationPolicy.asc().nullsLast()),
		idxPathsFromLocation: index("idx_paths_from_location").using("btree", table.fromLocation.asc().nullsLast()),
		idxPathsToLocation: index("idx_paths_to_location").using("btree", table.toLocation.asc().nullsLast()),
		idxPathsVehicleTypeId: index("idx_paths_vehicle_type_id").using("btree", table.vehicleTypeId.asc().nullsLast()),
		pathsVehicleTypeIdVehicleTypesIdFk: foreignKey({
			columns: [table.vehicleTypeId],
			foreignColumns: [vehicleTypes.id],
			name: "paths_vehicle_type_id_vehicle_types_id_fk"
		}),
		pathsNameUnique: unique("paths_name_unique").on(table.name),
	}
});

export const demandFulfillment = pgTable("demand_fulfillment", {
	id: serial("id").primaryKey().notNull(),
	iteration: integer("iteration").notNull(),
	period: integer("period").notNull(),
	customerId: integer("customer_id"),
	productId: integer("product_id"),
	unit: varchar("unit", { length: 50 }).notNull(),
	demandMin: numeric("demand_min", { precision: 15, scale:  2 }),
	demandMax: numeric("demand_max", { precision: 15, scale:  2 }),
	satisfied: numeric("satisfied", { precision: 15, scale:  2 }),
	percentage: numeric("percentage", { precision: 5, scale:  2 }),
	revenuePerItem: numeric("revenue_per_item", { precision: 15, scale:  2 }),
	revenueTotal: numeric("revenue_total", { precision: 15, scale:  2 }),
	underCost: numeric("under_cost", { precision: 15, scale:  2 }),
	overCost: numeric("over_cost", { precision: 15, scale:  2 }),
	penalty: numeric("penalty", { precision: 15, scale:  2 }),
},
(table) => {
	return {
		idxDemandFulfillmentCustomer: index("idx_demand_fulfillment_customer").using("btree", table.customerId.asc().nullsLast()),
		idxDemandFulfillmentIteration: index("idx_demand_fulfillment_iteration").using("btree", table.iteration.asc().nullsLast()),
		idxDemandFulfillmentPeriod: index("idx_demand_fulfillment_period").using("btree", table.period.asc().nullsLast()),
		idxDemandFulfillmentProduct: index("idx_demand_fulfillment_product").using("btree", table.productId.asc().nullsLast()),
		demandFulfillmentCustomerIdCustomersIdFk: foreignKey({
			columns: [table.customerId],
			foreignColumns: [customers.id],
			name: "demand_fulfillment_customer_id_customers_id_fk"
		}),
		demandFulfillmentProductIdProductsIdFk: foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "demand_fulfillment_product_id_products_id_fk"
		}),
	}
});

export const connectedBanks = pgTable("connected_banks", {
	id: text("id").primaryKey().notNull(),
	userId: text("user_id").notNull(),
	accessToken: text("access_token").notNull(),
});

export const units = pgTable("units", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		idxUnitsName: index("idx_units_name").using("btree", table.name.asc().nullsLast()),
		unitsNameUnique: unique("units_name_unique").on(table.name),
	}
});

export const subscriptions = pgTable("subscriptions", {
	id: text("id").primaryKey().notNull(),
	userId: text("user_id").notNull(),
	subscriptionId: text("subscription_id").notNull(),
	status: text("status").notNull(),
},
(table) => {
	return {
		subscriptionsUserIdUnique: unique("subscriptions_user_id_unique").on(table.userId),
		subscriptionsSubscriptionIdUnique: unique("subscriptions_subscription_id_unique").on(table.subscriptionId),
	}
});

export const locations = pgTable("locations", {
	id: serial("id").primaryKey().notNull(),
	code: varchar("code", { length: 20 }),
	name: varchar("name", { length: 255 }).notNull(),
	city: varchar("city", { length: 255 }),
	region: varchar("region", { length: 255 }),
	country: varchar("country", { length: 255 }).notNull(),
	address: text("address"),
	latitude: doublePrecision("latitude"),
	longitude: doublePrecision("longitude"),
	autofillCoordinates: boolean("autofill_coordinates").default(true),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		idxLocationCity: index("idx_location_city").using("btree", table.city.asc().nullsLast()),
		idxLocationCountry: index("idx_location_country").using("btree", table.country.asc().nullsLast()),
		idxLocationLatLong: index("idx_location_lat_long").using("btree", table.latitude.asc().nullsLast(), table.longitude.asc().nullsLast()),
		idxLocationName: index("idx_location_name").using("btree", table.name.asc().nullsLast()),
		idxLocationNameCountry: uniqueIndex("idx_location_name_country").using("btree", table.name.asc().nullsLast(), table.country.asc().nullsLast()).where(sql`(autofill_coordinates IS TRUE)`),
	}
});

export const customers = pgTable("customers", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	type: varchar("type", { length: 100 }).default('Customer'),
	locationId: integer("location_id").notNull(),
	inclusionType: varchar("inclusion_type", { length: 50 }).notNull(),
	additionalParams: jsonb("additional_params"),
	icon: varchar("icon", { length: 255 }).default('default_icon'),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		customersLocationIdLocationsIdFk: foreignKey({
			columns: [table.locationId],
			foreignColumns: [locations.id],
			name: "customers_location_id_locations_id_fk"
		}),
	}
});

export const demand = pgTable("demand", {
	id: serial("id").primaryKey().notNull(),
	customerId: integer("customer_id").notNull(),
	productId: integer("product_id").notNull(),
	demandType: varchar("demand_type", { length: 100 }).notNull(),
	parameters: jsonb("parameters"),
	timePeriodId: integer("time_period_id").notNull(),
	revenue: numeric("revenue", { precision: 10, scale:  2 }),
	downPenalty: numeric("down_penalty", { precision: 10, scale:  2 }).default('0'),
	upPenalty: numeric("up_penalty", { precision: 10, scale:  2 }).default('0'),
	currency: varchar("currency", { length: 10 }).default('USD').notNull(),
	expectedLeadTime: numeric("expected_lead_time", { precision: 5, scale:  2 }),
	timeUnit: varchar("time_unit", { length: 50 }),
	minSplitRatio: numeric("min_split_ratio", { precision: 3, scale:  2 }).default('1.0'),
	backorderPolicy: varchar("backorder_policy", { length: 20 }).default('Not Allowed'),
	inclusionType: varchar("inclusion_type", { length: 50 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		idxDemandCustomerProductInclusion: index("idx_demand_customer_product_inclusion").using("btree", table.customerId.asc().nullsLast(), table.productId.asc().nullsLast(), table.inclusionType.asc().nullsLast()),
		demandCustomerIdCustomersIdFk: foreignKey({
			columns: [table.customerId],
			foreignColumns: [customers.id],
			name: "demand_customer_id_customers_id_fk"
		}).onDelete("cascade"),
		demandProductIdProductsIdFk: foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "demand_product_id_products_id_fk"
		}),
		demandTimePeriodIdPeriodsIdFk: foreignKey({
			columns: [table.timePeriodId],
			foreignColumns: [periods.id],
			name: "demand_time_period_id_periods_id_fk"
		}),
	}
});

export const products = pgTable("products", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	unit: varchar("unit", { length: 50 }).notNull(),
	sellingPrice: numeric("selling_price").notNull(),
	cost: numeric("cost").notNull(),
	currency: varchar("currency", { length: 3 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
});

export const periods = pgTable("periods", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	start: date("start").notNull(),
	end: date("end").notNull(),
	demandCoefficient: numeric("demand_coefficient").notNull(),
},
(table) => {
	return {
		nameIdx: index("periods_name_idx").using("btree", table.name.asc().nullsLast()),
		startEndIdx: index("periods_start_end_idx").using("btree", table.start.asc().nullsLast(), table.end.asc().nullsLast()),
	}
});

export const groups = pgTable("groups", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	description: text("description"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		groupsNameUnique: unique("groups_name_unique").on(table.name),
	}
});

export const groupCustomers = pgTable("group_customers", {
	groupId: integer("group_id").notNull(),
	customerId: integer("customer_id").notNull(),
},
(table) => {
	return {
		groupCustomersGroupIdGroupsIdFk: foreignKey({
			columns: [table.groupId],
			foreignColumns: [groups.id],
			name: "group_customers_group_id_groups_id_fk"
		}).onDelete("cascade"),
		groupCustomersCustomerIdCustomersIdFk: foreignKey({
			columns: [table.customerId],
			foreignColumns: [customers.id],
			name: "group_customers_customer_id_customers_id_fk"
		}).onDelete("cascade"),
	}
});

export const groupGroups = pgTable("group_groups", {
	parentGroupId: integer("parent_group_id").notNull(),
	childGroupId: integer("child_group_id").notNull(),
},
(table) => {
	return {
		groupGroupsParentGroupIdGroupsIdFk: foreignKey({
			columns: [table.parentGroupId],
			foreignColumns: [groups.id],
			name: "group_groups_parent_group_id_groups_id_fk"
		}).onDelete("cascade"),
		groupGroupsChildGroupIdGroupsIdFk: foreignKey({
			columns: [table.childGroupId],
			foreignColumns: [groups.id],
			name: "group_groups_child_group_id_groups_id_fk"
		}).onDelete("cascade"),
	}
});

export const groupSites = pgTable("group_sites", {
	groupId: integer("group_id").notNull(),
	siteId: integer("site_id").notNull(),
},
(table) => {
	return {
		groupSitesGroupIdGroupsIdFk: foreignKey({
			columns: [table.groupId],
			foreignColumns: [groups.id],
			name: "group_sites_group_id_groups_id_fk"
		}).onDelete("cascade"),
		groupSitesSiteIdFacilitiesIdFk: foreignKey({
			columns: [table.siteId],
			foreignColumns: [facilities.id],
			name: "group_sites_site_id_facilities_id_fk"
		}).onDelete("cascade"),
	}
});

export const groupSuppliers = pgTable("group_suppliers", {
	groupId: integer("group_id").notNull(),
	supplierId: integer("supplier_id").notNull(),
},
(table) => {
	return {
		groupSuppliersGroupIdGroupsIdFk: foreignKey({
			columns: [table.groupId],
			foreignColumns: [groups.id],
			name: "group_suppliers_group_id_groups_id_fk"
		}).onDelete("cascade"),
		groupSuppliersSupplierIdSuppliersIdFk: foreignKey({
			columns: [table.supplierId],
			foreignColumns: [suppliers.id],
			name: "group_suppliers_supplier_id_suppliers_id_fk"
		}).onDelete("cascade"),
	}
});

export const suppliers = pgTable("suppliers", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	type: varchar("type", { length: 255 }).default('Supplier'),
	locationId: integer("location_id"),
	products: jsonb("products"),
	inclusionType: varchar("inclusion_type", { length: 50 }),
	additionalParameters: jsonb("additional_parameters"),
	icon: varchar("icon", { length: 255 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		suppliersLocationIdLocationsIdFk: foreignKey({
			columns: [table.locationId],
			foreignColumns: [locations.id],
			name: "suppliers_location_id_locations_id_fk"
		}),
	}
});

export const locationGroups = pgTable("location_groups", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		idxLocationGroupName: index("idx_location_group_name").using("btree", table.name.asc().nullsLast()),
		locationGroupsNameUnique: unique("location_groups_name_unique").on(table.name),
	}
});

export const periodGroups = pgTable("period_groups", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
},
(table) => {
	return {
		idxPeriodGroupsName: index("idx_period_groups_name").using("btree", table.name.asc().nullsLast()),
		periodGroupsNameUnique: unique("period_groups_name_unique").on(table.name),
	}
});

export const productGroups = pgTable("product_groups", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		idxProductGroupName: index("idx_product_group_name").using("btree", table.name.asc().nullsLast()),
		productGroupsNameUnique: unique("product_groups_name_unique").on(table.name),
	}
});

export const sourcing = pgTable("sourcing", {
	id: serial("id").primaryKey().notNull(),
	deliveryDestination: varchar("delivery_destination", { length: 255 }).notNull(),
	sources: text("sources").array(),
	productId: integer("product_id"),
	type: varchar("type", { length: 50 }),
	parameters: jsonb("parameters"),
	timePeriodId: integer("time_period_id"),
	inclusionType: varchar("inclusion_type", { length: 50 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		idxSourcingDeliveryDestination: index("idx_sourcing_delivery_destination").using("btree", table.deliveryDestination.asc().nullsLast()),
		idxSourcingProductId: index("idx_sourcing_product_id").using("btree", table.productId.asc().nullsLast()),
		idxSourcingTimePeriodId: index("idx_sourcing_time_period_id").using("btree", table.timePeriodId.asc().nullsLast()),
		sourcingProductIdProductsIdFk: foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "sourcing_product_id_products_id_fk"
		}),
		sourcingTimePeriodIdPeriodsIdFk: foreignKey({
			columns: [table.timePeriodId],
			foreignColumns: [periods.id],
			name: "sourcing_time_period_id_periods_id_fk"
		}),
	}
});

export const accounts = pgTable("accounts", {
	id: text("id").primaryKey().notNull(),
	plaidId: text("plaid_id"),
	name: text("name").notNull(),
	userId: text("user_id").notNull(),
});

export const transactions = pgTable("transactions", {
	id: text("id").primaryKey().notNull(),
	amount: integer("amount").notNull(),
	payee: text("payee").notNull(),
	notes: text("notes"),
	date: timestamp("date", { mode: 'string' }).notNull(),
	accountId: text("account_id").notNull(),
	categoryId: text("category_id"),
},
(table) => {
	return {
		transactionsAccountIdAccountsIdFk: foreignKey({
			columns: [table.accountId],
			foreignColumns: [accounts.id],
			name: "transactions_account_id_accounts_id_fk"
		}).onDelete("cascade"),
		transactionsCategoryIdCategoriesIdFk: foreignKey({
			columns: [table.categoryId],
			foreignColumns: [categories.id],
			name: "transactions_category_id_categories_id_fk"
		}).onDelete("set null"),
	}
});

export const categories = pgTable("categories", {
	id: text("id").primaryKey().notNull(),
	plaidId: text("plaid_id"),
	name: text("name").notNull(),
	userId: text("user_id").notNull(),
});

export const unitConversions = pgTable("unit_conversions", {
	id: serial("id").primaryKey().notNull(),
	productId: integer("product_id"),
	amountFrom: numeric("amount_from").notNull(),
	unitFrom: varchar("unit_from", { length: 255 }).notNull(),
	amountTo: numeric("amount_to").notNull(),
	unitTo: varchar("unit_to", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		idxUnitConversionsProductId: index("idx_unit_conversions_product_id").using("btree", table.productId.asc().nullsLast()),
		idxUnitConversionsUnitFrom: index("idx_unit_conversions_unit_from").using("btree", table.unitFrom.asc().nullsLast()),
		idxUnitConversionsUnitTo: index("idx_unit_conversions_unit_to").using("btree", table.unitTo.asc().nullsLast()),
		uniqueConversion: uniqueIndex("unique_conversion").using("btree", table.productId.asc().nullsLast(), table.unitFrom.asc().nullsLast(), table.unitTo.asc().nullsLast()),
		unitConversionsProductIdProductsIdFk: foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "unit_conversions_product_id_products_id_fk"
		}),
	}
});

export const customConstraints = pgTable("custom_constraints", {
	id: serial("id").primaryKey().notNull(),
	leftHandSide: text("left_hand_side").notNull(),
	comparisonType: varchar("comparison_type", { length: 2 }).notNull(),
	rightHandSide: text("right_hand_side").notNull(),
	constraintType: varchar("constraint_type", { length: 20 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		idxCustomConstraintsComparisonType: index("idx_custom_constraints_comparison_type").using("btree", table.comparisonType.asc().nullsLast()),
		idxCustomConstraintsConstraintType: index("idx_custom_constraints_constraint_type").using("btree", table.constraintType.asc().nullsLast()),
		idxCustomConstraintsLeftHandSide: index("idx_custom_constraints_left_hand_side").using("btree", table.leftHandSide.asc().nullsLast()),
		idxCustomConstraintsRightHandSide: index("idx_custom_constraints_right_hand_side").using("btree", table.rightHandSide.asc().nullsLast()),
		ucLeftRight: unique("uc_left_right").on(table.leftHandSide, table.rightHandSide),
	}
});

export const objectiveMembers = pgTable("objective_members", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	expression: text("expression").notNull(),
	coefficient: numeric("coefficient", { precision: 15, scale:  2 }).default('1.00'),
	addToObjective: boolean("add_to_objective").default(true),
	inclusionType: varchar("inclusion_type", { length: 10 }),
	customConstraintId: integer("custom_constraint_id"),
},
(table) => {
	return {
		idxObjectiveMembersNameInclusion: index("idx_objective_members_name_inclusion").using("btree", table.name.asc().nullsLast(), table.inclusionType.asc().nullsLast()),
	}
});

export const assetsConstraints = pgTable("assets_constraints", {
	id: serial("id").primaryKey().notNull(),
	groupId: integer("group_id").notNull(),
	minDcs: integer("min_dcs"),
	maxDcs: integer("max_dcs"),
	timePeriod: varchar("time_period", { length: 255 }),
	inclusionType: varchar("inclusion_type", { length: 10 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		idxAssetsConstraintsGroupTime: index("idx_assets_constraints_group_time").using("btree", table.groupId.asc().nullsLast(), table.timePeriod.asc().nullsLast()),
		assetsConstraintsGroupIdGroupsIdFk: foreignKey({
			columns: [table.groupId],
			foreignColumns: [groups.id],
			name: "assets_constraints_group_id_groups_id_fk"
		}),
	}
});

export const bom = pgTable("bom", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	endProductId: integer("end_product_id").notNull(),
	quantity: numeric("quantity", { precision: 10, scale:  2 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		idxBomEndProduct: index("idx_bom_end_product").using("btree", table.endProductId.asc().nullsLast()),
		idxBomName: index("idx_bom_name").using("btree", table.name.asc().nullsLast()),
		bomEndProductIdProductsIdFk: foreignKey({
			columns: [table.endProductId],
			foreignColumns: [products.id],
			name: "bom_end_product_id_products_id_fk"
		}),
	}
});

export const bomByproducts = pgTable("bom_byproducts", {
	id: serial("id").primaryKey().notNull(),
	bomId: integer("bom_id").notNull(),
	productId: integer("product_id").notNull(),
	quantity: numeric("quantity", { precision: 10, scale:  2 }).notNull(),
},
(table) => {
	return {
		idxBomByproductsBomId: index("idx_bom_byproducts_bom_id").using("btree", table.bomId.asc().nullsLast()),
		idxBomByproductsProductId: index("idx_bom_byproducts_product_id").using("btree", table.productId.asc().nullsLast()),
		bomByproductsBomIdBomIdFk: foreignKey({
			columns: [table.bomId],
			foreignColumns: [bom.id],
			name: "bom_byproducts_bom_id_bom_id_fk"
		}).onDelete("cascade"),
		bomByproductsProductIdProductsIdFk: foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "bom_byproducts_product_id_products_id_fk"
		}),
	}
});

export const bomComponents = pgTable("bom_components", {
	id: serial("id").primaryKey().notNull(),
	bomId: integer("bom_id").notNull(),
	productId: integer("product_id").notNull(),
	quantity: numeric("quantity", { precision: 10, scale:  2 }).notNull(),
},
(table) => {
	return {
		idxBomComponentsBomId: index("idx_bom_components_bom_id").using("btree", table.bomId.asc().nullsLast()),
		idxBomComponentsProductId: index("idx_bom_components_product_id").using("btree", table.productId.asc().nullsLast()),
		bomComponentsBomIdBomIdFk: foreignKey({
			columns: [table.bomId],
			foreignColumns: [bom.id],
			name: "bom_components_bom_id_bom_id_fk"
		}).onDelete("cascade"),
		bomComponentsProductIdProductsIdFk: foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "bom_components_product_id_products_id_fk"
		}),
	}
});

export const facilities = pgTable("facilities", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	type: varchar("type", { length: 100 }).default('DC'),
	locationId: integer("location_id").notNull(),
	initiallyOpen: boolean("initially_open").default(true),
	inclusionType: varchar("inclusion_type", { length: 50 }).notNull(),
	capacity: integer("capacity"),
	capacityUnit: varchar("capacity_unit", { length: 50 }),
	aggregateOrdersByLocation: boolean("aggregate_orders_by_location").default(false),
	additionalParams: jsonb("additional_params"),
	icon: varchar("icon", { length: 255 }).default('default_icon'),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		idxFacilitiesNameInclusionType: index("idx_facilities_name_inclusion_type").using("btree", table.name.asc().nullsLast(), table.inclusionType.asc().nullsLast()),
		facilitiesLocationIdLocationsIdFk: foreignKey({
			columns: [table.locationId],
			foreignColumns: [locations.id],
			name: "facilities_location_id_locations_id_fk"
		}),
	}
});

export const cashAccounts = pgTable("cash_accounts", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	facilityId: integer("facility_id").notNull(),
	initialCash: numeric("initial_cash", { precision: 15, scale:  2 }).default('0'),
	currency: varchar("currency", { length: 10 }).notNull(),
	interest: numeric("interest", { precision: 4, scale:  3 }).default('0'),
},
(table) => {
	return {
		idxCashAccountsFacilityCurrency: index("idx_cash_accounts_facility_currency").using("btree", table.facilityId.asc().nullsLast(), table.currency.asc().nullsLast()),
		cashAccountsFacilityIdFacilitiesIdFk: foreignKey({
			columns: [table.facilityId],
			foreignColumns: [facilities.id],
			name: "cash_accounts_facility_id_facilities_id_fk"
		}),
	}
});

export const facilityExpenses = pgTable("facility_expenses", {
	id: serial("id").primaryKey().notNull(),
	facilityId: integer("facility_id").notNull(),
	expenseType: varchar("expense_type", { length: 50 }).notNull(),
	value: numeric("value", { precision: 15, scale:  2 }),
	currency: varchar("currency", { length: 10 }).notNull(),
	timeUnit: varchar("time_unit", { length: 50 }),
	productUnit: varchar("product_unit", { length: 50 }),
	timePeriodId: integer("time_period_id"),
},
(table) => {
	return {
		idxFacilityExpensesFacilityType: index("idx_facility_expenses_facility_type").using("btree", table.facilityId.asc().nullsLast(), table.expenseType.asc().nullsLast()),
		facilityExpensesFacilityIdFacilitiesIdFk: foreignKey({
			columns: [table.facilityId],
			foreignColumns: [facilities.id],
			name: "facility_expenses_facility_id_facilities_id_fk"
		}),
		facilityExpensesTimePeriodIdPeriodsIdFk: foreignKey({
			columns: [table.timePeriodId],
			foreignColumns: [periods.id],
			name: "facility_expenses_time_period_id_periods_id_fk"
		}),
	}
});

export const linearRanges = pgTable("linear_ranges", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	lowerBound: numeric("lower_bound", { precision: 15, scale:  2 }).notNull(),
	expression: text("expression").notNull(),
	upperBound: numeric("upper_bound", { precision: 15, scale:  2 }).notNull(),
},
(table) => {
	return {
		idxLinearRangesName: index("idx_linear_ranges_name").using("btree", table.name.asc().nullsLast()),
	}
});

export const indicatorConstraints = pgTable("indicator_constraints", {
	id: serial("id").primaryKey().notNull(),
	ifConditionId: integer("if_condition_id").notNull(),
	thenConditionId: integer("then_condition_id").notNull(),
	inclusionType: boolean("inclusion_type").default(true).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
},
(table) => {
	return {
		idxIfConditionId: index("idx_if_condition_id").using("btree", table.ifConditionId.asc().nullsLast()),
		idxThenConditionId: index("idx_then_condition_id").using("btree", table.thenConditionId.asc().nullsLast()),
		indicatorConstraintsIfConditionIdLinearRangesIdFk: foreignKey({
			columns: [table.ifConditionId],
			foreignColumns: [linearRanges.id],
			name: "indicator_constraints_if_condition_id_linear_ranges_id_fk"
		}).onDelete("cascade"),
		indicatorConstraintsThenConditionIdLinearRangesIdFk: foreignKey({
			columns: [table.thenConditionId],
			foreignColumns: [linearRanges.id],
			name: "indicator_constraints_then_condition_id_linear_ranges_id_fk"
		}).onDelete("cascade"),
	}
});

export const vehicleTypes = pgTable("vehicle_types", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	capacity: numeric("capacity", { precision: 15, scale:  2 }).default('0'),
	capacityUnit: varchar("capacity_unit", { length: 10 }),
	speed: numeric("speed", { precision: 10, scale:  2 }),
	speedUnit: varchar("speed_unit", { length: 10 }),
},
(table) => {
	return {
		idxVehicleTypesCapacityUnit: index("idx_vehicle_types_capacity_unit").using("btree", table.capacityUnit.asc().nullsLast()),
		idxVehicleTypesName: index("idx_vehicle_types_name").using("btree", table.name.asc().nullsLast()),
		idxVehicleTypesSpeedUnit: index("idx_vehicle_types_speed_unit").using("btree", table.speedUnit.asc().nullsLast()),
		vehicleTypesCapacityUnitUnitsNameFk: foreignKey({
			columns: [table.capacityUnit],
			foreignColumns: [units.name],
			name: "vehicle_types_capacity_unit_units_name_fk"
		}),
		vehicleTypesSpeedUnitUnitsNameFk: foreignKey({
			columns: [table.speedUnit],
			foreignColumns: [units.name],
			name: "vehicle_types_speed_unit_units_name_fk"
		}),
	}
});

export const processingCosts = pgTable("processing_costs", {
	id: serial("id").primaryKey().notNull(),
	facilityId: integer("facility_id").notNull(),
	productId: integer("product_id"),
	type: varchar("type", { length: 50 }).notNull(),
	units: varchar("units", { length: 10 }).notNull(),
	cost: numeric("cost", { precision: 15, scale:  2 }).notNull(),
	currency: varchar("currency", { length: 10 }).notNull(),
	timePeriodId: integer("time_period_id"),
},
(table) => {
	return {
		idxProcessingCostsCurrency: index("idx_processing_costs_currency").using("btree", table.currency.asc().nullsLast()),
		idxProcessingCostsFacilityProduct: index("idx_processing_costs_facility_product").using("btree", table.facilityId.asc().nullsLast(), table.productId.asc().nullsLast()),
		idxProcessingCostsTimePeriod: index("idx_processing_costs_time_period").using("btree", table.timePeriodId.asc().nullsLast()),
		idxProcessingCostsType: index("idx_processing_costs_type").using("btree", table.type.asc().nullsLast()),
		idxProcessingCostsUnits: index("idx_processing_costs_units").using("btree", table.units.asc().nullsLast()),
		processingCostsFacilityIdFacilitiesIdFk: foreignKey({
			columns: [table.facilityId],
			foreignColumns: [facilities.id],
			name: "processing_costs_facility_id_facilities_id_fk"
		}),
		processingCostsProductIdProductsIdFk: foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "processing_costs_product_id_products_id_fk"
		}),
		processingCostsTimePeriodIdPeriodsIdFk: foreignKey({
			columns: [table.timePeriodId],
			foreignColumns: [periods.id],
			name: "processing_costs_time_period_id_periods_id_fk"
		}),
	}
});

export const productFlows = pgTable("product_flows", {
	id: serial("id").primaryKey().notNull(),
	label: varchar("label", { length: 255 }),
	sourceId: integer("source_id"),
	destinationId: integer("destination_id"),
	vehicleTypeId: integer("vehicle_type_id"),
	productId: integer("product_id"),
	expandSources: boolean("expand_sources").default(true),
	expandDestinations: boolean("expand_destinations").default(true),
	expandProducts: boolean("expand_products").default(true),
	minThroughput: numeric("min_throughput", { precision: 15, scale:  2 }).default('0'),
	maxThroughput: numeric("max_throughput", { precision: 15, scale:  2 }).default('0'),
	fixed: boolean("fixed").default(false),
	fixedValue: numeric("fixed_value", { precision: 15, scale:  2 }),
	productUnit: varchar("product_unit", { length: 50 }),
	downPenalty: numeric("down_penalty", { precision: 15, scale:  2 }).default('0'),
	upPenalty: numeric("up_penalty", { precision: 15, scale:  2 }).default('0'),
	currency: varchar("currency", { length: 10 }),
	distanceLimit: numeric("distance_limit", { precision: 10, scale:  2 }),
	distanceUnit: varchar("distance_unit", { length: 50 }),
	timeLimit: numeric("time_limit", { precision: 10, scale:  2 }),
	timeUnit: varchar("time_unit", { length: 50 }),
	timePeriodId: integer("time_period_id"),
	expandPeriods: boolean("expand_periods").default(true),
	inclusionType: varchar("inclusion_type", { length: 10 }),
},
(table) => {
	return {
		idxProductFlowsInclusionType: index("idx_product_flows_inclusion_type").using("btree", table.inclusionType.asc().nullsLast()),
		idxProductFlowsProduct: index("idx_product_flows_product").using("btree", table.productId.asc().nullsLast()),
		idxProductFlowsSourceDest: index("idx_product_flows_source_dest").using("btree", table.sourceId.asc().nullsLast(), table.destinationId.asc().nullsLast()),
		idxProductFlowsTimePeriod: index("idx_product_flows_time_period").using("btree", table.timePeriodId.asc().nullsLast()),
		idxProductFlowsVehicleType: index("idx_product_flows_vehicle_type").using("btree", table.vehicleTypeId.asc().nullsLast()),
		productFlowsSourceIdFacilitiesIdFk: foreignKey({
			columns: [table.sourceId],
			foreignColumns: [facilities.id],
			name: "product_flows_source_id_facilities_id_fk"
		}),
		productFlowsDestinationIdFacilitiesIdFk: foreignKey({
			columns: [table.destinationId],
			foreignColumns: [facilities.id],
			name: "product_flows_destination_id_facilities_id_fk"
		}),
		productFlowsVehicleTypeIdVehicleTypesIdFk: foreignKey({
			columns: [table.vehicleTypeId],
			foreignColumns: [vehicleTypes.id],
			name: "product_flows_vehicle_type_id_vehicle_types_id_fk"
		}),
		productFlowsProductIdProductsIdFk: foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "product_flows_product_id_products_id_fk"
		}),
		productFlowsTimePeriodIdPeriodsIdFk: foreignKey({
			columns: [table.timePeriodId],
			foreignColumns: [periods.id],
			name: "product_flows_time_period_id_periods_id_fk"
		}),
	}
});

export const productStorages = pgTable("product_storages", {
	id: serial("id").primaryKey().notNull(),
	label: varchar("label", { length: 255 }).notNull(),
	facilityId: integer("facility_id").notNull(),
	expandFacilities: boolean("expand_facilities").default(false),
	productId: integer("product_id").notNull(),
	expandProducts: boolean("expand_products").default(false),
	initialStock: numeric("initial_stock", { precision: 15, scale:  2 }).default('0'),
	minStock: numeric("min_stock", { precision: 15, scale:  2 }),
	safetyStock: numeric("safety_stock", { precision: 15, scale:  2 }),
	maxStock: numeric("max_stock", { precision: 15, scale:  2 }),
	fixed: boolean("fixed").default(false),
	fixedValue: numeric("fixed_value", { precision: 15, scale:  2 }),
	understockPenalty: numeric("understock_penalty", { precision: 15, scale:  2 }),
	safetyStockPenalty: numeric("safety_stock_penalty", { precision: 15, scale:  2 }),
	overstockPenalty: numeric("overstock_penalty", { precision: 15, scale:  2 }),
	currency: varchar("currency", { length: 10 }),
	productUnit: varchar("product_unit", { length: 50 }),
	timePeriodId: integer("time_period_id"),
	expandPeriods: boolean("expand_periods").default(false),
	inclusionType: varchar("inclusion_type", { length: 10 }),
},
(table) => {
	return {
		idxProductStoragesFacility: index("idx_product_storages_facility").using("btree", table.facilityId.asc().nullsLast()),
		idxProductStoragesInclusionType: index("idx_product_storages_inclusion_type").using("btree", table.inclusionType.asc().nullsLast()),
		idxProductStoragesLabel: index("idx_product_storages_label").using("btree", table.label.asc().nullsLast()),
		idxProductStoragesProduct: index("idx_product_storages_product").using("btree", table.productId.asc().nullsLast()),
		idxProductStoragesTimePeriod: index("idx_product_storages_time_period").using("btree", table.timePeriodId.asc().nullsLast()),
		productStoragesFacilityIdFacilitiesIdFk: foreignKey({
			columns: [table.facilityId],
			foreignColumns: [facilities.id],
			name: "product_storages_facility_id_facilities_id_fk"
		}),
		productStoragesProductIdProductsIdFk: foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "product_storages_product_id_products_id_fk"
		}),
		productStoragesTimePeriodIdPeriodsIdFk: foreignKey({
			columns: [table.timePeriodId],
			foreignColumns: [periods.id],
			name: "product_storages_time_period_id_periods_id_fk"
		}),
	}
});

export const production = pgTable("production", {
	id: serial("id").primaryKey().notNull(),
	label: varchar("label", { length: 255 }).notNull(),
	siteId: integer("site_id").notNull(),
	productId: integer("product_id").notNull(),
	productionCost: numeric("production_cost", { precision: 15, scale:  2 }),
	currency: varchar("currency", { length: 10 }),
	minThroughput: numeric("min_throughput", { precision: 15, scale:  2 }).default('0'),
	maxThroughput: numeric("max_throughput", { precision: 15, scale:  2 }).default('0'),
	fixed: boolean("fixed").default(false),
	fixedValue: numeric("fixed_value", { precision: 15, scale:  2 }),
	downPenalty: numeric("down_penalty", { precision: 15, scale:  2 }).default('0'),
	upPenalty: numeric("up_penalty", { precision: 15, scale:  2 }).default('0'),
	co2PerProduct: numeric("co2_per_product", { precision: 15, scale:  2 }),
	timePeriodId: integer("time_period_id"),
	inclusionType: varchar("inclusion_type", { length: 10 }).notNull(),
},
(table) => {
	return {
		idxProductionLabel: index("idx_production_label").using("btree", table.label.asc().nullsLast()),
		idxProductionProduct: index("idx_production_product").using("btree", table.productId.asc().nullsLast()),
		idxProductionSite: index("idx_production_site").using("btree", table.siteId.asc().nullsLast()),
		idxProductionTimePeriod: index("idx_production_time_period").using("btree", table.timePeriodId.asc().nullsLast()),
		productionSiteIdFacilitiesIdFk: foreignKey({
			columns: [table.siteId],
			foreignColumns: [facilities.id],
			name: "production_site_id_facilities_id_fk"
		}),
		productionProductIdProductsIdFk: foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "production_product_id_products_id_fk"
		}),
		productionTimePeriodIdPeriodsIdFk: foreignKey({
			columns: [table.timePeriodId],
			foreignColumns: [periods.id],
			name: "production_time_period_id_periods_id_fk"
		}),
	}
});

export const productionNo = pgTable("production_no", {
	id: serial("id").primaryKey().notNull(),
	label: varchar("label", { length: 255 }).notNull(),
	siteId: integer("site_id").notNull(),
	productId: integer("product_id").notNull(),
	bomId: integer("bom_id"),
	productionCost: numeric("production_cost", { precision: 15, scale:  2 }),
	currency: varchar("currency", { length: 10 }),
	minThroughput: numeric("min_throughput", { precision: 15, scale:  2 }).default('0'),
	maxThroughput: numeric("max_throughput", { precision: 15, scale:  2 }).default('0'),
	fixed: boolean("fixed").default(false),
	fixedValue: numeric("fixed_value", { precision: 15, scale:  2 }),
	downPenalty: numeric("down_penalty", { precision: 15, scale:  2 }).default('0'),
	upPenalty: numeric("up_penalty", { precision: 15, scale:  2 }).default('0'),
	co2PerProduct: numeric("co2_per_product", { precision: 15, scale:  2 }),
	timePeriodId: integer("time_period_id"),
	inclusionType: varchar("inclusion_type", { length: 10 }).notNull(),
},
(table) => {
	return {
		idxProductionBomNo: index("idx_production_bom_no").using("btree", table.bomId.asc().nullsLast()),
		idxProductionLabelNo: index("idx_production_label_no").using("btree", table.label.asc().nullsLast()),
		idxProductionProductNo: index("idx_production_product_no").using("btree", table.productId.asc().nullsLast()),
		idxProductionSiteNo: index("idx_production_site_no").using("btree", table.siteId.asc().nullsLast()),
		idxProductionTimePeriodNo: index("idx_production_time_period_no").using("btree", table.timePeriodId.asc().nullsLast()),
		productionNoSiteIdFacilitiesIdFk: foreignKey({
			columns: [table.siteId],
			foreignColumns: [facilities.id],
			name: "production_no_site_id_facilities_id_fk"
		}),
		productionNoProductIdProductsIdFk: foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "production_no_product_id_products_id_fk"
		}),
		productionNoBomIdBomIdFk: foreignKey({
			columns: [table.bomId],
			foreignColumns: [bom.id],
			name: "production_no_bom_id_bom_id_fk"
		}),
		productionNoTimePeriodIdPeriodsIdFk: foreignKey({
			columns: [table.timePeriodId],
			foreignColumns: [periods.id],
			name: "production_no_time_period_id_periods_id_fk"
		}),
	}
});

export const saleBatches = pgTable("sale_batches", {
	id: serial("id").primaryKey().notNull(),
	sourceId: integer("source_id").notNull(),
	productId: integer("product_id").notNull(),
	type: varchar("type", { length: 20 }).notNull(),
	batchSize: numeric("batch_size", { precision: 15, scale:  2 }).notNull(),
	stepSize: numeric("step_size", { precision: 15, scale:  2 }),
	pricePerUnit: numeric("price_per_unit", { precision: 15, scale:  2 }).notNull(),
	currency: varchar("currency", { length: 10 }).notNull(),
	timePeriodId: integer("time_period_id"),
},
(table) => {
	return {
		idxSaleBatchesProduct: index("idx_sale_batches_product").using("btree", table.productId.asc().nullsLast()),
		idxSaleBatchesSource: index("idx_sale_batches_source").using("btree", table.sourceId.asc().nullsLast()),
		idxSaleBatchesTimePeriod: index("idx_sale_batches_time_period").using("btree", table.timePeriodId.asc().nullsLast()),
		saleBatchesSourceIdFacilitiesIdFk: foreignKey({
			columns: [table.sourceId],
			foreignColumns: [facilities.id],
			name: "sale_batches_source_id_facilities_id_fk"
		}),
		saleBatchesProductIdProductsIdFk: foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "sale_batches_product_id_products_id_fk"
		}),
		saleBatchesTimePeriodIdPeriodsIdFk: foreignKey({
			columns: [table.timePeriodId],
			foreignColumns: [periods.id],
			name: "sale_batches_time_period_id_periods_id_fk"
		}),
	}
});

export const siteStateChanges = pgTable("site_state_changes", {
	id: serial("id").primaryKey().notNull(),
	siteId: integer("site_id").notNull(),
	timePeriodId: integer("time_period_id").notNull(),
	newSiteState: varchar("new_site_state", { length: 10 }).notNull(),
},
(table) => {
	return {
		idxSiteStateChangesSite: index("idx_site_state_changes_site").using("btree", table.siteId.asc().nullsLast()),
		idxSiteStateChangesTimePeriod: index("idx_site_state_changes_time_period").using("btree", table.timePeriodId.asc().nullsLast()),
		siteStateChangesSiteIdFacilitiesIdFk: foreignKey({
			columns: [table.siteId],
			foreignColumns: [facilities.id],
			name: "site_state_changes_site_id_facilities_id_fk"
		}),
		siteStateChangesTimePeriodIdPeriodsIdFk: foreignKey({
			columns: [table.timePeriodId],
			foreignColumns: [periods.id],
			name: "site_state_changes_time_period_id_periods_id_fk"
		}),
	}
});

export const locationGroupLocations = pgTable("location_group_locations", {
	locationGroupId: integer("location_group_id").notNull(),
	locationId: integer("location_id").notNull(),
},
(table) => {
	return {
		idxLocationGroupId: index("idx_location_group_id").using("btree", table.locationGroupId.asc().nullsLast()),
		idxLocationId: index("idx_location_id").using("btree", table.locationId.asc().nullsLast()),
		locationGroupLocationsLocationGroupIdLocationGroupsIdF: foreignKey({
			columns: [table.locationGroupId],
			foreignColumns: [locationGroups.id],
			name: "location_group_locations_location_group_id_location_groups_id_f"
		}).onDelete("cascade"),
		locationGroupLocationsLocationIdLocationsIdFk: foreignKey({
			columns: [table.locationId],
			foreignColumns: [locations.id],
			name: "location_group_locations_location_id_locations_id_fk"
		}).onDelete("cascade"),
		locationGroupLocationsLocationGroupIdLocationIdPk: primaryKey({ columns: [table.locationGroupId, table.locationId], name: "location_group_locations_location_group_id_location_id_pk"}),
	}
});

export const periodGroupPeriods = pgTable("period_group_periods", {
	periodGroupId: integer("period_group_id").notNull(),
	periodId: integer("period_id").notNull(),
},
(table) => {
	return {
		periodGroupPeriodsPeriodGroupIdPeriodGroupsIdFk: foreignKey({
			columns: [table.periodGroupId],
			foreignColumns: [periodGroups.id],
			name: "period_group_periods_period_group_id_period_groups_id_fk"
		}).onDelete("cascade"),
		periodGroupPeriodsPeriodIdPeriodsIdFk: foreignKey({
			columns: [table.periodId],
			foreignColumns: [periods.id],
			name: "period_group_periods_period_id_periods_id_fk"
		}).onDelete("cascade"),
		periodGroupPeriodsPeriodGroupIdPeriodIdPk: primaryKey({ columns: [table.periodGroupId, table.periodId], name: "period_group_periods_period_group_id_period_id_pk"}),
	}
});

export const productGroupProducts = pgTable("product_group_products", {
	productGroupId: integer("product_group_id").notNull(),
	productId: integer("product_id").notNull(),
},
(table) => {
	return {
		idxProductGroupId: index("idx_product_group_id").using("btree", table.productGroupId.asc().nullsLast()),
		idxProductId: index("idx_product_id").using("btree", table.productId.asc().nullsLast()),
		productGroupProductsProductGroupIdProductGroupsIdFk: foreignKey({
			columns: [table.productGroupId],
			foreignColumns: [productGroups.id],
			name: "product_group_products_product_group_id_product_groups_id_fk"
		}).onDelete("cascade"),
		productGroupProductsProductIdProductsIdFk: foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "product_group_products_product_id_products_id_fk"
		}).onDelete("cascade"),
		productGroupProductsProductGroupIdProductIdPk: primaryKey({ columns: [table.productGroupId, table.productId], name: "product_group_products_product_group_id_product_id_pk"}),
	}
});

export const supplierProducts = pgTable("supplier_products", {
	supplierId: integer("supplier_id").notNull(),
	productId: integer("product_id").notNull(),
},
(table) => {
	return {
		idxSupplierProductsProductId: index("idx_supplier_products_product_id").using("btree", table.productId.asc().nullsLast()),
		idxSupplierProductsSupplierId: index("idx_supplier_products_supplier_id").using("btree", table.supplierId.asc().nullsLast()),
		supplierProductsSupplierIdSuppliersIdFk: foreignKey({
			columns: [table.supplierId],
			foreignColumns: [suppliers.id],
			name: "supplier_products_supplier_id_suppliers_id_fk"
		}).onDelete("cascade"),
		supplierProductsProductIdProductsIdFk: foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "supplier_products_product_id_products_id_fk"
		}).onDelete("cascade"),
		supplierProductsSupplierIdProductIdPk: primaryKey({ columns: [table.supplierId, table.productId], name: "supplier_products_supplier_id_product_id_pk"}),
	}
});