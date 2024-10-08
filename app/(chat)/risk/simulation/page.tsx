'use client';
import { columns } from '@/components/risk/columns';
import { DataTable } from '@/components/risk/data-table';
import taskData from '@/app/data/riskData/simulation/tasks.json';

export default function RiskSimulation() {
  return (
    <div className="m-2">
      <div className="w-100  my-2 flex  justify-between p-4 rounded-lg border bg-white">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
          Simulation
        </h2>

        <div className="flex items-center justify-end"></div>
      </div>
      <div className="bg-white shadow-md rounded-b-lg p-2 border">
        <DataTable data={taskData} columns={columns} />
      </div>
    </div>
  );
}