import React, { useEffect, useState } from 'react'
import { createTruck, getTruckOutputById, getTruckInput } from '@/app/actions'


import SnopTruckFrom from '@/components/cleansheet/TruckForm-chat'

function convertToNumbers(obj) {
  const numericFields = [
    'purchase_cost',
    'mileage_with_load',
    'mileage_without_load',
    'maintenance',
    'capacity',
    'annual_distance',
    'life',
    'diesel_price',
    'loading_unloading',
    'toll',
    'route_expenses',
    'driver_expenses',
    'tyres'
  ]

  const converted = { ...obj }

  numericFields.forEach(field => {
    if (converted[field]) {
      converted[field] = parseFloat(converted[field])
    }
  })

  return converted
}

export default function SnopTruck() {
  const [snopTruck, setSnopTruck] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { snopTruck: truckData, truckOutputData } = await loadTruckData()
        setSnopTruck(truckData)
      } catch (error) {
        console.error('Error fetching truck data:', error)
        // Handle error
      }
    }

    fetchData()
  }, [])

  const loadTruckData = async () => {
    const snopTruck = await getTruckInput()
    const truckOutputData = await getTruckOutputById()
    return { snopTruck, truckOutputData }
  }

  // const handleFormSubmit = async formData => {
  //   try {
  //     const updates = convertToNumbers(Object.fromEntries(formData))
  //     await createTruck(updates)
  //     // Handle success
  //   } catch (error) {
  //     console.error('Error creating truck:', error)
  //     // Handle error
  //   }
  // }

  if (!snopTruck) {
    // Handle loading state
    return <div>Loading...</div>
  }

  return <SnopTruckFrom truckData={snopTruck} />
}
