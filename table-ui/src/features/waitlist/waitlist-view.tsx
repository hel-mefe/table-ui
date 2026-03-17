import { useState, useMemo } from "react"
import { Box, Stack, Snackbar, Alert } from "@mui/material"
import { WaitlistToolbar, type WaitlistTab } from "./waitlist-toolbar"
import { WaitlistTable } from "./waitlist-table"
import { useWaitlistStore } from "../../stores/waitlist.store"
import type { ServiceProvider } from "../service-providers/service-provider.types"
import { UserDetailsModal } from "../../components/modals/user-details-modal"
import { ViewTitle } from "../../components/ui/typography"
import { FadeIn, SlideIn } from "../../components/motion"

export function WaitlistView() {
  const [activeTab, setActiveTab] = useState<WaitlistTab>("service-providers")
  const [selectedProvider, setSelectedProvider] = useState<ServiceProvider | null>(null)

  const data = useWaitlistStore((state) => state.data)
  const search = useWaitlistStore((state) => state.search)
  const setSearch = useWaitlistStore((state) => state.setSearch)
  const filters = useWaitlistStore((state) => state.filters)
  
  const toast = useWaitlistStore((state) => state.toast)
  const showToast = useWaitlistStore((state) => state.showToast)
  const hideToast = useWaitlistStore((state) => state.hideToast)

  const filteredRows = useMemo(() => {
    let result = data

    // Apply strict filters
    if (filters.postcode) {
      result = result.filter(r => r.postcode.toLowerCase().includes(filters.postcode.toLowerCase()))
    }
    if (filters.vendorType && filters.vendorType.length > 0) {
      result = result.filter(r => filters.vendorType.includes(r.vendorType))
    }
    if (filters.serviceOffering && filters.serviceOffering.length > 0) {
      result = result.filter(r => r.serviceOffering.some(s => filters.serviceOffering.includes(s)))
    }
    if (filters.status && filters.status.length > 0) {
      result = result.filter(r => r.status && filters.status.includes(r.status))
    }
    if (filters.dateStart || filters.dateEnd) {
      result = result.filter(r => {
        const signupTime = new Date(r.signupDate).getTime()
        const start = filters.dateStart ? new Date(filters.dateStart).getTime() : -Infinity
        const end = filters.dateEnd ? new Date(filters.dateEnd).getTime() + 86400000 : Infinity // add 1 day to include end date fully
        return signupTime >= start && signupTime <= end
      })
    }

    // Apply global search across multiple columns
    if (search.trim()) {
      const q = search.toLowerCase().trim()
      result = result.filter(
        (r) =>
          r.email.toLowerCase().includes(q) ||
          r.phoneNumber.toLowerCase().includes(q) ||
          r.postcode.toLowerCase().includes(q) ||
          r.vendorType.toLowerCase().includes(q) ||
          r.serviceOffering.some(s => s.toLowerCase().includes(q)) ||
          (r.status && r.status.toLowerCase().includes(q))
      )
    }

    return result
  }, [data, search, filters])


  const handleEdit = (provider: ServiceProvider) => {
    setSelectedProvider(provider)
  }

  const handleOnboard = () => {
    showToast("User onboarded successfully.")
    setSelectedProvider(null)
  }

  const handleReject = () => {
    showToast("User rejected.")
    setSelectedProvider(null)
  }

  return (
    <Box sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
      <Stack direction='column' gap={"24px"}>
        <SlideIn direction="down" duration={0.45}>
          <ViewTitle>Waitlist</ViewTitle>
        </SlideIn>

        <FadeIn delay={0.15}>
          <WaitlistToolbar
            activeTab={activeTab}
            onTabChange={setActiveTab}
            searchValue={search}
            onSearchChange={setSearch}
          />
        </FadeIn>
      </Stack>

      <FadeIn delay={0.25} style={{ flex: 1, minHeight: 0, marginTop: 24, display: "flex", flexDirection: "column" }}>
        <WaitlistTable
          rows={filteredRows}
          onEdit={handleEdit}
        />
      </FadeIn>

      <UserDetailsModal
        open={!!selectedProvider}
        provider={selectedProvider}
        onClose={() => setSelectedProvider(null)}
        onOnboard={handleOnboard}
        onReject={handleReject}
      />

      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={hideToast}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert 
          onClose={hideToast} 
          severity="success" 
          sx={{ width: '100%', borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}
