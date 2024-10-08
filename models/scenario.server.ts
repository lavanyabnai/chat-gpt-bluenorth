import type { SnopScenario, snop_archive } from "@prisma/client";

import prisma  from "@/lib/prisma";

export async function getScenarioItems() {
  const scenarios = await prisma.snopScenario.findMany({
    select: {
      scenario_id: true,
      description: true,
      CreatedAt: true,
      UpdatedAt: true,
      module: true,
      Status: true
    }
  })
  return scenarios
}



// export function getScenarioItems() {
//   return prisma.snopScenario.findMany({
//     select: {
//       scenario_id: true,
//       description: true,
//       CreatedAt: true,
//       UpdatedAt: true,
//       module: true,
//       Status: true,
//     },
//   });
// }

// export function getScenarioArchiveItems() {
//   return prisma.snop_archive.findMany({
//     select: {
//       scenario_id: true,
//       description: true,
//       CreatedAt: true,
//       UpdatedAt: true,
//       module: true,
//       Status: true,
//     },
//   });
// }

// export function createScenario(inputData) {
//   return prisma.snopScenario.create({
//     data: inputData,
//   });
// }

// export async function updateScenario(scenario_id, status) {
//   return await prisma.snopScenario.updateMany({
//     where: {
//       scenario_id: scenario_id, // Assuming scenario_id is the unique identifier or primary key
//     },
//     data: {
//       Status: status, // Set the status to the value passed to the function
//     },
//   });
// }

// export async function getScenarioById(scenario_id) {
//   return await prisma.snopScenario.findUnique({
//     where: {
//       id:1,
//       scenario_id: scenario_id, // Assuming scenario_id is the unique identifier or primary key
//     },
//   });
// }

// export async function deleteScenarioById(scenario_id) {
//   return await prisma.snopScenario.delete({
//     where: {
//       scenario_id: scenario_id, // Assuming scenario_id is the unique identifier or primary key
//     },
//   });
// }

// export async function duplicateScenario(scenarioId) {
//   // Step 1: Fetch the existing scenario data
//   const existingScenario = await prisma.snopScenario.findUnique({
//     where: {
//       scenario_id: scenarioId, // Assuming `scenario_id` is the unique identifier
//     },
//   });

//   if (!existingScenario) {
//     throw new Error("Scenario not found");
//   }

//   // Step 2: Modify the data for the new scenario
//   // Remove or modify properties that must be unique for the new row
//   const { id, scenario_id, CreatedAt, UpdatedAt, Status, ...restOfData } =
//     existingScenario;

//   // Step 3: Insert the new scenario as a new row
//   const newScenario = await prisma.snopScenario.create({
//     data: {
//       ...restOfData,
//       Status: "Open",
//     },
//   });

//   return newScenario;
// }

// export async function archiveSenario(scenarioId) {
//   // Delete the existing scenario
//   // const deletedScenario = await deleteScenarioById(scenarioId);

//   // Find the existing scenario to duplicate
//   const existingScenario = await prisma.snopScenario.findMany({
//     where: {
//       scenario_id: scenarioId,
//     },
//   });

//   if (!existingScenario) {
//     throw new Error("Scenario not found");
//   }

//   // Copy the scenario to archiveScenario
//   return await prisma.snop_archive.create({
//     data: {
//       ...existingScenario, // Copy all fields from existingScenario
//       // Optionally, you can exclude 'id' field if it's autoincrement
//       id: undefined,
//     },
//   });
// }
