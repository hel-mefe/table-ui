import { useMemo, useState } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  type ColumnDef,
  type SortingState,
  type RowSelectionState,
} from "@tanstack/react-table"

export interface UsePaginatedSelectableTableProps<TData> {
  data: TData[]
  columns: ColumnDef<TData, any>[]
  page: number
  setPage: (page: number) => void
  selectedIds: Set<string>
  setSelectedIds: (ids: Set<string>) => void
  getRowId: (row: TData) => string
  pageSize?: number
  minPageCount?: number
}

export interface UsePaginatedSelectableTableResult<TData> {
  table: ReturnType<typeof useReactTable<TData>>
  sorting: SortingState
  setSorting: (updater: SortingState | ((old: SortingState) => SortingState)) => void
  totalPages: number
}

export function usePaginatedSelectableTable<TData>({
  data,
  columns,
  page,
  setPage,
  selectedIds,
  setSelectedIds,
  getRowId,
  pageSize = 10,
  minPageCount = 1,
}: UsePaginatedSelectableTableProps<TData>): UsePaginatedSelectableTableResult<TData> {
  const [sorting, setSorting] = useState<SortingState>([])

  const rowSelection: RowSelectionState = useMemo(() => {
    const s: RowSelectionState = {}
    selectedIds.forEach((id) => {
      s[id] = true
    })
    return s
  }, [selectedIds])

  const table = useReactTable<TData>({
    data,
    columns,
    state: {
      sorting,
      rowSelection,
      pagination: {
        pageIndex: page - 1,
        pageSize,
      },
    },
    onSortingChange: setSorting,
    onRowSelectionChange: (updaterOrValue) => {
      let newSelection: RowSelectionState = {}
      if (typeof updaterOrValue === "function") {
        newSelection = updaterOrValue(rowSelection)
      } else {
        newSelection = updaterOrValue
      }

      const newSelectedIds = new Set<string>()
      Object.keys(newSelection).forEach((id) => {
        if (newSelection[id]) {
          newSelectedIds.add(id)
        }
      })
      setSelectedIds(newSelectedIds)
    },
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        const nextState = updater({ pageIndex: page - 1, pageSize })
        setPage(nextState.pageIndex + 1)
      } else {
        setPage(updater.pageIndex + 1)
      }
    },
    getRowId,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const pageCountFromData = table.getPageCount()
  const totalPages = Math.max(minPageCount, pageCountFromData > 0 ? pageCountFromData : 1)

  return {
    table,
    sorting,
    setSorting,
    totalPages,
  }
}

