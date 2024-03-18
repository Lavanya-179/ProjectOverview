import { useMemo } from "react";
import {
  MRT_Table,
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import Title from "@/components/shared/Title";
import { Box, Divider, Stack } from "@mui/material";
import CurrencyFormatter from "@/components/shared/CurrencyFormatter";

const data1: any = [
  {
    title: "Contract running cost",
    value: 89500,
  },
  {
    title: "Contract Discount",
    value: 0,
  },
  {
    title: "Additional works",
    value: 30000,
  },
  {
    title: "Additional works discount",
    value: 0,
  },
  {
    title: "Hire",
    value: 10000,
  },
  {
    title: "External subcontractors",
    value: 10500,
  },
  {
    title: "Ommisions internal and external",
    value: 0,
  },
];
const data2: any = [
  {
    title: "Expenses",
    value: 50000,
  },
  {
    title: "Labour",
    value: 30000,
  },
  {
    title: "Assets",
    value: 5000,
  },
  {
    title: "External subcontractors main scope ",
    value: 8500,
  },
  {
    title: "External subcontractors additional work ",
    value: 0,
  },
];
const data3: any = [
  {
    tradeName: "Electrical package",
    assignedSubcontractor: "Apt electrical ltd",
    clientSum: 2400,
    purchaseOrderTotal: 2000,
    margin: 16.67,
    profit: 400,
  },
  {
    tradeName: "Plumbing package",
    assignedSubcontractor: "Apt plumbing ltd",
    clientSum: 2600,
    purchaseOrderTotal: 2000,
    margin: 23.08,
    profit: 600,
  },
  {
    tradeName: "Roofing Package",
    assignedSubcontractor: "Apt roofing ltd",
    clientSum: 3500,
    purchaseOrderTotal: 3000,
    margin: 14.29,
    profit: 500,
  },
  {
    tradeName: "Design package",
    assignedSubcontractor: "",
    clientSum: 2000,
    purchaseOrderTotal: 1500,
    margin: 25.0,
    profit: 500,
    value: 50000,
  },
];

export const ContractBreakdown = () => {
  const total: number = useMemo(
    () => data1.reduce((acc: any, curr: any) => acc + curr.value, 0),
    [data1]
  );
  const total2: number = useMemo(
    () => data2.reduce((acc: any, curr: any) => acc + curr.value, 0),
    [data2]
  );

  const clientSum: number = useMemo(
    () => data3.reduce((acc: any, curr: any) => acc + curr.clientSum, 0),
    [data3]
  );
  const purchaseSum: number = useMemo(
    () =>
      data3.reduce((acc: any, curr: any) => acc + curr.purchaseOrderTotal, 0),
    [data3]
  );
  const profit: number = useMemo(
    () => data3.reduce((acc: any, curr: any) => acc + curr.profit, 0),
    [data3]
  );
  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
  const formatPercentage = (value: number = 0) => {
    return value.toFixed(2) + "%";
  };
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    //column definitions...
    () => [
      {
        accessorKey: "title",
        header: "Title",
        Footer: () => (
          <Stack>
            <b>Sub total:</b>
          </Stack>
        ),
      },
      {
        accessorFn: (row) => (
          <Stack>
            <CurrencyFormatter value={row.value} />
          </Stack>
        ),
        header: "Total",
        // muiTableHeadCellProps: {
        //     sx: {width: "50%"},
        //   className: "table-column-right",
        // },
        // muiTableBodyCellProps: {
        //   className: "table-column-right",
        // },
        Footer: () => (
          <Stack>
            <CurrencyFormatter value={total} />
          </Stack>
        ),
      },
    ],
    []
    //end
  );

  const columns2 = useMemo<MRT_ColumnDef<any>[]>(
    //column definitions...
    () => [
      {
        accessorKey: "title",
        header: "Title",
        Footer: () => (
          <Stack>
            <b>Sub total:</b>
          </Stack>
        ),
        // muiTableHeadCellProps: {
        //     sx: {width: "50%"},
        //   className: "table-column-right",
        // },
      },
      {
        accessorFn: (row) => (
          <Stack>
            <CurrencyFormatter value={row.value} />
          </Stack>
        ),
        header: "Total",
        // size: 100,
        Footer: () => (
          <Stack>
            <CurrencyFormatter value={total2} />
          </Stack>
        ),
      },
    ],
    []
    //end
  );

  const columns3 = useMemo<MRT_ColumnDef<any>[]>(
    //column definitions...
    () => [
      {
        accessorKey: "tradeName",
        header: "Trade",
        Footer: () => (
          <Stack>
            <b>Sub total:</b>
          </Stack>
        ),
      },
      {
        accessorKey: "assignedSubcontractor",
        header: "Assigned sub contractor ",
        footer: "",
      },
      {
        accessorFn: (row) => formatCurrency(row.clientSum),
        header: "Client sum",
        // size: 100,
        Footer: () => (
          <Stack>
            <CurrencyFormatter value={clientSum} />
          </Stack>
        ),
      },
      {
        accessorFn: (row) => formatCurrency(row.purchaseOrderTotal),
        header: "Purchase Order Total",
        // size: 100,
        Footer: () => (
          <Stack>
            <CurrencyFormatter value={purchaseSum} />
          </Stack>
        ),
      },
      {
        accessorFn: (row) => formatPercentage(row.margin),
        header: "Margin",
        // size: 100,
        Footer: () => (
          <Stack>
            <b>{formatPercentage(profit)}</b>
          </Stack>
        ),
      },
      {
        accessorFn: (row) => formatCurrency(row.profit),
        header: "Profit",
        // size: 100,
        Footer: () => (
          <Stack>
            <CurrencyFormatter value={profit} />
          </Stack>
        ),
      },
    ],
    []
    //end
  );


  const data4: any = [
    {
      tradeName: "Electrical package",
      assignedSubcontractor: "Apt electrical ltd",
      Awaiting: 25000,
      overdue: 35000,
      totalOutstanding: 60000,
      paidToDate: 30000,
    }
  ]
  const columns4 = useMemo<MRT_ColumnDef<any>[]>(
    //column definitions...
    () =>  [
      {
        header: 'Awaiting',
        accessorKey: 'awaiting',
      },
      {
        header: 'Overdue',
        accessorKey: 'overdue',
      },
      {
        header: 'Total Outstanding',
        accessorKey: 'totalOutstanding',
      },
      {
        header: 'Invoiced',
        accessorKey: 'invoiced ',
      },
      {
        header: 'Invoice Summary',
        accessorKey: 'invoiceSummary',
      },
    ],
    []
    //end
  );

  const table1 = useMaterialReactTable({
    columns,
    data: data1, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    muiTableProps: {
      sx: {
        caption: {
          captionSide: "top",
          backgroundColor: "#ffffff",
          paddingLeft: 0,
          paddingRight: 0
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        "&.MuiTableCell-head": {
          backgroundColor: "#f5f5f5",
          width: "50%",
        },
      },
    },
    initialState: {
      density: "compact",
    },
    muiTableBodyRowProps: { hover: false },
    renderCaption: () => (
      <div>
        <Box style={{padding: "0 8px 10px"}} display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
          <Title size="16px" style={{ width: "50%" }}>
            Order value
          </Title>
          <Title size="16px" style={{ width: "50%" }}>
            {formatCurrency(100000)}
          </Title>
        </Box>
        <Divider />
        <div>
          <Title size="18px" style={{ textAlign: "center" }}>
            Internal contract breakdown
          </Title>
        </div>
      </div>
    ),
  });

  const table2 = useMaterialReactTable({
    columns: columns2,
    data: data2, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    muiTableProps: {
      sx: {
        caption: {
          captionSide: "top",
          backgroundColor: "#ffffff",
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        "&.MuiTableCell-head": {
          backgroundColor: "#f5f5f5",
          width: "50%",
        },
      },
    },
    initialState: {
      density: "compact",
    },
    muiTableBodyRowProps: { hover: false },
    renderCaption: () => (
      <Title size="18px" style={{ textAlign: "center" }}>
        Expenses Internal and External Breakdown:
      </Title>
    ),
  });

  const table3 = useMaterialReactTable({
    columns: columns3,
    data: data3, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    // enableGlobalFilter:false,
    // enableDensityToggle:false,
    // enableFullScreenToggle:false,
    // enableHiding:false,
    enableTopToolbar: false,
    muiTableProps: {
      sx: {
        caption: {
          captionSide: "top",
          backgroundColor: "#ffffff",
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        "&.MuiTableCell-head": {
          backgroundColor: "#f5f5f5",
        },
      },
    },
    initialState: {
      density: "compact",
    },
    muiTableBodyRowProps: { hover: false },
    renderCaption: () => (
      <Title size="18px" style={{ textAlign: "center" }}>
        External subcontractors breakdown
      </Title>
    ),
  });
  //using MRT_Table instead of MaterialReactTable if we do not need any of the toolbar components or features
  return (
    <>
      <Box style={{ marginTop: 20 }}>
        <MRT_Table table={table1} />
      </Box>
      <Box style={{ marginTop: 20 }}>
        <MRT_Table table={table2} />
      </Box>
      <Box style={{ marginTop: 20 }}>
        <MaterialReactTable table={table3} />
      </Box>
    </>
  );
};

export default ContractBreakdown;
