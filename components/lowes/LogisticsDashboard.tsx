import { kpiService_m } from '~/data/dashboard/logisticsData'


export default function LogisticsDashboard() {
  return (
    <>
      <div className="mt-1 rounded-lg bg-white shadow">
        <main>
          <ul className="mx-4 my-4 grid grid-cols-2 gap-4">
            {kpiService_m.map((kpi) => (
              <li
                key={kpi.Name}
                className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10"
              >
                <div className="relative flex flex-1 flex-col py-2 pl-3">
                  <div className="flex items-baseline gap-2">
                    <div>
                      <h3 className="text-md mt-6 font-medium text-gray-900">
                        {kpi.Name}
                      </h3>
                    </div>
                    <h2 className="text-sm mt-6 font-medium text-gray-600">
                      ({kpi.sub})
                    </h2>
                  </div>
                  <div>{kpi.container}</div>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  )
}
