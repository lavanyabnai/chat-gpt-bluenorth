import { relations } from "drizzle-orm/relations";
import { facilities, demandCoverageByDistances, distanceCoverageByDemands, vehicleTypes, paths, customers, demandFulfillment, products, locations, demand, periods, groups, groupCustomers, groupGroups, groupSites, groupSuppliers, suppliers, sourcing, accounts, transactions, categories, unitConversions, assetsConstraints, bom, bomByproducts, bomComponents, cashAccounts, facilityExpenses, linearRanges, indicatorConstraints, units, processingCosts, productFlows, productStorages, production, productionNo, saleBatches, siteStateChanges, locationGroups, locationGroupLocations, periodGroups, periodGroupPeriods, productGroups, productGroupProducts, supplierProducts } from "./schema";

export const demandCoverageByDistancesRelations = relations(demandCoverageByDistances, ({one}) => ({
	facility: one(facilities, {
		fields: [demandCoverageByDistances.siteId],
		references: [facilities.id]
	}),
}));

export const facilitiesRelations = relations(facilities, ({one, many}) => ({
	demandCoverageByDistances: many(demandCoverageByDistances),
	distanceCoverageByDemands: many(distanceCoverageByDemands),
	groupSites: many(groupSites),
	location: one(locations, {
		fields: [facilities.locationId],
		references: [locations.id]
	}),
	cashAccounts: many(cashAccounts),
	facilityExpenses: many(facilityExpenses),
	processingCosts: many(processingCosts),
	productFlows_sourceId: many(productFlows, {
		relationName: "productFlows_sourceId_facilities_id"
	}),
	productFlows_destinationId: many(productFlows, {
		relationName: "productFlows_destinationId_facilities_id"
	}),
	productStorages: many(productStorages),
	productions: many(production),
	productionNos: many(productionNo),
	saleBatches: many(saleBatches),
	siteStateChanges: many(siteStateChanges),
}));

export const distanceCoverageByDemandsRelations = relations(distanceCoverageByDemands, ({one}) => ({
	facility: one(facilities, {
		fields: [distanceCoverageByDemands.siteId],
		references: [facilities.id]
	}),
}));

export const pathsRelations = relations(paths, ({one}) => ({
	vehicleType: one(vehicleTypes, {
		fields: [paths.vehicleTypeId],
		references: [vehicleTypes.id]
	}),
}));

export const vehicleTypesRelations = relations(vehicleTypes, ({one, many}) => ({
	paths: many(paths),
	unit_capacityUnit: one(units, {
		fields: [vehicleTypes.capacityUnit],
		references: [units.name],
		relationName: "vehicleTypes_capacityUnit_units_name"
	}),
	unit_speedUnit: one(units, {
		fields: [vehicleTypes.speedUnit],
		references: [units.name],
		relationName: "vehicleTypes_speedUnit_units_name"
	}),
	productFlows: many(productFlows),
}));

export const demandFulfillmentRelations = relations(demandFulfillment, ({one}) => ({
	customer: one(customers, {
		fields: [demandFulfillment.customerId],
		references: [customers.id]
	}),
	product: one(products, {
		fields: [demandFulfillment.productId],
		references: [products.id]
	}),
}));

export const customersRelations = relations(customers, ({one, many}) => ({
	demandFulfillments: many(demandFulfillment),
	location: one(locations, {
		fields: [customers.locationId],
		references: [locations.id]
	}),
	demands: many(demand),
	groupCustomers: many(groupCustomers),
}));

export const productsRelations = relations(products, ({many}) => ({
	demandFulfillments: many(demandFulfillment),
	demands: many(demand),
	sourcings: many(sourcing),
	unitConversions: many(unitConversions),
	boms: many(bom),
	bomByproducts: many(bomByproducts),
	bomComponents: many(bomComponents),
	processingCosts: many(processingCosts),
	productFlows: many(productFlows),
	productStorages: many(productStorages),
	productions: many(production),
	productionNos: many(productionNo),
	saleBatches: many(saleBatches),
	productGroupProducts: many(productGroupProducts),
	supplierProducts: many(supplierProducts),
}));

export const locationsRelations = relations(locations, ({many}) => ({
	customers: many(customers),
	suppliers: many(suppliers),
	facilities: many(facilities),
	locationGroupLocations: many(locationGroupLocations),
}));

export const demandRelations = relations(demand, ({one}) => ({
	customer: one(customers, {
		fields: [demand.customerId],
		references: [customers.id]
	}),
	product: one(products, {
		fields: [demand.productId],
		references: [products.id]
	}),
	period: one(periods, {
		fields: [demand.timePeriodId],
		references: [periods.id]
	}),
}));

export const periodsRelations = relations(periods, ({many}) => ({
	demands: many(demand),
	sourcings: many(sourcing),
	facilityExpenses: many(facilityExpenses),
	processingCosts: many(processingCosts),
	productFlows: many(productFlows),
	productStorages: many(productStorages),
	productions: many(production),
	productionNos: many(productionNo),
	saleBatches: many(saleBatches),
	siteStateChanges: many(siteStateChanges),
	periodGroupPeriods: many(periodGroupPeriods),
}));

export const groupCustomersRelations = relations(groupCustomers, ({one}) => ({
	group: one(groups, {
		fields: [groupCustomers.groupId],
		references: [groups.id]
	}),
	customer: one(customers, {
		fields: [groupCustomers.customerId],
		references: [customers.id]
	}),
}));

export const groupsRelations = relations(groups, ({many}) => ({
	groupCustomers: many(groupCustomers),
	groupGroups_parentGroupId: many(groupGroups, {
		relationName: "groupGroups_parentGroupId_groups_id"
	}),
	groupGroups_childGroupId: many(groupGroups, {
		relationName: "groupGroups_childGroupId_groups_id"
	}),
	groupSites: many(groupSites),
	groupSuppliers: many(groupSuppliers),
	assetsConstraints: many(assetsConstraints),
}));

export const groupGroupsRelations = relations(groupGroups, ({one}) => ({
	group_parentGroupId: one(groups, {
		fields: [groupGroups.parentGroupId],
		references: [groups.id],
		relationName: "groupGroups_parentGroupId_groups_id"
	}),
	group_childGroupId: one(groups, {
		fields: [groupGroups.childGroupId],
		references: [groups.id],
		relationName: "groupGroups_childGroupId_groups_id"
	}),
}));

export const groupSitesRelations = relations(groupSites, ({one}) => ({
	group: one(groups, {
		fields: [groupSites.groupId],
		references: [groups.id]
	}),
	facility: one(facilities, {
		fields: [groupSites.siteId],
		references: [facilities.id]
	}),
}));

export const groupSuppliersRelations = relations(groupSuppliers, ({one}) => ({
	group: one(groups, {
		fields: [groupSuppliers.groupId],
		references: [groups.id]
	}),
	supplier: one(suppliers, {
		fields: [groupSuppliers.supplierId],
		references: [suppliers.id]
	}),
}));

export const suppliersRelations = relations(suppliers, ({one, many}) => ({
	groupSuppliers: many(groupSuppliers),
	location: one(locations, {
		fields: [suppliers.locationId],
		references: [locations.id]
	}),
	supplierProducts: many(supplierProducts),
}));

export const sourcingRelations = relations(sourcing, ({one}) => ({
	product: one(products, {
		fields: [sourcing.productId],
		references: [products.id]
	}),
	period: one(periods, {
		fields: [sourcing.timePeriodId],
		references: [periods.id]
	}),
}));

export const transactionsRelations = relations(transactions, ({one}) => ({
	account: one(accounts, {
		fields: [transactions.accountId],
		references: [accounts.id]
	}),
	category: one(categories, {
		fields: [transactions.categoryId],
		references: [categories.id]
	}),
}));

export const accountsRelations = relations(accounts, ({many}) => ({
	transactions: many(transactions),
}));

export const categoriesRelations = relations(categories, ({many}) => ({
	transactions: many(transactions),
}));

export const unitConversionsRelations = relations(unitConversions, ({one}) => ({
	product: one(products, {
		fields: [unitConversions.productId],
		references: [products.id]
	}),
}));

export const assetsConstraintsRelations = relations(assetsConstraints, ({one}) => ({
	group: one(groups, {
		fields: [assetsConstraints.groupId],
		references: [groups.id]
	}),
}));

export const bomRelations = relations(bom, ({one, many}) => ({
	product: one(products, {
		fields: [bom.endProductId],
		references: [products.id]
	}),
	bomByproducts: many(bomByproducts),
	bomComponents: many(bomComponents),
	productionNos: many(productionNo),
}));

export const bomByproductsRelations = relations(bomByproducts, ({one}) => ({
	bom: one(bom, {
		fields: [bomByproducts.bomId],
		references: [bom.id]
	}),
	product: one(products, {
		fields: [bomByproducts.productId],
		references: [products.id]
	}),
}));

export const bomComponentsRelations = relations(bomComponents, ({one}) => ({
	bom: one(bom, {
		fields: [bomComponents.bomId],
		references: [bom.id]
	}),
	product: one(products, {
		fields: [bomComponents.productId],
		references: [products.id]
	}),
}));

export const cashAccountsRelations = relations(cashAccounts, ({one}) => ({
	facility: one(facilities, {
		fields: [cashAccounts.facilityId],
		references: [facilities.id]
	}),
}));

export const facilityExpensesRelations = relations(facilityExpenses, ({one}) => ({
	facility: one(facilities, {
		fields: [facilityExpenses.facilityId],
		references: [facilities.id]
	}),
	period: one(periods, {
		fields: [facilityExpenses.timePeriodId],
		references: [periods.id]
	}),
}));

export const indicatorConstraintsRelations = relations(indicatorConstraints, ({one}) => ({
	linearRange_ifConditionId: one(linearRanges, {
		fields: [indicatorConstraints.ifConditionId],
		references: [linearRanges.id],
		relationName: "indicatorConstraints_ifConditionId_linearRanges_id"
	}),
	linearRange_thenConditionId: one(linearRanges, {
		fields: [indicatorConstraints.thenConditionId],
		references: [linearRanges.id],
		relationName: "indicatorConstraints_thenConditionId_linearRanges_id"
	}),
}));

export const linearRangesRelations = relations(linearRanges, ({many}) => ({
	indicatorConstraints_ifConditionId: many(indicatorConstraints, {
		relationName: "indicatorConstraints_ifConditionId_linearRanges_id"
	}),
	indicatorConstraints_thenConditionId: many(indicatorConstraints, {
		relationName: "indicatorConstraints_thenConditionId_linearRanges_id"
	}),
}));

export const unitsRelations = relations(units, ({many}) => ({
	vehicleTypes_capacityUnit: many(vehicleTypes, {
		relationName: "vehicleTypes_capacityUnit_units_name"
	}),
	vehicleTypes_speedUnit: many(vehicleTypes, {
		relationName: "vehicleTypes_speedUnit_units_name"
	}),
}));

export const processingCostsRelations = relations(processingCosts, ({one}) => ({
	facility: one(facilities, {
		fields: [processingCosts.facilityId],
		references: [facilities.id]
	}),
	product: one(products, {
		fields: [processingCosts.productId],
		references: [products.id]
	}),
	period: one(periods, {
		fields: [processingCosts.timePeriodId],
		references: [periods.id]
	}),
}));

export const productFlowsRelations = relations(productFlows, ({one}) => ({
	facility_sourceId: one(facilities, {
		fields: [productFlows.sourceId],
		references: [facilities.id],
		relationName: "productFlows_sourceId_facilities_id"
	}),
	facility_destinationId: one(facilities, {
		fields: [productFlows.destinationId],
		references: [facilities.id],
		relationName: "productFlows_destinationId_facilities_id"
	}),
	vehicleType: one(vehicleTypes, {
		fields: [productFlows.vehicleTypeId],
		references: [vehicleTypes.id]
	}),
	product: one(products, {
		fields: [productFlows.productId],
		references: [products.id]
	}),
	period: one(periods, {
		fields: [productFlows.timePeriodId],
		references: [periods.id]
	}),
}));

export const productStoragesRelations = relations(productStorages, ({one}) => ({
	facility: one(facilities, {
		fields: [productStorages.facilityId],
		references: [facilities.id]
	}),
	product: one(products, {
		fields: [productStorages.productId],
		references: [products.id]
	}),
	period: one(periods, {
		fields: [productStorages.timePeriodId],
		references: [periods.id]
	}),
}));

export const productionRelations = relations(production, ({one}) => ({
	facility: one(facilities, {
		fields: [production.siteId],
		references: [facilities.id]
	}),
	product: one(products, {
		fields: [production.productId],
		references: [products.id]
	}),
	period: one(periods, {
		fields: [production.timePeriodId],
		references: [periods.id]
	}),
}));

export const productionNoRelations = relations(productionNo, ({one}) => ({
	facility: one(facilities, {
		fields: [productionNo.siteId],
		references: [facilities.id]
	}),
	product: one(products, {
		fields: [productionNo.productId],
		references: [products.id]
	}),
	bom: one(bom, {
		fields: [productionNo.bomId],
		references: [bom.id]
	}),
	period: one(periods, {
		fields: [productionNo.timePeriodId],
		references: [periods.id]
	}),
}));

export const saleBatchesRelations = relations(saleBatches, ({one}) => ({
	facility: one(facilities, {
		fields: [saleBatches.sourceId],
		references: [facilities.id]
	}),
	product: one(products, {
		fields: [saleBatches.productId],
		references: [products.id]
	}),
	period: one(periods, {
		fields: [saleBatches.timePeriodId],
		references: [periods.id]
	}),
}));

export const siteStateChangesRelations = relations(siteStateChanges, ({one}) => ({
	facility: one(facilities, {
		fields: [siteStateChanges.siteId],
		references: [facilities.id]
	}),
	period: one(periods, {
		fields: [siteStateChanges.timePeriodId],
		references: [periods.id]
	}),
}));

export const locationGroupLocationsRelations = relations(locationGroupLocations, ({one}) => ({
	locationGroup: one(locationGroups, {
		fields: [locationGroupLocations.locationGroupId],
		references: [locationGroups.id]
	}),
	location: one(locations, {
		fields: [locationGroupLocations.locationId],
		references: [locations.id]
	}),
}));

export const locationGroupsRelations = relations(locationGroups, ({many}) => ({
	locationGroupLocations: many(locationGroupLocations),
}));

export const periodGroupPeriodsRelations = relations(periodGroupPeriods, ({one}) => ({
	periodGroup: one(periodGroups, {
		fields: [periodGroupPeriods.periodGroupId],
		references: [periodGroups.id]
	}),
	period: one(periods, {
		fields: [periodGroupPeriods.periodId],
		references: [periods.id]
	}),
}));

export const periodGroupsRelations = relations(periodGroups, ({many}) => ({
	periodGroupPeriods: many(periodGroupPeriods),
}));

export const productGroupProductsRelations = relations(productGroupProducts, ({one}) => ({
	productGroup: one(productGroups, {
		fields: [productGroupProducts.productGroupId],
		references: [productGroups.id]
	}),
	product: one(products, {
		fields: [productGroupProducts.productId],
		references: [products.id]
	}),
}));

export const productGroupsRelations = relations(productGroups, ({many}) => ({
	productGroupProducts: many(productGroupProducts),
}));

export const supplierProductsRelations = relations(supplierProducts, ({one}) => ({
	supplier: one(suppliers, {
		fields: [supplierProducts.supplierId],
		references: [suppliers.id]
	}),
	product: one(products, {
		fields: [supplierProducts.productId],
		references: [products.id]
	}),
}));