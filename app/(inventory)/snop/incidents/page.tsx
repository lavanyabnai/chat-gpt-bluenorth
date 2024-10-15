'use client';
import { useState, Fragment } from 'react';
import { columns } from '@/components/datatable/columns-inci';
import { DataTable } from '@/components/datatable/data-table-inci';
import taskData from '@/app/data/columndata/tasks.json';
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon
} from '@heroicons/react/20/solid';
import { Dialog, Transition, Disclosure } from '@headlessui/react';

const filters = [
  {
    id: 'color',
    name: 'Color',

    options: [
      { value: 'white', label: 'White', checked: false, number: 6 },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false }
    ]
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false }
    ]
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true }
    ]
  }
];

export default function TaskPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="m-2">
        <div className="flex items-center  justify-between">
          <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Nerve Center - List of Exception
          </h2>
        </div>
        <button
          type="button"
          className="top-12 fixed right-0 flex cursor-pointer items-center 
                rounded-l-lg border bg-white px-2 py-4 text-sm font-semibold text-gray-900 shadow-xl hover:bg-rose-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          onClick={() => setOpen(!open)}
        >
          <AdjustmentsHorizontalIcon
            className="h-5 w-5 items-center"
            aria-hidden="true"
          />
        </button>
        <div className="m-4 bg-white rounded-lg">
          <DataTable data={taskData} columns={columns} />
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-[20rem]">
                    <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="bg-blue-900 px-4 py-2">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="py-1 text-base font-semibold leading-6 text-white">
                              Grid Filter
                            </Dialog.Title>

                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="rounded-md bg-blue-900 text-indigo-200 hover:text-white"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="relative mt-1 flex-1 bg-white px-2 ">
                          {/* Your content */}
                          <form className="p-4 ">
                            <h3 className="sr-only">Categories</h3>

                            {filters.map((section) => (
                              <Disclosure
                                as="div"
                                key={section.id}
                                className="border-b border-gray-200 py-4"
                                defaultOpen
                              >
                                {({ open }) => (
                                  <>
                                    <h3 className="-my-3 flow-root">
                                      <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                        <span className="font-medium text-gray-900">
                                          {section.name}
                                        </span>
                                        <span className="ml-6 flex items-center">
                                          {open ? (
                                            <MinusIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          ) : (
                                            <PlusIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          )}
                                        </span>
                                      </Disclosure.Button>
                                    </h3>
                                    <Disclosure.Panel className="pt-6">
                                      <div className="space-y-4">
                                        {section.options.map(
                                          (option, optionIdx) => (
                                            <div
                                              key={option.value}
                                              className="flex items-center justify-between"
                                            >
                                              <div>
                                                <input
                                                  id={`filter-${section.id}-${optionIdx}`}
                                                  name={`${section.id}[]`}
                                                  defaultValue={option.value}
                                                  type="checkbox"
                                                  defaultChecked={
                                                    option.checked
                                                  }
                                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 "
                                                />
                                                <label
                                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                                  className="ml-3 text-sm text-gray-600 "
                                                >
                                                  {option.label}
                                                </label>
                                              </div>

                                              <label
                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                className="inline-flex items-center rounded bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                                              >
                                                {option.number}
                                              </label>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            ))}
                          </form>
                        </div>
                      </div>

                      <div className="flex justify-center  py-2">
                        <button
                          type="button"
                          className="text-md rounded-md border bg-indigo-600 px-8 py-2 font-semibold text-white shadow-sm"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="text-md ml-4 inline-flex justify-center rounded-md bg-rose-500 px-8 py-2 font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
