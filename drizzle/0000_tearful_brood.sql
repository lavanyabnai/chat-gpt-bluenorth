CREATE TABLE IF NOT EXISTS "accounts" (
	"id" text PRIMARY KEY NOT NULL,
	"plaid_id" text,
	"name" text NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "assets_constraints" (
	"id" serial PRIMARY KEY NOT NULL,
	"group_id" integer NOT NULL,
	"min_dcs" integer,
	"max_dcs" integer,
	"time_period" varchar(255),
	"inclusion_type" varchar(10),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bom" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"end_product_id" integer NOT NULL,
	"quantity" numeric(10, 2) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bom_byproducts" (
	"id" serial PRIMARY KEY NOT NULL,
	"bom_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"quantity" numeric(10, 2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bom_components" (
	"id" serial PRIMARY KEY NOT NULL,
	"bom_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"quantity" numeric(10, 2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cash_accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"facility_id" integer NOT NULL,
	"initial_cash" numeric(15, 2) DEFAULT '0',
	"currency" varchar(10) NOT NULL,
	"interest" numeric(4, 3) DEFAULT '0'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories" (
	"id" text PRIMARY KEY NOT NULL,
	"plaid_id" text,
	"name" text NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cog_new_locations" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" varchar(20),
	"name" varchar(255) NOT NULL,
	"city" varchar(255),
	"region" varchar(255),
	"country" varchar(255),
	"address" text,
	"latitude" double precision,
	"longitude" double precision,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "connected_banks" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"access_token" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "custom_constraints" (
	"id" serial PRIMARY KEY NOT NULL,
	"left_hand_side" text NOT NULL,
	"comparison_type" varchar(2) NOT NULL,
	"right_hand_side" text NOT NULL,
	"constraint_type" varchar(20) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "uc_left_right" UNIQUE("left_hand_side","right_hand_side")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "customers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" varchar(100) DEFAULT 'Customer',
	"location_id" integer NOT NULL,
	"inclusion_type" varchar(50) NOT NULL,
	"additional_params" jsonb,
	"icon" varchar(255) DEFAULT 'default_icon',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "demand" (
	"id" serial PRIMARY KEY NOT NULL,
	"customer_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"demand_type" varchar(100) NOT NULL,
	"parameters" jsonb,
	"time_period_id" integer NOT NULL,
	"revenue" numeric(10, 2),
	"down_penalty" numeric(10, 2) DEFAULT '0',
	"up_penalty" numeric(10, 2) DEFAULT '0',
	"currency" varchar(10) DEFAULT 'USD' NOT NULL,
	"expected_lead_time" numeric(5, 2),
	"time_unit" varchar(50),
	"min_split_ratio" numeric(3, 2) DEFAULT '1.0',
	"backorder_policy" varchar(20) DEFAULT 'Not Allowed',
	"inclusion_type" varchar(50) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "demand_coverage_by_distances" (
	"id" serial PRIMARY KEY NOT NULL,
	"site_id" integer NOT NULL,
	"site_name" varchar(255),
	"distance_to_site_km" numeric(10, 2),
	"demand_percentage" numeric(8, 2),
	"demand_m3" numeric(15, 2),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "demand_fulfillment" (
	"id" serial PRIMARY KEY NOT NULL,
	"iteration" integer NOT NULL,
	"period" integer NOT NULL,
	"customer_id" integer,
	"product_id" integer,
	"unit" varchar(50) NOT NULL,
	"demand_min" numeric(15, 2),
	"demand_max" numeric(15, 2),
	"satisfied" numeric(15, 2),
	"percentage" numeric(5, 2),
	"revenue_per_item" numeric(15, 2),
	"revenue_total" numeric(15, 2),
	"under_cost" numeric(15, 2),
	"over_cost" numeric(15, 2),
	"penalty" numeric(15, 2)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "distance_coverage_by_demands" (
	"id" serial PRIMARY KEY NOT NULL,
	"site_id" integer NOT NULL,
	"site_name" varchar(255),
	"demand_percentage" numeric(8, 2),
	"demand_m3" numeric(15, 2),
	"distance_to_site_km" numeric(10, 2),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facilities" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" varchar(100) DEFAULT 'DC',
	"location_id" integer NOT NULL,
	"initially_open" boolean DEFAULT true,
	"inclusion_type" varchar(50) NOT NULL,
	"capacity" integer,
	"capacity_unit" varchar(50),
	"aggregate_orders_by_location" boolean DEFAULT false,
	"additional_params" jsonb,
	"icon" varchar(255) DEFAULT 'default_icon',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facility_expenses" (
	"id" serial PRIMARY KEY NOT NULL,
	"facility_id" integer NOT NULL,
	"expense_type" varchar(50) NOT NULL,
	"value" numeric(15, 2),
	"currency" varchar(10) NOT NULL,
	"time_unit" varchar(50),
	"product_unit" varchar(50),
	"time_period_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "group_customers" (
	"group_id" integer NOT NULL,
	"customer_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "group_groups" (
	"parent_group_id" integer NOT NULL,
	"child_group_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "group_sites" (
	"group_id" integer NOT NULL,
	"site_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "group_suppliers" (
	"group_id" integer NOT NULL,
	"supplier_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "groups" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "groups_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "indicator_constraints" (
	"id" serial PRIMARY KEY NOT NULL,
	"if_condition_id" integer NOT NULL,
	"then_condition_id" integer NOT NULL,
	"inclusion_type" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "linear_ranges" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"lower_bound" numeric(15, 2) NOT NULL,
	"expression" text NOT NULL,
	"upper_bound" numeric(15, 2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "location_group_locations" (
	"location_group_id" integer NOT NULL,
	"location_id" integer NOT NULL,
	CONSTRAINT "location_group_locations_location_group_id_location_id_pk" PRIMARY KEY("location_group_id","location_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "location_groups" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "location_groups_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "locations" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" varchar(20),
	"name" varchar(255) NOT NULL,
	"city" varchar(255),
	"region" varchar(255),
	"country" varchar(255) NOT NULL,
	"address" text,
	"latitude" double precision,
	"longitude" double precision,
	"autofill_coordinates" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "objective_members" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"expression" text NOT NULL,
	"coefficient" numeric(15, 2) DEFAULT '1.00',
	"add_to_objective" boolean DEFAULT true,
	"inclusion_type" varchar(10),
	"custom_constraint_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "paths" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"from_location" varchar(255) NOT NULL,
	"to_location" varchar(255) NOT NULL,
	"cost_calculation_policy" varchar(50) NOT NULL,
	"cost_pu_pk" numeric(10, 2) DEFAULT '0',
	"cost_calculation_params" jsonb DEFAULT '{}',
	"co2_calculation_params" jsonb DEFAULT '{}',
	"currency" varchar(10),
	"distance" numeric(10, 2) DEFAULT '0',
	"distance_unit" varchar(20),
	"transportation_time" numeric(10, 2) DEFAULT '0',
	"time_unit" varchar(20),
	"straight" boolean DEFAULT false,
	"vehicle_type_id" integer,
	"transportation_policy" varchar(10),
	"min_load_ratio" numeric(5, 2),
	"time_period" varchar(50),
	"inclusion_type" varchar(10) DEFAULT 'Include',
	CONSTRAINT "paths_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "period_group_periods" (
	"period_group_id" integer NOT NULL,
	"period_id" integer NOT NULL,
	CONSTRAINT "period_group_periods_period_group_id_period_id_pk" PRIMARY KEY("period_group_id","period_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "period_groups" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "period_groups_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "periods" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"start" date NOT NULL,
	"end" date NOT NULL,
	"demand_coefficient" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "processing_costs" (
	"id" serial PRIMARY KEY NOT NULL,
	"facility_id" integer NOT NULL,
	"product_id" integer,
	"type" varchar(50) NOT NULL,
	"units" varchar(10) NOT NULL,
	"cost" numeric(15, 2) NOT NULL,
	"currency" varchar(10) NOT NULL,
	"time_period_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product_flows" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" varchar(255),
	"source_id" integer,
	"destination_id" integer,
	"vehicle_type_id" integer,
	"product_id" integer,
	"expand_sources" boolean DEFAULT true,
	"expand_destinations" boolean DEFAULT true,
	"expand_products" boolean DEFAULT true,
	"min_throughput" numeric(15, 2) DEFAULT '0',
	"max_throughput" numeric(15, 2) DEFAULT '0',
	"fixed" boolean DEFAULT false,
	"fixed_value" numeric(15, 2),
	"product_unit" varchar(50),
	"down_penalty" numeric(15, 2) DEFAULT '0',
	"up_penalty" numeric(15, 2) DEFAULT '0',
	"currency" varchar(10),
	"distance_limit" numeric(10, 2),
	"distance_unit" varchar(50),
	"time_limit" numeric(10, 2),
	"time_unit" varchar(50),
	"time_period_id" integer,
	"expand_periods" boolean DEFAULT true,
	"inclusion_type" varchar(10)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product_group_products" (
	"product_group_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	CONSTRAINT "product_group_products_product_group_id_product_id_pk" PRIMARY KEY("product_group_id","product_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product_groups" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "product_groups_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product_storages" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" varchar(255) NOT NULL,
	"facility_id" integer NOT NULL,
	"expand_facilities" boolean DEFAULT false,
	"product_id" integer NOT NULL,
	"expand_products" boolean DEFAULT false,
	"initial_stock" numeric(15, 2) DEFAULT '0',
	"min_stock" numeric(15, 2),
	"safety_stock" numeric(15, 2),
	"max_stock" numeric(15, 2),
	"fixed" boolean DEFAULT false,
	"fixed_value" numeric(15, 2),
	"understock_penalty" numeric(15, 2),
	"safety_stock_penalty" numeric(15, 2),
	"overstock_penalty" numeric(15, 2),
	"currency" varchar(10),
	"product_unit" varchar(50),
	"time_period_id" integer,
	"expand_periods" boolean DEFAULT false,
	"inclusion_type" varchar(10)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "production" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" varchar(255) NOT NULL,
	"site_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"production_cost" numeric(15, 2),
	"currency" varchar(10),
	"min_throughput" numeric(15, 2) DEFAULT '0',
	"max_throughput" numeric(15, 2) DEFAULT '0',
	"fixed" boolean DEFAULT false,
	"fixed_value" numeric(15, 2),
	"down_penalty" numeric(15, 2) DEFAULT '0',
	"up_penalty" numeric(15, 2) DEFAULT '0',
	"co2_per_product" numeric(15, 2),
	"time_period_id" integer,
	"inclusion_type" varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "production_no" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" varchar(255) NOT NULL,
	"site_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"bom_id" integer,
	"production_cost" numeric(15, 2),
	"currency" varchar(10),
	"min_throughput" numeric(15, 2) DEFAULT '0',
	"max_throughput" numeric(15, 2) DEFAULT '0',
	"fixed" boolean DEFAULT false,
	"fixed_value" numeric(15, 2),
	"down_penalty" numeric(15, 2) DEFAULT '0',
	"up_penalty" numeric(15, 2) DEFAULT '0',
	"co2_per_product" numeric(15, 2),
	"time_period_id" integer,
	"inclusion_type" varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"unit" varchar(50) NOT NULL,
	"selling_price" numeric NOT NULL,
	"cost" numeric NOT NULL,
	"currency" varchar(3) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sale_batches" (
	"id" serial PRIMARY KEY NOT NULL,
	"source_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"type" varchar(20) NOT NULL,
	"batch_size" numeric(15, 2) NOT NULL,
	"step_size" numeric(15, 2),
	"price_per_unit" numeric(15, 2) NOT NULL,
	"currency" varchar(10) NOT NULL,
	"time_period_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "site_state_changes" (
	"id" serial PRIMARY KEY NOT NULL,
	"site_id" integer NOT NULL,
	"time_period_id" integer NOT NULL,
	"new_site_state" varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sourcing" (
	"id" serial PRIMARY KEY NOT NULL,
	"delivery_destination" varchar(255) NOT NULL,
	"sources" text[],
	"product_id" integer,
	"type" varchar(50),
	"parameters" jsonb,
	"time_period_id" integer,
	"inclusion_type" varchar(50),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subscriptions" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"subscription_id" text NOT NULL,
	"status" text NOT NULL,
	CONSTRAINT "subscriptions_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "subscriptions_subscription_id_unique" UNIQUE("subscription_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "supplier_products" (
	"supplier_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	CONSTRAINT "supplier_products_supplier_id_product_id_pk" PRIMARY KEY("supplier_id","product_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "suppliers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" varchar(255) DEFAULT 'Supplier',
	"location_id" integer,
	"products" jsonb,
	"inclusion_type" varchar(50),
	"additional_parameters" jsonb,
	"icon" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "transactions" (
	"id" text PRIMARY KEY NOT NULL,
	"amount" integer NOT NULL,
	"payee" text NOT NULL,
	"notes" text,
	"date" timestamp NOT NULL,
	"account_id" text NOT NULL,
	"category_id" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "unit_conversions" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" integer,
	"amount_from" numeric NOT NULL,
	"unit_from" varchar(255) NOT NULL,
	"amount_to" numeric NOT NULL,
	"unit_to" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "units" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "units_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vehicle_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"capacity" numeric(15, 2) DEFAULT '0',
	"capacity_unit" varchar(10),
	"speed" numeric(10, 2),
	"speed_unit" varchar(10)
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "assets_constraints" ADD CONSTRAINT "assets_constraints_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bom" ADD CONSTRAINT "bom_end_product_id_products_id_fk" FOREIGN KEY ("end_product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bom_byproducts" ADD CONSTRAINT "bom_byproducts_bom_id_bom_id_fk" FOREIGN KEY ("bom_id") REFERENCES "public"."bom"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bom_byproducts" ADD CONSTRAINT "bom_byproducts_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bom_components" ADD CONSTRAINT "bom_components_bom_id_bom_id_fk" FOREIGN KEY ("bom_id") REFERENCES "public"."bom"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bom_components" ADD CONSTRAINT "bom_components_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cash_accounts" ADD CONSTRAINT "cash_accounts_facility_id_facilities_id_fk" FOREIGN KEY ("facility_id") REFERENCES "public"."facilities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "customers" ADD CONSTRAINT "customers_location_id_locations_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."locations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "demand" ADD CONSTRAINT "demand_customer_id_customers_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "demand" ADD CONSTRAINT "demand_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "demand" ADD CONSTRAINT "demand_time_period_id_periods_id_fk" FOREIGN KEY ("time_period_id") REFERENCES "public"."periods"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "demand_coverage_by_distances" ADD CONSTRAINT "demand_coverage_by_distances_site_id_facilities_id_fk" FOREIGN KEY ("site_id") REFERENCES "public"."facilities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "demand_fulfillment" ADD CONSTRAINT "demand_fulfillment_customer_id_customers_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "demand_fulfillment" ADD CONSTRAINT "demand_fulfillment_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "distance_coverage_by_demands" ADD CONSTRAINT "distance_coverage_by_demands_site_id_facilities_id_fk" FOREIGN KEY ("site_id") REFERENCES "public"."facilities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities" ADD CONSTRAINT "facilities_location_id_locations_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."locations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facility_expenses" ADD CONSTRAINT "facility_expenses_facility_id_facilities_id_fk" FOREIGN KEY ("facility_id") REFERENCES "public"."facilities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facility_expenses" ADD CONSTRAINT "facility_expenses_time_period_id_periods_id_fk" FOREIGN KEY ("time_period_id") REFERENCES "public"."periods"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "group_customers" ADD CONSTRAINT "group_customers_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "group_customers" ADD CONSTRAINT "group_customers_customer_id_customers_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "group_groups" ADD CONSTRAINT "group_groups_parent_group_id_groups_id_fk" FOREIGN KEY ("parent_group_id") REFERENCES "public"."groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "group_groups" ADD CONSTRAINT "group_groups_child_group_id_groups_id_fk" FOREIGN KEY ("child_group_id") REFERENCES "public"."groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "group_sites" ADD CONSTRAINT "group_sites_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "group_sites" ADD CONSTRAINT "group_sites_site_id_facilities_id_fk" FOREIGN KEY ("site_id") REFERENCES "public"."facilities"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "group_suppliers" ADD CONSTRAINT "group_suppliers_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "group_suppliers" ADD CONSTRAINT "group_suppliers_supplier_id_suppliers_id_fk" FOREIGN KEY ("supplier_id") REFERENCES "public"."suppliers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "indicator_constraints" ADD CONSTRAINT "indicator_constraints_if_condition_id_linear_ranges_id_fk" FOREIGN KEY ("if_condition_id") REFERENCES "public"."linear_ranges"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "indicator_constraints" ADD CONSTRAINT "indicator_constraints_then_condition_id_linear_ranges_id_fk" FOREIGN KEY ("then_condition_id") REFERENCES "public"."linear_ranges"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "location_group_locations" ADD CONSTRAINT "location_group_locations_location_group_id_location_groups_id_fk" FOREIGN KEY ("location_group_id") REFERENCES "public"."location_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "location_group_locations" ADD CONSTRAINT "location_group_locations_location_id_locations_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."locations"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "paths" ADD CONSTRAINT "paths_vehicle_type_id_vehicle_types_id_fk" FOREIGN KEY ("vehicle_type_id") REFERENCES "public"."vehicle_types"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "period_group_periods" ADD CONSTRAINT "period_group_periods_period_group_id_period_groups_id_fk" FOREIGN KEY ("period_group_id") REFERENCES "public"."period_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "period_group_periods" ADD CONSTRAINT "period_group_periods_period_id_periods_id_fk" FOREIGN KEY ("period_id") REFERENCES "public"."periods"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "processing_costs" ADD CONSTRAINT "processing_costs_facility_id_facilities_id_fk" FOREIGN KEY ("facility_id") REFERENCES "public"."facilities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "processing_costs" ADD CONSTRAINT "processing_costs_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "processing_costs" ADD CONSTRAINT "processing_costs_time_period_id_periods_id_fk" FOREIGN KEY ("time_period_id") REFERENCES "public"."periods"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_flows" ADD CONSTRAINT "product_flows_source_id_facilities_id_fk" FOREIGN KEY ("source_id") REFERENCES "public"."facilities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_flows" ADD CONSTRAINT "product_flows_destination_id_facilities_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."facilities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_flows" ADD CONSTRAINT "product_flows_vehicle_type_id_vehicle_types_id_fk" FOREIGN KEY ("vehicle_type_id") REFERENCES "public"."vehicle_types"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_flows" ADD CONSTRAINT "product_flows_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_flows" ADD CONSTRAINT "product_flows_time_period_id_periods_id_fk" FOREIGN KEY ("time_period_id") REFERENCES "public"."periods"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_group_products" ADD CONSTRAINT "product_group_products_product_group_id_product_groups_id_fk" FOREIGN KEY ("product_group_id") REFERENCES "public"."product_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_group_products" ADD CONSTRAINT "product_group_products_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_storages" ADD CONSTRAINT "product_storages_facility_id_facilities_id_fk" FOREIGN KEY ("facility_id") REFERENCES "public"."facilities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_storages" ADD CONSTRAINT "product_storages_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_storages" ADD CONSTRAINT "product_storages_time_period_id_periods_id_fk" FOREIGN KEY ("time_period_id") REFERENCES "public"."periods"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "production" ADD CONSTRAINT "production_site_id_facilities_id_fk" FOREIGN KEY ("site_id") REFERENCES "public"."facilities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "production" ADD CONSTRAINT "production_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "production" ADD CONSTRAINT "production_time_period_id_periods_id_fk" FOREIGN KEY ("time_period_id") REFERENCES "public"."periods"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "production_no" ADD CONSTRAINT "production_no_site_id_facilities_id_fk" FOREIGN KEY ("site_id") REFERENCES "public"."facilities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "production_no" ADD CONSTRAINT "production_no_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "production_no" ADD CONSTRAINT "production_no_bom_id_bom_id_fk" FOREIGN KEY ("bom_id") REFERENCES "public"."bom"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "production_no" ADD CONSTRAINT "production_no_time_period_id_periods_id_fk" FOREIGN KEY ("time_period_id") REFERENCES "public"."periods"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sale_batches" ADD CONSTRAINT "sale_batches_source_id_facilities_id_fk" FOREIGN KEY ("source_id") REFERENCES "public"."facilities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sale_batches" ADD CONSTRAINT "sale_batches_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sale_batches" ADD CONSTRAINT "sale_batches_time_period_id_periods_id_fk" FOREIGN KEY ("time_period_id") REFERENCES "public"."periods"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "site_state_changes" ADD CONSTRAINT "site_state_changes_site_id_facilities_id_fk" FOREIGN KEY ("site_id") REFERENCES "public"."facilities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "site_state_changes" ADD CONSTRAINT "site_state_changes_time_period_id_periods_id_fk" FOREIGN KEY ("time_period_id") REFERENCES "public"."periods"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sourcing" ADD CONSTRAINT "sourcing_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sourcing" ADD CONSTRAINT "sourcing_time_period_id_periods_id_fk" FOREIGN KEY ("time_period_id") REFERENCES "public"."periods"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "supplier_products" ADD CONSTRAINT "supplier_products_supplier_id_suppliers_id_fk" FOREIGN KEY ("supplier_id") REFERENCES "public"."suppliers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "supplier_products" ADD CONSTRAINT "supplier_products_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "suppliers" ADD CONSTRAINT "suppliers_location_id_locations_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."locations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transactions" ADD CONSTRAINT "transactions_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transactions" ADD CONSTRAINT "transactions_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "unit_conversions" ADD CONSTRAINT "unit_conversions_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "vehicle_types" ADD CONSTRAINT "vehicle_types_capacity_unit_units_name_fk" FOREIGN KEY ("capacity_unit") REFERENCES "public"."units"("name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "vehicle_types" ADD CONSTRAINT "vehicle_types_speed_unit_units_name_fk" FOREIGN KEY ("speed_unit") REFERENCES "public"."units"("name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_assets_constraints_group_time" ON "assets_constraints" USING btree ("group_id","time_period");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_bom_name" ON "bom" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_bom_end_product" ON "bom" USING btree ("end_product_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_bom_byproducts_bom_id" ON "bom_byproducts" USING btree ("bom_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_bom_byproducts_product_id" ON "bom_byproducts" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_bom_components_bom_id" ON "bom_components" USING btree ("bom_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_bom_components_product_id" ON "bom_components" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_cash_accounts_facility_currency" ON "cash_accounts" USING btree ("facility_id","currency");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_cog_location_name" ON "cog_new_locations" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_cog_location_city" ON "cog_new_locations" USING btree ("city");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_cog_location_country" ON "cog_new_locations" USING btree ("country");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_cog_location_lat_long" ON "cog_new_locations" USING btree ("latitude","longitude");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_custom_constraints_left_hand_side" ON "custom_constraints" USING btree ("left_hand_side");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_custom_constraints_right_hand_side" ON "custom_constraints" USING btree ("right_hand_side");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_custom_constraints_comparison_type" ON "custom_constraints" USING btree ("comparison_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_custom_constraints_constraint_type" ON "custom_constraints" USING btree ("constraint_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_demand_customer_product_inclusion" ON "demand" USING btree ("customer_id","product_id","inclusion_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_demand_coverage_by_distance_site" ON "demand_coverage_by_distances" USING btree ("site_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_demand_fulfillment_customer" ON "demand_fulfillment" USING btree ("customer_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_demand_fulfillment_product" ON "demand_fulfillment" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_demand_fulfillment_iteration" ON "demand_fulfillment" USING btree ("iteration");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_demand_fulfillment_period" ON "demand_fulfillment" USING btree ("period");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_distance_coverage_by_demand_site" ON "distance_coverage_by_demands" USING btree ("site_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_facilities_name_inclusion_type" ON "facilities" USING btree ("name","inclusion_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_facility_expenses_facility_type" ON "facility_expenses" USING btree ("facility_id","expense_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_if_condition_id" ON "indicator_constraints" USING btree ("if_condition_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_then_condition_id" ON "indicator_constraints" USING btree ("then_condition_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_linear_ranges_name" ON "linear_ranges" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_location_group_id" ON "location_group_locations" USING btree ("location_group_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_location_id" ON "location_group_locations" USING btree ("location_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_location_group_name" ON "location_groups" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_location_name" ON "locations" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_location_city" ON "locations" USING btree ("city");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_location_country" ON "locations" USING btree ("country");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_location_lat_long" ON "locations" USING btree ("latitude","longitude");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "idx_location_name_country" ON "locations" USING btree ("name","country") WHERE "locations"."autofill_coordinates" IS TRUE;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_objective_members_name_inclusion" ON "objective_members" USING btree ("name","inclusion_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_paths_from_location" ON "paths" USING btree ("from_location");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_paths_to_location" ON "paths" USING btree ("to_location");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_paths_cost_calculation_policy" ON "paths" USING btree ("cost_calculation_policy");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_paths_vehicle_type_id" ON "paths" USING btree ("vehicle_type_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_period_groups_name" ON "period_groups" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "periods_name_idx" ON "periods" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "periods_start_end_idx" ON "periods" USING btree ("start","end");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_processing_costs_facility_product" ON "processing_costs" USING btree ("facility_id","product_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_processing_costs_type" ON "processing_costs" USING btree ("type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_processing_costs_currency" ON "processing_costs" USING btree ("currency");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_processing_costs_units" ON "processing_costs" USING btree ("units");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_processing_costs_time_period" ON "processing_costs" USING btree ("time_period_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_product_flows_source_dest" ON "product_flows" USING btree ("source_id","destination_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_product_flows_vehicle_type" ON "product_flows" USING btree ("vehicle_type_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_product_flows_product" ON "product_flows" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_product_flows_time_period" ON "product_flows" USING btree ("time_period_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_product_flows_inclusion_type" ON "product_flows" USING btree ("inclusion_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_product_group_id" ON "product_group_products" USING btree ("product_group_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_product_id" ON "product_group_products" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_product_group_name" ON "product_groups" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_product_storages_label" ON "product_storages" USING btree ("label");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_product_storages_facility" ON "product_storages" USING btree ("facility_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_product_storages_product" ON "product_storages" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_product_storages_time_period" ON "product_storages" USING btree ("time_period_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_product_storages_inclusion_type" ON "product_storages" USING btree ("inclusion_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_production_label" ON "production" USING btree ("label");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_production_site" ON "production" USING btree ("site_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_production_product" ON "production" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_production_time_period" ON "production" USING btree ("time_period_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_production_label_no" ON "production_no" USING btree ("label");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_production_site_no" ON "production_no" USING btree ("site_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_production_product_no" ON "production_no" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_production_bom_no" ON "production_no" USING btree ("bom_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_production_time_period_no" ON "production_no" USING btree ("time_period_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_sale_batches_source" ON "sale_batches" USING btree ("source_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_sale_batches_product" ON "sale_batches" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_sale_batches_time_period" ON "sale_batches" USING btree ("time_period_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_site_state_changes_site" ON "site_state_changes" USING btree ("site_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_site_state_changes_time_period" ON "site_state_changes" USING btree ("time_period_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_sourcing_product_id" ON "sourcing" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_sourcing_time_period_id" ON "sourcing" USING btree ("time_period_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_sourcing_delivery_destination" ON "sourcing" USING btree ("delivery_destination");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_supplier_products_supplier_id" ON "supplier_products" USING btree ("supplier_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_supplier_products_product_id" ON "supplier_products" USING btree ("product_id");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "unique_conversion" ON "unit_conversions" USING btree ("product_id","unit_from","unit_to");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_unit_conversions_product_id" ON "unit_conversions" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_unit_conversions_unit_from" ON "unit_conversions" USING btree ("unit_from");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_unit_conversions_unit_to" ON "unit_conversions" USING btree ("unit_to");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_units_name" ON "units" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_vehicle_types_name" ON "vehicle_types" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_vehicle_types_capacity_unit" ON "vehicle_types" USING btree ("capacity_unit");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_vehicle_types_speed_unit" ON "vehicle_types" USING btree ("speed_unit");