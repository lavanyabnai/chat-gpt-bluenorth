import type { snop_incidents } from "@prisma/client";

import { prisma } from "~/db.server";

export function getIncidentsItems() {
  return prisma.snop_incidents.findMany({
    select: {
      incident_id: true,
      status: true,
      priority: true,
      ticket_type: true,
      description: true,
    },
  });
}
