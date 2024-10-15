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
DROP TABLE "demand_coverage_by_distance";--> statement-breakpoint
DROP TABLE "distance_coverage_by_demand";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "demand_coverage_by_distances" ADD CONSTRAINT "demand_coverage_by_distances_site_id_facilities_id_fk" FOREIGN KEY ("site_id") REFERENCES "public"."facilities"("id") ON DELETE no action ON UPDATE no action;
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
CREATE INDEX IF NOT EXISTS "idx_demand_coverage_by_distance_site" ON "demand_coverage_by_distances" USING btree ("site_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_distance_coverage_by_demand_site" ON "distance_coverage_by_demands" USING btree ("site_id");