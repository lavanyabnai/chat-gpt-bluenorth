import type {
  truck_scenario,
  truck_details,
  snop_truckoutput,
} from "@prisma/client";

import { prisma } from "~/db.server";

export function getTruckItems() {
  return prisma.truck_scenario.findMany({
    select: {
      origin: true,
      destination: true,
      distance: true,
      backhaul: true,
    },
  });
}

export function createTruck(truckData) {
  return prisma.truck_scenario.create({
    data: truckData,
  });
}

export async function getTruckById(bucket) {
  return await prisma.truck_scenario.findUnique({
    where: {
      bucket: bucket,
    },
  });
}

export function getTruckDetailsItems() {
  return prisma.truck_details.findMany({
    select: {
      truck_type: true,
      truck_cost: true,
      fab_cost: true,
      total_cost: true,
    },
  });
}

export function createTruckDetails(truckdetailData) {
  return prisma.truck_details.create({
    data: truckdetailData,
  });
}

export function getTruckOutputById() {
  return prisma.snop_truckoutput.findMany({
    select: {
      variable_cost_trip: true,
      fixed_cost_trip: true,
      admin_cost_per_trip: true,
      return_sale_trip: true,
      variable_cost: true,
      fixed_cost: true,
      admin_cost: true,
      profit_unit: true,
    },
  });
}
