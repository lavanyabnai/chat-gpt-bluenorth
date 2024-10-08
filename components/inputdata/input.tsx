import React from 'react'
import { useRouter } from 'next/router'
import { getInput } from '@/app/actions'
// import { getInput } from '@/models/input.server'
import { createScenario } from '@/models/scenario.server'
import { SnopForm } from '@/components/inputdata/SnopForm'
import { cache } from 'react'
function convertToNumbers(obj) {
  const numericFields = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'material_cost_pu',
    'inv_hold_cost_pupm',
    'stockout_cost_pupm',
    'hiring_cost_pw',
    'firing_cost_pw',
    'worker_cost_pm',
    'overtime_cost_phr',
    'outsourcing_cost_pu',
    'max_work_hrs_pwpm',
    'max_overtime_hrs_pwpm',
    'inventory_start',
    'inventory_end',
    'backlog_start',
    'backlog_end',
    'num_workers_start',
    'min_end_workers',
    'max_end_workers',
    'labor_hrs_pu'
  ]
  const converted = { ...obj }
  numericFields.forEach(field => {
    if (converted[field]) {
      converted[field] = parseFloat(converted[field])
    }
  })

  return converted
}

// const loadChats = cache(async (userId?: string) => {
//   return await getInput(userId)
// })
// export async function getServerSideProps() {
//   const snopInput = await getInput()
//   return {
//     props: {
//       snopInput
//     }
//   }
// }

export function SnopInput() {
  // const snopInput = await loadChats(userId)

  return <SnopForm getInput={getInput} />
}
