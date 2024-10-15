ALTER TABLE "production" DROP CONSTRAINT "production_bom_id_bom_id_fk";
--> statement-breakpoint
DROP INDEX IF EXISTS "idx_production_bom";--> statement-breakpoint
ALTER TABLE "production" DROP COLUMN IF EXISTS "bom_id";