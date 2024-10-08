import { useState, Fragment } from 'react'
import { kpiService_m } from '@/app/data/dashboard/supplyData'
import CardLayout from '@/components/snop/CardLayout'


export default function SupplyRoute() {
  const items = [
    {
      id: 1,
      name: 'Review',
      description:
        'Conduct periodic (month/quarter/year) performance review of key business KPIs',
      to: `review`,
    },
    {
      id: 2,
      name: 'Meeting',
      description:
        'Conduct daily/weekly data driven meetings and create plan of action ',
      to: `meeting`,
    },
  ]

  // const centericon = [
  //   { name: "Download as PDF", icon: DocumentArrowDownIcon },
  //   { name: "Email KPIs", icon: ShareIcon },
  //   { name: "Copy as Image", icon: ClipboardDocumentCheckIcon },
  // ];

  const [mode, setMode] = useState(items[0])

  const reviewTabs = ['Month', 'Quarter', 'Year']
  // eslint-disable-next-line no-unused-vars
  const [reviewIndex, setReviewIndex] = useState(0)

  const meetingTabs = ['Daily', 'Weekly']
  // eslint-disable-next-line no-unused-vars
  const [meetingIndex, setMeetingIndex] = useState(0)

  return (
    <>
      <div className="mt-1 rounded-lg bg-white shadow">

          <main>
            <CardLayout
              mode={mode.name === 'Review' ? reviewTabs : meetingTabs}
              tab={mode.name === 'Review' ? reviewIndex : meetingIndex}
              kpiData={kpiService_m}
            />
          </main>
      
      </div>
    </>
  )
}
