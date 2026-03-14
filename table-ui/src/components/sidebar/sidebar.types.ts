export interface SidebarFilters {
  postcode?: string
  status?: string[]
  vendorType?: string[]
  serviceOffering?: string[]
  startDate?: string
  endDate?: string
}

export interface SidebarProps {
  filters: SidebarFilters
  onChange: (filters: SidebarFilters) => void
  onApply: () => void
  onClear: () => void
}