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


import { CellClassParams, ValueGetterParams, ValueParserParams } from 'ag-grid-enterprise'
import { generatedAccuracyData } from '~/data/agGrid/snop/demand/forecastAccuracy.js'

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

    if (params.value > 90) {
      return '#aaffaa'
    }
    if (params.value > 70) {
      return '#fef9c3'
    }
    return '#ffaaaa'
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

export default function InventoryProjection() {

  const gridRef = useRef()
  // const fetcher = useFetcher()
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
          field: 'SKU',
          filter: 'agTextColumnFilter',
          flex: 2,
        },
        {
          field: 'Location',
          filter: 'agTextColumnFilter',
          flex: 2,
        },
        {
          field: 'FillRateImpact',
          filter: 'agTextColumnFilter',
          flex: 2,
        },
        {
          field: 'RevenueImpact',
          filter: 'agTextColumnFilter',
          flex: 2,
        },
      ],
    },
    {
      headerName: 'InventoryProjections',
      marryChildren: true,

      children: [
        {
          headerName: 'Total Week',
          valueGetter: (p) => {
            return Math.floor(
              p.data['Week 1'] +
                p.data['Week 2'] +
                p.data['Week 3'] +
                p.data['Week 4'] +
                p.data['Week 5'] +
                p.data['Week 6'] +
                p.data['Week 7'] +
                p.data['Week 8'] +
                p.data['Week 9'] +
                p.data['Week 10'] +
                p.data['Week 11'] +
                p.data['Week 12']
            ).toLocaleString()
          },

          type: 'numericColumn',
          columnGroupShow: 'open',
        },
        {
          field: 'Week 1',
          filter: 'agNumberColumnFilter',
          cellClass: 'rag-red',
          // cellRenderer: ragRenderer,
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          type: 'numericColumn',
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 2',
          filter: 'agNumberColumnFilter',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          type: 'numericColumn',
          columnGroupShow: 'closed',
        },

        {
          field: 'Week 3',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 4',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 5',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 6',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 7',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 8',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 9',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 10',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 11',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
        {
          field: 'Week 12',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          cellClass: 'rag-red',
          cellStyle: cellStyle,
          valueFormatter: (p) => {
            return Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
        },
      ],
    },
  ]

  // const onGridReady = useCallback((params) => {
  //   setGridApi(params.api)
  //   loadData()
  // }, [])

  // // Function to load data
  // const loadData = useCallback(() => {
  //   // fetcher.load("/rLevelMaster?page=1&limit=100"); // Adjust endpoint as necessary
  //   fetcher.load('/rInventoryProjection') // Adjust endpoint as necessary
  // }, [fetcher])

  // // Effect to update row data when fetcher data changes
  // useEffect(() => {
  //   if (fetcher.data) {
  //     setRowData(fetcher.data.data)
  //   }
  // }, [fetcher.data])

  return (
    <div
      className="ag-theme-quartz h-[750px] w-full overflow-y-auto">
      <form method="post">
        <AgGridReact
          ref={gridRef}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={rowData}
          // onGridReady={onGridReady}
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
