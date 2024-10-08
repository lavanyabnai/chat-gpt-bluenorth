import React, { useCallback, useEffect, useState, useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react' // AG Grid Component
// import { Form, useFetcher } from '@remix-run/react'
// Optional Theme applied to the grid

import 'ag-grid-enterprise' // Required for AG Grid Enterprise features
 const level = [
   // Best Buy - New York data
   {
     id: 1,
     customer: 'Best Buy',
     site: 'New York',
     measures: 'Target Plan (Revenue)',
     '2008Q1': 83764,
     '2008Q2': 187563,
     '2008Q3': 136162
   },
   {
     id: 2,
     customer: 'Best Buy',
     site: 'New York',
     measures: 'Financial Forecast (Revenue)',
     '2008Q1': 89303,
     '2008Q2': 181406,
     '2008Q3': 156720
   },
   {
     id: 3,
     customer: 'Best Buy',
     site: 'New York',
     measures: 'POS (Revenue)',
     '2008Q1': 57466,
     '2008Q2': 100277,
     '2008Q3': 0
   },
   {
     id: 4,
     customer: 'Best Buy',
     site: 'New York',
     measures: 'Achievement Rate',
     '2008Q1': 64.42,
     '2008Q2': 58.31,
     '2008Q3': 0
   },
   {
     id: 5,
     customer: 'Best Buy',
     site: 'New York',
     measures: 'Weighted Sales Price',
     '2008Q1': 487,
     '2008Q2': 735,
     '2008Q3': 461
   },

   // San Jose data
   {
     id: 6,
     customer: 'San Jose',
     site: 'California',
     measures: 'Target Plan (Revenue)',
     '2008Q1': 83936,
     '2008Q2': 182266,
     '2008Q3': 154791
   },
   {
     id: 7,
     customer: 'San Jose',
     site: 'California',
     measures: 'Financial Forecast (Revenue)',
     '2008Q1': 89468,
     '2008Q2': 181177,
     '2008Q3': 157509
   },
   {
     id: 8,
     customer: 'San Jose',
     site: 'California',
     measures: 'POS (Revenue)',
     '2008Q1': 57840,
     '2008Q2': 99282,
     '2008Q3': 0
   },
   {
     id: 9,
     customer: 'San Jose',
     site: 'California',
     measures: 'Achievement Rate',
     '2008Q1': 64.36,
     '2008Q2': 57.93,
     '2008Q3': 0
   },
   {
     id: 10,
     customer: 'San Jose',
     site: 'California',
     measures: 'Weighted Sales Price',
     '2008Q1': 595,
     '2008Q2': 736,
     '2008Q3': 538
   },

   // Totals (you may need to calculate these based on the above data)
   {
     id: 11,
     customer: 'Total',
     site: '',
     measures: 'Target Plan (Revenue)',
     '2008Q1': 167700,
     '2008Q2': 365953,
     '2008Q3': 290953
   },
   {
     id: 12,
     customer: 'Total',
     site: '',
     measures: 'Financial Forecast (Revenue)',
     '2008Q1': 178721,
     '2008Q2': 362583,
     '2008Q3': 314229
   },
   {
     id: 13,
     customer: 'Total',
     site: '',
     measures: 'POS (Revenue)',
     '2008Q1': 115050,
     '2008Q2': 199629,
     '2008Q3': 0
   },
   {
     id: 14,
     customer: 'Total',
     site: '',
     measures: 'Achievement Rate',
     '2008Q1': 64.39,
     '2008Q2': 58.12,
     '2008Q3': 0
   },
   {
     id: 15,
     customer: 'Total',
     site: '',
     measures: 'Weighted Sales Price',
     '2008Q1': 975,
     '2008Q2': 1471,
     '2008Q3': 919
   }
 ];
export default function LevelMaster() {
  //   const demand = useFetcher();
  // const fetcher = useFetcher()
  const [rowData, setRowData] = useState(level)
  const [gridApi, setGridApi] = useState(null)
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), [])

  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), [])

  const defaultColDef = {
    sortable: true,
    filter: true,
    // floatingFilter: true,
    resizable: true,
    editable: true,
    flex: 2,
    minWidth: 100,
    wrapHeaderText: true,
    autoHeaderHeight: true,
    initialWidth: 200,
    // enableRowGroup: true,
    // headerCheckboxSelection: true,
  }

  const columnDefs = [
  
    {
      field: 'level_id',
      headerName: 'Level ID',
      filter: 'agNumberColumnFilter',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      pinned: true,
      // rowGroup: true,
    },
    {
      field: 'level_code',
      headerName: 'Level Code',
      filter: 'agTextColumnFilter',
      // rowGroup: true,
    },
    {
      field: 'level_description',
      headerName: 'Level Description',
      filter: 'agTextColumnFilter',
      // rowGroup: true,
    },
    {
      field: 'dimension_id',
      headerName: 'Dimension ID',
      filter: 'agTextColumnFilter',
      // rowGroup: true,
    },
  ]

  // const onCellValueChanged = useCallback(
  //   (event) => {
  //     if (!event.newValue || event.newValue === event.oldValue) {
  //       return; // Do nothing if the value hasn't changed
  //     }
  //     console.log("Cell value changed:", event);

  //     const formData = new FormData();
  //     formData.append("customer", event.data.customer);
  //     formData.append("sku", event.data.sku);
  //     formData.append("site", event.data.site);
  //     formData.append("bucket", event.data.bucket);
  //     formData.append("field", event.colDef.field);
  //     formData.append("newValue", event.newValue);

  //     // Use fetcher to submit the changes to your Remix action
  //     fetcher.submit(formData, {
  //       method: "post",
  //       action: "/demandPage",
  //       // encType: "application/json",
  //     });
  //   },
  //   [fetcher]
  // ); // Include `fetcher` in the dependency array

  // Load data when the grid is ready
  // const onGridReady = useCallback((params) => {
  //   console.log(params.api)
  //   setGridApi(params.api)
  //   loadData()
  // }, [])

  // // Function to load data
  // const loadData = useCallback(() => {
  //   fetcher.load('/rLevelMaster?page=1&limit=100') // Adjust endpoint as necessary
  // }, [fetcher])

  // // Effect to update row data when fetcher data changes
  // useEffect(() => {
  //   if (fetcher.data) {
  //     setRowData(fetcher.data.data)
  //   }
  // }, [fetcher.data])

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className={'ag-theme-quartz'}>
        <form method="post">
          <AgGridReact
            columnDefs={columnDefs as any }
            defaultColDef={defaultColDef}
            rowData={rowData}
            // onGridReady={onGridReady}
            pagination={true}
            paginationPageSize={20}
            suppressPaginationPanel={false}
            domLayout="autoHeight"
            sideBar={true}
            enableCharts={true}
            // onCellValueChanged={onCellValueChanged}
            // rowGroupPanelShow="always"
            rowSelection="multiple"
            enableRangeSelection={true}
            // floatingFilter={true}
          />
        </form>
      </div>
    </div>
  )
}
