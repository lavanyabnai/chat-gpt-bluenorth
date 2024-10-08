-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Password" (
    "hash" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Password_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PLAN_INPUT" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customer" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "Jan" INTEGER,
    "Feb" INTEGER,
    "Mar" INTEGER,
    "Apr" INTEGER,
    "May" INTEGER,
    "Jun" INTEGER,
    "Jul" INTEGER,
    "Aug" INTEGER,
    "Sep" INTEGER,
    "Oct" INTEGER,
    "Nov" INTEGER,
    "Dec" INTEGER,
    "material_cost_pu" INTEGER,
    "inv_hold_cost_pupm" INTEGER,
    "stockout_cost_pupm" INTEGER,
    "hiring_cost_pw" INTEGER,
    "firing_cost_pw" INTEGER,
    "labor_hrs_pu" INTEGER,
    "worker_cost_pm" INTEGER,
    "overtime_cost_phr" INTEGER,
    "outsourcing_cost_pu" INTEGER,
    "max_work_hrs_pwpm" INTEGER,
    "max_overtime_hrs_pwpm" INTEGER,
    "inventory_start" INTEGER,
    "inventory_end" INTEGER,
    "backlog_start" INTEGER,
    "backlog_end" INTEGER,
    "num_workers_start" INTEGER,
    "min_end_workers" INTEGER,
    "max_end_workers" INTEGER,
    "CreatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "SNOP_SCENARIO" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "scenario_id" TEXT,
    "description" TEXT,
    "CreatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "module" TEXT DEFAULT 'Sales & Operations Planning',
    "Status" TEXT,
    "customer" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "Jan" INTEGER,
    "Feb" INTEGER,
    "Mar" INTEGER,
    "Apr" INTEGER,
    "May" INTEGER,
    "Jun" INTEGER,
    "Jul" INTEGER,
    "Aug" INTEGER,
    "Sep" INTEGER,
    "Oct" INTEGER,
    "Nov" INTEGER,
    "Dec" INTEGER,
    "material_cost_pu" INTEGER,
    "inv_hold_cost_pupm" INTEGER,
    "stockout_cost_pupm" INTEGER,
    "hiring_cost_pw" INTEGER,
    "firing_cost_pw" INTEGER,
    "labor_hrs_pu" INTEGER,
    "worker_cost_pm" INTEGER,
    "overtime_cost_phr" INTEGER,
    "outsourcing_cost_pu" INTEGER,
    "max_work_hrs_pwpm" INTEGER,
    "max_overtime_hrs_pwpm" INTEGER,
    "inventory_start" INTEGER,
    "inventory_end" INTEGER,
    "backlog_start" INTEGER,
    "backlog_end" INTEGER,
    "num_workers_start" INTEGER,
    "min_end_workers" INTEGER,
    "max_end_workers" INTEGER
);

-- CreateTable
CREATE TABLE "SNOP_ARCHIVE" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "scenario_id" TEXT,
    "description" TEXT,
    "CreatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "module" TEXT DEFAULT 'Sales & Operations Planning',
    "Status" TEXT,
    "customer" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "Jan" INTEGER,
    "Feb" INTEGER,
    "Mar" INTEGER,
    "Apr" INTEGER,
    "May" INTEGER,
    "Jun" INTEGER,
    "Jul" INTEGER,
    "Aug" INTEGER,
    "Sep" INTEGER,
    "Oct" INTEGER,
    "Nov" INTEGER,
    "Dec" INTEGER,
    "material_cost_pu" INTEGER,
    "inv_hold_cost_pupm" INTEGER,
    "stockout_cost_pupm" INTEGER,
    "hiring_cost_pw" INTEGER,
    "firing_cost_pw" INTEGER,
    "labor_hrs_pu" INTEGER,
    "worker_cost_pm" INTEGER,
    "overtime_cost_phr" INTEGER,
    "outsourcing_cost_pu" INTEGER,
    "max_work_hrs_pwpm" INTEGER,
    "max_overtime_hrs_pwpm" INTEGER,
    "inventory_start" INTEGER,
    "inventory_end" INTEGER,
    "backlog_start" INTEGER,
    "backlog_end" INTEGER,
    "num_workers_start" INTEGER,
    "min_end_workers" INTEGER,
    "max_end_workers" INTEGER
);

-- CreateTable
CREATE TABLE "TRUCK_SCENARIO" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "origin" TEXT,
    "destination" TEXT,
    "distance" TEXT,
    "backhaul" TEXT,
    "purchase_cost" INTEGER,
    "mileage_with_load" INTEGER,
    "mileage_without_load" INTEGER,
    "maintenance" INTEGER,
    "capacity" INTEGER,
    "annual_distance" INTEGER,
    "life" INTEGER,
    "diesel_price" INTEGER,
    "loading_unloading" INTEGER,
    "toll" INTEGER,
    "route_expenses" INTEGER,
    "driver_expenses" INTEGER,
    "tyres" INTEGER,
    "bucket" TEXT
);

-- CreateTable
CREATE TABLE "TRUCK_DETAILS" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "truck_type" TEXT,
    "truck_cost" INTEGER,
    "fab_cost" INTEGER,
    "total_cost" INTEGER,
    "resale_value" INTEGER,
    "net_total_cost" INTEGER,
    "life" INTEGER,
    "capacity" INTEGER,
    "dis_covered_per_yr" INTEGER,
    "dis_covered_with_load" INTEGER,
    "insurance_cost" INTEGER,
    "permits_for_truck" INTEGER,
    "emi_interest" INTEGER,
    "road_tax_truck" INTEGER,
    "reg_fc_renewal" INTEGER,
    "total_fixed_cost" INTEGER,
    "mileage_with_load" INTEGER,
    "mileage_without_load" INTEGER,
    "diesel_cost" INTEGER,
    "num_of_tyres" INTEGER,
    "tyres_cost" INTEGER,
    "oil_cost" INTEGER,
    "maintenance_cost" INTEGER,
    "loading_cost_per_trip" INTEGER,
    "loading_unloading_cost" INTEGER,
    "toll_expenses_inr" INTEGER,
    "toll_expenses" INTEGER,
    "rto_pc_check_post_inr" INTEGER,
    "rto_pc_check_post" INTEGER,
    "total_variable_cost" INTEGER,
    "driver_cleaner_salary" INTEGER,
    "driver_cleaner_batta" INTEGER,
    "gen_admin_exp" INTEGER,
    "total_admin_expenses" INTEGER,
    "return_sale" INTEGER,
    "re_operating_cost_yrs" INTEGER,
    "re_operating_cost_trip" INTEGER,
    "workable_freight_per_trip" INTEGER,
    "cost_per_bike" INTEGER,
    "dis_coverd_empty" INTEGER
);

-- CreateTable
CREATE TABLE "SNOP_INCIDENTS" (
    "id" int auto_increment PRIMARY KEY,
    "incident_id" TEXT,
    "status" TEXT,
    "priority" TEXT,
    "ticket_type" TEXT,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "SNOP_TRUCKOUTPUT" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "variable_cost_trip" INTEGER,
    "fixed_cost_trip" INTEGER,
    "admin_cost_per_trip" INTEGER,
    "return_sale_trip" INTEGER,
    "variable_cost" INTEGER,
    "fixed_cost" INTEGER,
    "admin_cost" INTEGER,
    "profit_unit" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Password_userId_key" ON "Password"("userId");
