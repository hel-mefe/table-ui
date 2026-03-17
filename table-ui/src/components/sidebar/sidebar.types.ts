import type { ServiceProviderFilters } from "../../features/service-providers/service-provider-filters.types"

export interface SidebarProps {
  filters: ServiceProviderFilters
  onChange: (filters: ServiceProviderFilters) => void
  onApply: () => void
  onClear?: () => void
}