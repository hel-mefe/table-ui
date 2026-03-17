import { useMemo } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Stack,
  Pagination,
} from "@mui/material"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import SwapVertIcon from "@mui/icons-material/SwapVert"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import { flexRender, createColumnHelper, type ColumnDef } from "@tanstack/react-table"
import { ServiceProvider } from "../service-providers/service-provider.types"
import { palette } from "../../lib/theme.palette"
import { useWaitlistStore } from "../../stores/waitlist.store"
import { usePaginatedSelectableTable } from "../../lib/table/use-paginated-selectable-table"
import { AppCheckbox } from "../../components/ui/checkbox"

function formatSignupDate(isoDate: string): string {
  const d = new Date(isoDate)
  const day = String(d.getDate()).padStart(2, "0")
  const month = String(d.getMonth() + 1).padStart(2, "0")
  const year = d.getFullYear()
  return `${day}/${month}/${year}`
}

export interface WaitlistTableProps {
  rows: ServiceProvider[]
  onEdit?: (row: ServiceProvider) => void
}

const columnHelper = createColumnHelper<ServiceProvider>()

export function WaitlistTable({ rows, onEdit }: WaitlistTableProps) {
  const globalPage = useWaitlistStore(s => s.page)
  const setGlobalPage = useWaitlistStore(s => s.setPage)
  const globalSelectedIds = useWaitlistStore(s => s.selectedIds)
  const setGlobalSelectedIds = useWaitlistStore(s => s.setSelectedIds)

  const columns = useMemo<ColumnDef<ServiceProvider, any>[]>(() => [
    columnHelper.display({
      id: "select",
      header: ({ table }) => (
        <AppCheckbox
          indeterminate={table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()}
          checked={table.getIsAllPageRowsSelected()}
          onChange={table.getToggleAllPageRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <AppCheckbox
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          indeterminate={row.getIsSomeSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("phoneNumber", {
      header: "Phone Number",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("postcode", {
      header: "Postcode",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("vendorType", {
      header: "Vendor Type",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("serviceOffering", {
      header: "Service Offering",
      cell: (info) => info.getValue().join(", "),
    }),
    columnHelper.accessor("signupDate", {
      header: "Signup Date",
      cell: (info) => formatSignupDate(info.getValue()),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => info.getValue() ?? "–",
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <IconButton
          size="small"
          aria-label="Edit"
          onClick={() => onEdit?.(row.original)}
          sx={{ color: palette.text.secondary }}
        >
          <EditOutlinedIcon fontSize="small" />
        </IconButton>
      ),
    }),
  ], [onEdit])

  const { table, totalPages } = usePaginatedSelectableTable<ServiceProvider>({
    data: rows,
    columns,
    page: globalPage,
    setPage: setGlobalPage,
    selectedIds: globalSelectedIds,
    setSelectedIds: setGlobalSelectedIds,
    getRowId: (row) => row.id,
    pageSize: 10,
    minPageCount: 5,
  })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: 2,
          border: `1px solid ${palette.border.default}`,
          overflowX: "auto",
        }}
      >
        <Table stickyHeader size="medium" aria-label="Waitlist table">
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableCell
                      key={header.id}
                      sx={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: palette.text.primary,
                        py: 1.5,
                        cursor: header.column.getCanSort() ? 'pointer' : 'default',
                        userSelect: 'none',
                      }}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort() && (
                          <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', ml: 0.5 }}>
                            {{
                              asc: <ArrowUpwardIcon sx={{ fontSize: 16, color: palette.text.secondary }} />,
                              desc: <ArrowDownwardIcon sx={{ fontSize: 16, color: palette.text.secondary }} />,
                              false: <SwapVertIcon sx={{ fontSize: 16, color: palette.text.secondary, opacity: 0.3 }} />
                            }[header.column.getIsSorted() as string || 'false']}
                          </Box>
                        )}
                      </Box>
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                hover
                sx={{
                  "&:nth-of-type(even)": {
                    bgcolor: "rgba(0,0,0,0.02)",
                  },
                  transition: "background-color 0.2s ease",
                  "&:hover": {
                    bgcolor: "rgba(26, 120, 242, 0.05) !important", // Soft blue highlight on hover for polish
                  }
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    sx={{ fontSize: 14, color: palette.text.primary, py: 1.5 }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {table.getRowModel().rows.length === 0 && (
               <TableRow>
                 <TableCell colSpan={columns.length} sx={{ textAlign: 'center', py: 5 }}>
                   No service providers found.
                 </TableCell>
               </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ mt: 3 }}
      >
        <Pagination
          count={totalPages}
          page={globalPage}
          onChange={(_, p) => setGlobalPage(p)}
          color="primary"
          shape="rounded"
          showFirstButton
          showLastButton
        />
      </Stack>
    </Box>
  )
}
