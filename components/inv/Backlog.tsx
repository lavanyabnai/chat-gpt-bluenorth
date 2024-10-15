import React from 'react'
import { AgCharts } from 'ag-charts-react'
import 'ag-charts-enterprise'

function getBar() {
  const data = [
    {
      quarter: 'Jan 17',
      cc: 47,
      demand: 0,
      distri: 0,
      fgoos: 0,
      fgqty: 0,
      inlicens: 0,
      longterm: 0,
      mfgprocess: 0,
      materialAva: 16,
      
    },
    {
      quarter: 'Feb 17',
      cc: 47,
      demand: 0,
      distri: 0,
      fgoos: 0,
      fgqty: 0,
      inlicens: 0,
      longterm: 0,
      mfgprocess: 0,
      materialAva: 16,
     
    },
    {
      quarter: 'Mar 17',
      cc: 47,
      demand: 0,
      distri: 0,
      fgoos: 0,
      fgqty: 0,
      inlicens: 0,
      longterm: 0,
      mfgprocess: 0,
      materialAva: 16,
    
    },
    {
      quarter: 'Apr 17',
      cc: 47,
      demand: 0,
      distri: 0,
      fgoos: 0,
      fgqty: 0,
      inlicens: 0,
      longterm: 0,
      mfgprocess: 0,
      materialAva: 16,
    
    },
    {
      quarter: 'May 17',
      cc: 47,
      demand: 0,
      distri: 0,
      fgoos: 0,
      fgqty: 0,
      inlicens: 0,
      longterm: 0,
      mfgprocess: 0,
      materialAva: 16,
    
    },
    {
      quarter: 'Jun 17',
      cc: 47,
      demand: 10,
      distri: 20,
      fgoos: 5,
      fgqty: 3,
      inlicens: 1,
      longterm: 5,
      mfgprocess: 2,
      materialAva: 16,
     
    },
  ]



  return data
}

export default function NetworkInventory() {
  const data = getBar()

  const seriesData = Object.keys(data[0]) // Get all keys of the first object
    .filter((key) => key !== 'quarter') // Exclude 'quarter' key
    .map((key) => ({
      type: 'bar',
      xKey: 'quarter',
      yKey: key,
      yName: key, // Assuming yName should be the same as yKey
      stacked: true,
      label: {
        enabled: true, // Set to true or false based on your requirement
      },
    }))

  const stackBar = {
    // theme: 'ag-polychroma',
    data: data,
    series: seriesData,
  }

  return (
    <>
     
        <div className=" text-blue-900 rounded-b-lg border">
          <div className="space-y-1 p-2 ">
            {/* <CardTitle className="text-2xl text-center">
              Product Lifecycle and Inv Distribution
            </CardTitle> */}
            {/* <div className="border-b" /> */}
          </div>
          <div className="h-[450px]">
            <AgCharts options={stackBar} />
          </div>
        </div>
   
    </>
  )
}