ALTER TABLE "product_flows" ALTER COLUMN "label" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "product_flows" ALTER COLUMN "source_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "product_flows" ALTER COLUMN "destination_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "product_flows" ALTER COLUMN "inclusion_type" DROP NOT NULL;