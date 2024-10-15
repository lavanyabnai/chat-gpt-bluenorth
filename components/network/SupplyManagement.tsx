import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  memo,
  Children,
  useRef,
} from 'react'
import { AgGridReact, CustomCellRendererProps } from 'ag-grid-react' // AG Grid Component
// import { Form, useFetcher } from '@remix-run/react'

import {
  CellClassParams,
  CellClassRules,
  ValueParserParams,
} from 'ag-grid-enterprise'



const ragCellClassRules: CellClassRules = {
  'rag-green-outer': (params) => params.value === 2008,
  'rag-blue-outer': (params) => params.value === 2004,
  'rag-red-outer': (params) => params.value === 2000,
}

const cellStyle = (params: CellClassParams) => {
  // console.log(params)
  const color = numberToColor(params)
  return {
    backgroundColor: color,
  }
}

const numberToColor = (params: object) => {
  console.log(`params`, params)
  if (
    params.data.measure === 'Target Plan (Revenue)' ||
    params.data.measure === 'Financial Forecast (Revenue)' ||
    params.data.measure === 'POS (Revenue)' ||
    params.data.measure === 'Weighted Sales Price'
  ) {
    return ''
  }
  if (params.data.measure === 'Achievement Rate') {
    if (params.value < 75) {
      return '#ffaaaa'
    }
    if (params.value < 90) {
      return '#fef9c3'
    }
    return '#aaffaa'
  }
}

const ragRenderer = (params: CustomCellRendererProps) => {
  return <span className="rag-element">{params.value}</span>
}

const numberParser = (params: ValueParserParams) => {
  const newValue = params.newValue
  console.log(`newValue`, newValue)
  let valueAsNumber
  if (newValue === null || newValue === undefined || newValue === '') {
    valueAsNumber = null
  } else {
    valueAsNumber = parseFloat(params.newValue)
  }
  return valueAsNumber
}

export default function ForecastDemand() {
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
      headerName: 'Product Location Storage Unit',
      marryChildren: true,
      children: [
        {
          field: 'customer',
          colId: 'customer',
          filter: 'agTextColumnFilter',
          flex: 2,
          rowGroup: true,
          hide: true,
        },

        {
          field: 'site',
          colId: 'site',
          filter: 'agTextColumnFilter',
          flex: 2,
          rowGroup: true,
          hide: true,
        },
        {
          field: 'item',
          headerName: 'Item',
          filter: 'agTextColumnFilter',
          flex: 2,

          rowGroup: true,
          hide: true,
          // pinned: 'left',
          // lockPinned: true,

          // pivot: true,
        },
        {
          field: 'measure',
          filter: 'agTextColumnFilter',
          flex: 2,
        },
      ],
    },
    {
      headerName: '2024Q1',
      marryChildren: true,

      children: [
        {
          headerName: 'AnnualTotal',
          valueGetter: (p) => {
            return Math.floor(
              p.data['2024-Jan'] + p.data['2024-Feb'] + p.data['2024-Mar']
            ).toLocaleString()
          },
          type: 'numericColumn',
          columnGroupShow: 'open',
        },
        {
          field: '2024-Jan',
          headerName: 'Jan',
          filter: 'agNumberColumnFilter',
          cellClass: 'rag-blue',
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          type: 'numericColumn',
          columnGroupShow: 'closed',
        },
        {
          field: '2024-Feb',
          headerName: 'Feb',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-blue',
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
          cellClassRules: ragCellClassRules,
          cellRenderer: ragRenderer,
        },
        {
          field: '2024-Mar',
          headerName: 'Mar',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-blue',
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
      ],
    },
    {
      headerName: '2024Q2',
      marryChildren: true,
      flex: 2,
      showRowGroup: '2024',
      cellRenderer: 'agGroupCellRenderer',

      children: [
        {
          headerName: 'AnnualTotal',
          valueGetter: (p) => {
            return (
              '£' +
              Math.floor(
                p.data['2024-Apr'] + p.data['2024-May'] + p.data['2024-Jun']
              ).toLocaleString()
            )
          },
          cellStyle: cellStyle,
          type: 'numericColumn',
          columnGroupShow: 'open',
        },
        {
          field: '2024-Apr',
          headerName: 'Apr',
          filter: 'agNumberColumnFilter',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          type: 'numericColumn',
          columnGroupShow: 'closed',
        },
        {
          field: '2024-May',
          headerName: 'May',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: '2024-Jun',
          headerName: 'Jun',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
      ],
    },
    {
      headerName: '2024Q3',
      marryChildren: true,
      flex: 2,
      showRowGroup: '2024',
      cellRenderer: 'agGroupCellRenderer',

      children: [
        {
          headerName: 'AnnualTotal',
          valueGetter: (p) => {
            return (
              '£' +
              Math.floor(
                p.data['2024-Jul'] + p.data['2024-Aug'] + p.data['2024-Sep']
              ).toLocaleString()
            )
          },

          type: 'numericColumn',
          columnGroupShow: 'open',
        },
        {
          field: '2024-Jul',
          headerName: 'Jul',
          filter: 'agNumberColumnFilter',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          type: 'numericColumn',
          columnGroupShow: 'closed',
        },
        {
          field: '2024-Aug',
          headerName: 'Aug',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: '2024-Sep',
          headerName: 'Sep',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          valueParser: numberParser,
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
      ],
    },
  ]

  const onGridReady = useCallback((params) => {
    setGridApi(params.api)
    loadData()
  }, [])

  // Function to load data
  const loadData = useCallback(() => {
    // fetcher.load("/rLevelMaster?page=1&limit=100"); // Adjust endpoint as necessary
    fetcher.load('/rForecastAccuracy') // Adjust endpoint as necessary
  }, [fetcher])

  // Effect to update row data when fetcher data changes
  useEffect(() => {
    if (fetcher.data) {
      setRowData(fetcher.data.data)
    }
  }, [fetcher.data])

  return (
    <div className="ag-theme-quartz" style={{ height: '100%', width: '100%' }}>
      <form method="post">
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
      </form>
    </div>
  )
}
