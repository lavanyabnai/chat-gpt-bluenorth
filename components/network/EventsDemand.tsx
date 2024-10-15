import { columns } from '@/components/datatable/columns-inci'
import { DataTable } from '@/components/datatable/data-table-inci'
import taskData from '@/app/data/columndata/tasks.json'

export default function EventsDemand() {
  return (
    <>
      <div className="m-2">
        <div className="flex items-center  justify-between">
          <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Nerve Center - List of Exception
          </h2>
        </div>

        <div className="m-4 bg-white rounded-lg">
          <DataTable data={taskData} columns={columns} />
        </div>
      </div>
    </>
  );
}
