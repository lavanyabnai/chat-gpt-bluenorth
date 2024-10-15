import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  memo,
  Children,
  useRef,
} from 'react'
import { AgGridReact } from 'ag-grid-react' // AG Grid Component
import { Form, useFetcher } from '@remix-run/react'
import { Button } from '../ui/button'
import {
  CellClassParams,
  ValueGetterParams,
  ValueParserParams,
} from 'ag-grid-enterprise'

const ragCellClassRules = {
  'rag-green-outer': (params) => params.value === 2008,
  'rag-blue-outer': (params) => params.value === 2004,
  'rag-red-outer': (params) => params.value === 2000,
}

const cellStyle = (params) => {
  // console.log(params)
  const color = numberToColor(params)
  return {
    backgroundColor: color,
  }
}

const numberToColor = (params) => {
  console.log(`params`, params)
  if (
    params.data.measure === 'Shipment Volume' ||
    params.data.measure === 'On time delivery' ||
    params.data.measure === 'D+X' ||
    params.data.measure === 'Open items' ||
    params.data.measure === 'Cost per shipment'
  ) {
    return ''
  }
  if (params.data.measure === 'Shipment') {
    if (params.value < 75) {
      return '#ffaaaa'
    }
    if (params.value < 90) {
      return '#fef9c3'
    }
    return '#aaffaa'
  }
}

const ragRenderer = (params) => {
  return <span className="rag-element">{params.value}</span>
}

// const numberParser = (params: ValueParserParams) => {
//   const newValue = params.newValue
//   console.log(`newValue`, newValue)
//   let valueAsNumber
//   if (newValue === null || newValue === undefined || newValue === '') {
//     valueAsNumber = null
//   } else {
//     valueAsNumber = parseFloat(params.newValue)
//   }
//   return valueAsNumber
// }

export default function ExecutionEquip() {
  const gridRef = useRef()
  const fetcher = useFetcher()
  const [rowData, setRowData] = useState([])
  const [gridApi, setGridApi] = useState(null)

  const getRowId = useCallback((params) => {
    return params.data.id
  }, [])

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      editable: true,
      flex: 1,
      minWidth: 100,
      floatingFilter: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
    }),
    []
  )

  const columnDefs = [
    {
      field: 'equipmentName',
      colId: 'Equipment Name',
      filter: 'agTextColumnFilter',
      flex: 2,
    },

    {
      field: 'equipmentType',
      colId: 'Equipment Type',
      filter: 'agTextColumnFilter',
      flex: 2,
    },
    {
      field: 'dcName',
      headerName: 'DC Name',
      filter: 'agTextColumnFilter',
      flex: 2,

      // pinned: 'left',
      // lockPinned: true,

      // pivot: true,
    },
    {
      field: 'orderId',
      headerName: 'Order Id',
      filter: 'agTextColumnFilter',
      flex: 2,
    },

    {
      field: 'operationType',
      headerName: 'Operation Type',
      filter: 'agNumberColumnFilter',
      cellClass: 'rag-blue',
      flex: 2,
      type: 'numericColumn',
      columnGroupShow: 'closed',
    },
    {
      field: 'timeRun',
      headerName: 'Time Run',
      filter: 'agNumberColumnFilter',
      type: 'numericColumn',
      cellClass: 'rag-blue',
      columnGroupShow: 'closed',
      cellClassRules: ragCellClassRules,
      cellRenderer: ragRenderer,
    },
    {
      field: 'maintenanceDate',
      headerName: 'Maintenance Date',
      filter: 'agNumberColumnFilter',
      type: 'numericColumn',
      cellClass: 'rag-blue',

      columnGroupShow: 'closed',
    },
    {
      field: 'maintenanceRequired',
      headerName: 'Maintenance Required',
      filter: 'agNumberColumnFilter',
      type: 'numericColumn',
      cellClass: 'rag-blue',

      columnGroupShow: 'closed',
    },
    
  ]

  const onGridReady = useCallback((params) => {
    setGridApi(params.api)
    loadData()
  }, [])

  // Function to load data
  const loadData = useCallback(() => {
    // fetcher.load("/rLevelMaster?page=1&limit=100"); // Adjust endpoint as necessary
    fetcher.load('/rExecutionEquip') // Adjust endpoint as necessary
  }, [fetcher])

  // Effect to update row data when fetcher data changes
  useEffect(() => {
    if (fetcher.data) {
      setRowData(fetcher.data.data)
    }
  }, [fetcher.data])

  return (
    <div className="ag-theme-quartz" style={{ height: '100%', width: '100%' }}>
      <Form method="post">
        <AgGridReact
          ref={gridRef}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={rowData}
          onGridReady={onGridReady}
          domLayout="autoHeight"
          getRowId={getRowId}
          enableRangeSelection={true}
          groupDisplayType="groupRows"
          enableCharts={true}
          sideBar={true}
          groupDefaultExpanded={3}
          // autoGroupColumnDef={autoGroupColumnDef}
          // groupHideOpenParents={true}
          // pagination={pagination}
          // paginationPageSize={paginationPageSize}
          // paginationPageSizeSelector={paginationPageSizeSelector}
          // rowClassRules={rowClassRules}
          // rowSelection="multiple"
          // rowHeight={50}
          // rowBuffer={0}
          // rowModelType="clientSide"
          // enableRangeSelection={true}
          // isRowSelectable={isRowSelectable}
          // pagination={true}
          // paginationPageSize={10}
          // suppressPaginationPanel={false}
          // groupDisplayType="groupRows"
          // pivotMode={true}
          // onCellValueChanged={onCellValueChanged}
          // rowGroupPanelShow="always"
        />
      </Form>
    </div>
  )
}
