'use client';

import { useState, Fragment } from 'react'
import { columns } from '@/components/datatable/columns-inci'
import { DataTable } from '@/components/datatable/data-table-inci'
import taskData from '@/app/data/columndata/tasks.json'



// async function getTasks() {
//   const data = await taskData
//   return data
// }

// const tasks = await getTasks()
// export const loader = async () => {
  
//   const invData = tasks.filter(
//     (task) => task.label === 'Inventory'
//       // && task.severity === 'High'
//   )
//   return json({ tasks, invData })
// }

export default function TaskPage() {
  // const { tasks, invData } = useLoaderData()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="m-2">
        <div className="w-100  my-2 flex  justify-between p-4 rounded-lg border bg-white">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Nerve Center - List of Events
          </h2>

          <div className="flex items-center justify-end"></div>
        </div>

        <div className="m-4 bg-white rounded-lg">
          <DataTable data={taskData} columns={columns} />
        </div>
      </div>
    </>
  );
}
