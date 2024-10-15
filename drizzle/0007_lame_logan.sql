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
CREATE INDEX IF NOT EXISTS "idx_demand_fulfillment_customer" ON "demand_fulfillment" USING btree ("customer_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_demand_fulfillment_product" ON "demand_fulfillment" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_demand_fulfillment_iteration" ON "demand_fulfillment" USING btree ("iteration");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_demand_fulfillment_period" ON "demand_fulfillment" USING btree ("period");