"use client";

import SnopScenarioFrom from '@/components/inv/InventoryForm';
// import { getTruckInput } from '~/models/input.server';
// import { createTruck } from '~/models/truck.server';

// function convertToNumbers(obj) {
//   const numericFields = [
//     'purchase_cost',
//     'mileage_with_load',
//     'mileage_without_load',
//     'maintenance',
//     'capacity',
//     'annual_distance',
//     'life',
//     'diesel_price',
//     'loading_unloading',
//     'toll',
//     'route_expenses',
//     'driver_expenses',
//     'tyres'
//   ];

//   const converted = { ...obj };

//   numericFields.forEach((field) => {
//     if (converted[field]) {
//       converted[field] = parseFloat(converted[field]);
//     }
//   });

//   return converted;
// }
// export const loader = async () => {
//   const snopTruck = await getTruckInput();
//   return json({ snopTruck });
// };

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const updates = convertToNumbers(Object.fromEntries(formData));
//   await createTruck(updates);
// };

export default function SnopTruck() {
//   const { snopTruck } = useLoaderData();

  return (
    <div className="m-2">
      <div className="w-100 my-2 flex  justify-between p-4 rounded-lg border bg-white">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
          Availability Analytics
        </h2>

        <div className="flex items-center justify-end"></div>
      </div>
      <SnopScenarioFrom />
    </div>
  );
}
