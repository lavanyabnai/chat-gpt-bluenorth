import type { SnopScenario, snop_archive } from "@prisma/client";

import { prisma } from "~/db.server";


export function getSubmittedoptimize() {
  return prisma.snopScenario.findMany({
    where: {
      Status: "Submitted",
    },
    select: {
      scenario_id: true,
    },
  });
}