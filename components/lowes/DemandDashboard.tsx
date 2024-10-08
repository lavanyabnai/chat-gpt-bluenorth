import { kpiService_m } from '~/data/dashboard/demandplanningData'


export default function DemandDashboard() {


  return (
    <>
      <div className="mt-1 rounded-lg bg-white shadow">
        <main>
          <ul className="mx-4 my-4 grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2">
            {/* grid-row-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 */}
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
                      <h1 className="font-display text-d-h3 mb-3 text-4xl font-bold text-black">
                        {kpi.Value}
                      </h1>
                    </div>
                  </div>
                  <div>{kpi.container}</div>
                </div>
                <div></div>
              </li>
            ))}
          </ul>
         
        </main>
      </div>
    </>
  )
}
