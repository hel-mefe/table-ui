import { create } from 'zustand'
import { ServiceProvider } from '../features/service-providers/service-provider.types'
import { mockServiceProviders } from '../features/service-providers/service-provider.data'

export interface WaitlistFilters {
  postcode: string
  status: string[]
  dateStart: string | null
  dateEnd: string | null
  vendorType: string[]
  serviceOffering: string[]
}

const defaultFilters: WaitlistFilters = {
  postcode: '',
  status: [],
  dateStart: null,
  dateEnd: null,
  vendorType: [],
  serviceOffering: [],
}

interface WaitlistToastState {
  open: boolean
  message: string
}

interface WaitlistState {
  data: ServiceProvider[]
  search: string
  filters: WaitlistFilters
  page: number
  selectedIds: Set<string>
  toast: WaitlistToastState

  setSearch: (search: string) => void
  setFilters: (filters: Partial<WaitlistFilters>) => void
  clearFilters: () => void
  setPage: (page: number) => void
  setSelectedIds: (ids: Set<string>) => void
  showToast: (message: string) => void
  hideToast: () => void
}

export const useWaitlistStore = create<WaitlistState>((set) => ({
  data: mockServiceProviders,
  search: '',
  filters: defaultFilters,
  page: 1,
  selectedIds: new Set<string>(),
   toast: {
    open: false,
    message: '',
  },

  setSearch: (search) => set({ search, page: 1 }),
  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
      page: 1,
    })),
  clearFilters: () => set({ filters: defaultFilters, page: 1 }),
  setPage: (page) => set({ page }),
  setSelectedIds: (selectedIds) => set({ selectedIds }),
  showToast: (message) =>
    set({
      toast: {
        open: true,
        message,
      },
    }),
  hideToast: () =>
    set({
      toast: {
        open: false,
        message: '',
      },
    }),
}))
