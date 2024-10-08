import type { PlanInput } from "@prisma/client";
import type {truck_scenario } from "@prisma/client";

import prisma from "../lib/prisma";

export function getInput() {
    
  return prisma.PlanInput.findFirst();
  
}

export function getTruckInput() {
  return prisma.truck_scenario.findFirst();
}

