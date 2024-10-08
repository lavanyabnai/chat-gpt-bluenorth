import React, { useCallback, useEffect, useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import { Form, useFetcher } from "@remix-run/react";
// Optional Theme applied to the grid
import "ag-grid-enterprise"; // Required for AG Grid Enterprise features




export default function GridReact() {
  //   const demand = useFetcher();
  const fetcher = useFetcher();
  const [rowData, setRowData] = useState([]);
  const [gridApi, setGridApi] = useState(null);

  const defaultColDef = {
    sortable: true,
    // filter: true,
    resizable: true,
    editable: true,
    flex: 1,
    minWidth: 100,
    enableRowGroup: true,
  };

  const columnDefs = [
    {
      field: "customer",
      filter: "agTextColumnFilter",
      // rowGroup: true,
    },
    {
      field: "site",
      filter: "agTextColumnFilter",
      // rowGroup: true,
    },
    {
      field: "sku",
      filter: "agNumberColumnFilter",
      // rowGroup: true,
    },
    {
      field: "bucket",
      filter: "agNumberColumnFilter",
    },
    {
      field: "order_id",
      filter: "agTextColumnFilter",
    },
    {
      field: "booking_id",
      filter: "agTextColumnFilter",
    },
    {
      field: "selling_price",
      filter: "agNumberColumnFilter",
      valueFormatter: (params) =>
        typeof params.value === "number" ? `$${params.value.toFixed(2)}` : null,
      valueParser: (params) => parseFloat(params.newValue) || null, // Parse input as a float
    },
  ];

  const onCellValueChanged = useCallback(
    (event) => {
      if (!event.newValue || event.newValue === event.oldValue) {
        return; // Do nothing if the value hasn't changed
      }
      // console.log("Cell value changed:", event);

      const formData = new FormData();
      formData.append("customer", event.data.customer);
      formData.append("sku", event.data.sku);
      formData.append("site", event.data.site);
      formData.append("bucket", event.data.bucket);
      formData.append("field", event.colDef.field);
      formData.append("newValue", event.newValue);

      // Use fetcher to submit the changes to your Remix action
      fetcher.submit(formData, {
        method: "post",
        action: "/demandPage",
        // encType: "application/json",
      });
    },
    [fetcher]
  ); // Include `fetcher` in the dependency array

  // Load data when the grid is ready
  const onGridReady = useCallback((params) => {
    setGridApi(params.api);
    loadData();
  }, []);

  // Function to load data
  const loadData = useCallback(() => {
    fetcher.load("/demandPage?page=1&limit=100"); // Adjust endpoint as necessary
  }, [fetcher]);

  // Effect to update row data when fetcher data changes
  useEffect(() => {
    if (fetcher.data) {
      setRowData(fetcher.data.data);
    }
  }, [fetcher.data]);

  return (
    <div
      className="ag-theme-quartz"
      style={{ height: "100%", width: "100%" }}
    >
      <Form method="post">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          onGridReady={onGridReady}
          pagination={true}
          paginationPageSize={12}
          suppressPaginationPanel={false}
          domLayout="autoHeight"
          onCellValueChanged={onCellValueChanged}
          rowGroupPanelShow="always"
        />
      </Form>
    </div>
  );
}
