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
// Optional Theme applied to the grid
import 'ag-grid-enterprise' // Required for AG Grid Enterprise features
import { Button } from '../ui/button'
import '~/styles/aggrid.css'

const CustomButtonComponent = (props) => {
  return (
    <Button className="h-4" onClick={() => window.alert('clicked')}>
      Push Me!
    </Button>
  )
}

const CompanyLogoRenderer = ({ value }) => (
  <span
    style={{
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center',
    }}
  >
    <img
      alt={`${value} Flag`}
      src={`https://www.ag-grid.com/example-assets/space-company-logos/spacex.png`}
      style={{
        display: 'block',
        width: '25px',
        height: 'auto',
        maxHeight: '50%',
        marginRight: '12px',
        filter: 'brightness(1.1)',
      }}
    />

    <p
      style={{
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      spacex
    </p>
  </span>
)

const MissionResultRenderer = ({ value }) => (
  <span className="flex justify-center items-center h-full">
    {
      <img
        alt={`${value}`}
        src={`https://www.ag-grid.com/example-assets/icons/${value ? 'tick-in-circle' : 'cross-in-circle'}.png`}
        className="h-4 w-4"
      />
    }
  </span>
)

// const rowClassRules = {
//   // apply red to Ford cars
//   'rag-red': (params) => params.data.customer === 'San Jose',
// }

export default function LevelMasterBack() {
  //   const demand = useFetcher();
  const gridRef = useRef()
  const fetcher = useFetcher()
  const [rowData, setRowData] = useState([])
  const [gridApi, setGridApi] = useState(null)
  const [count, setCount] = useState(0)

  const pagination = true
  const paginationPageSize = 10
  const paginationPageSizeSelector = [10, 50, 100]
  // const isRowSelectable = useCallback((node) => node.data.value > count, [count])
  const getRowId = useCallback((params) => {
    // console.log(`paramsgetRowId`, params)
    return params.data.id
  }, [])

  const getRowById = useCallback(() => {
    const rowNode = gridRef.current?.api.getRowNode('1')
    if (rowNode && rowNode.id == '1') {
      console.log(`################ Got Row Node C2`)
      console.log(`data = ${JSON.stringify(rowNode.data)}`)
    }
    window.alert('Row details printed to developers console')
  }, [window])


 
  const getAllRows = useCallback(() => {
    gridRef.current.api.forEachNode((rowNode) => {
      console.log(`=============== ROW ${rowNode.rowIndex}`)
      console.log(`id = ${rowNode.id}`)
      console.log(`rowIndex = ${rowNode.rowIndex}`)
      console.log(`data = ${JSON.stringify(rowNode.data)}`)
      console.log(`group = ${rowNode.group}`)
      console.log(`height = ${rowNode.rowHeight}px`)
      console.log(`isSelected = ${rowNode.isSelected()}`)
    })
    window.alert('Row details printed to developers console')
  }, [window])
  
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      // filter: true,
      // resizable: true,
      editable: true,
      flex: 1,
      minWidth: 100,
      // enableRowGroup: true,
      // floatingFilter: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
    }),
    []
  )

  const columnDefs = [
    // {
    //   field: 'company',
    //   // Add component to column via cellRenderer
    //   cellRenderer: memo(CompanyLogoRenderer),
    // },
    // {
    //   headerName: 'successful',
    //   width: 120,De
    //   cellRenderer: memo(MissionResultRenderer),
    //   filter: 'agBooleanColumnFilter',
    // },
    // { field: 'button', cellRenderer: memo(CustomButtonComponent) },

    {
      headerName: 'Product Location Storage Unit',
      marryChildren: true,

      children: [
        {
          field: 'customer',
          colId: 'customer',
          filter: 'agNumberColumnFilter',
          checkboxSelection: true,
          headerCheckboxSelection: true,
          showRowGroup: 'customer',
          flex: 1,
          // pinned: 'left',
          // lockPinned: true,
          // cellStyle: { fontWeight: 'bold' },
          cellClassRules: {
            // apply green to electric cars
            'rag-green': (params) => params.value === 'Best Buy',
          },
          rowGroup: true,
          hide: false,
          // pivot: true,
        },

        {
          field: 'site',
          colId: 'site',
          filter: 'agTextColumnFilter',
          flex: 1,
          rowGroup: true,
          hide: false,
          // pinned: 'left',
          // lockPinned: true,

          // pivot: true,
        },

        {
          field: 'measures',
          colId: 'measures',
          filter: 'agTextColumnFilter',
          flex: 1,
          // pinned: 'left',
          // lockPinned: true,

          // pivot: true,
        },
      ],
    },
    {
      headerName: '2008',
      marryChildren: true,
      flex: 2,
      showRowGroup: '2008',
      cellRenderer: 'agGroupCellRenderer',

      children: [
        {
          headerName: 'TotalnEW',
          colId: 'total',
          valueGetter: (p) => {
            // console.log(`p`, p)
            return (
              '£' +
              Math.floor(
                p.data['2008Q1'] + p.data['2008Q2'] + p.data['2008Q3']
              ).toLocaleString()
            )
          },

          type: 'numericColumn',
          columnGroupShow: 'open',
          // rowGroup: true,
          // pivot: true,
        },
        {
          field: '2008Q1',
          colId: '2008Q1',
          filter: 'agNumberColumnFilter',
          aggFunc: 'sum',
          valueFormatter: (p) => {
            // console.log(`p`, p)
            return '£' + Math.floor(p.value).toLocaleString()
          },
          // cellClassRules: {
          //   // apply green to electric cars
          //   'rag-green': (params) =>
          //     params.data.customer === 'Best Buy' &&
          //     params.data.measures === 'Target Plan (Revenue)',
          // },
          type: 'numericColumn',
          columnGroupShow: 'closed',
          // rowGroup: true,
          // pivot: true,
        },
        {
          field: '2008Q2',
          colId: '2008Q2',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          aggFunc: 'sum',

          valueFormatter: (p) => {
            console.log(`p`, p)
            return '£' + Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
          // rowGroup: true,
          // pivot: true,
        },
        {
          field: '2008Q3',
          colId: '2008Q3',
          filter: 'agNumberColumnFilter',
          type: 'numericColumn',
          valueFormatter: (p) => {
            // console.log(`p`, p)
            return '£' + Math.floor(p.value).toLocaleString()
          },
          columnGroupShow: 'closed',
          // rowGroup: true,
          // pivot: true,
        },
      ],
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
  const onGridReady = useCallback((params) => {
    console.log(`paramsOn`, params)
    setGridApi(params.api)
    loadData()
  }, [])

  // Function to load data
  const loadData = useCallback(() => {
    // fetcher.load("/rLevelMaster?page=1&limit=100"); // Adjust endpoint as necessary
    fetcher.load('/rLevelMasterbck') // Adjust endpoint as necessary
  }, [fetcher])

  // Effect to update row data when fetcher data changes
  useEffect(() => {
    if (fetcher.data) {
      console.log(`fetcher ${fetcher.data.data}`)
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
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          // rowClassRules={rowClassRules}
          rowSelection="multiple"
          rowHeight={50}
          rowBuffer={0}
          rowModelType="clientSide"
          enableRangeSelection={true}
          // isRowSelectable={isRowSelectable}
          // pagination={true}
          // paginationPageSize={10}
          suppressPaginationPanel={false}
          domLayout="autoHeight"
          getRowId={getRowId}
          groupDisplayType="groupRows"
          enableCharts={true}
          sideBar={true}
          // pivotMode={true}
          // onCellValueChanged={onCellValueChanged}
          // rowGroupPanelShow="always"
        />
      </Form>
    </div>
  )
}
