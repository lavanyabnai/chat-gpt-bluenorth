import React, { useState, useEffect } from 'react'

import {
  getScenarioItems,
  updateScenario,
  deleteScenarioById,
  duplicateScenario,
  archiveSenario
} from '@/app/actions'

import { columns } from '@/components/scenario/columns'
import { DataTable } from '@/components/scenario/data-table'

const navigation = [
  { id: 1, name: 'S&OP', to: '/snop/optimize' },
  { id: 2, name: 'Demand', to: '#' },
  { id: 3, name: 'Inventory', to: '#' },
  { id: 4, name: 'Logistics', to: '#' },
  { id: 5, name: 'Procurement', to: '#' }
]
// Empty dependency array ensures useEffect runs only once on component mount

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   const intent = formData.get("intent");
//   const scenarioId = formData.get("scenario_id");
//   console.log("Intent-->", intent);
//   console.log("scenario id-->", scenarioId);
//   console.log("Intent-->", intent);
//   console.log("scenario id-->", scenarioId);
//   if (intent === "optimize") {
//     await updateScenario(scenarioId, "Submitted");
//   }
//   if (intent === "delete") {
//     await deleteScenarioById(scenarioId);
//   }
//   if (intent === "duplicate") {
//     await duplicateScenario(scenarioId);
//   }
//    if (intent === "archive") {
//      await updateScenario(scenarioId, "Archived");
//      await archiveSenario(scenarioId);
//   }

//   return redirect(".");
// };

export default function SnopScenario() {
  const [scenarioData, setScenarioData] = React.useState([])

  useEffect(() => {
    const fetchData = async () => {
      const scenarioList = await getScenarioItems()
      setScenarioData(scenarioList)
    }

    fetchData()
  }, []);


  return (
    <>
      <div className=" ">
        <div className="flex items-center  justify-between">
          <h2 className="text-3xl font-bold  p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Sales & Operations Planning - List of Scenarios
          </h2>
        </div>

        <div className=" bg-white rounded-lg">
          <DataTable data={scenarioData} columns={columns} />
        </div>
      </div>
    </>
  )
}
