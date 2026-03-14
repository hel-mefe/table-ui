import { useState } from "react"
import { Box, Paper, Typography } from "@mui/material"

import Navbar from "./components/navbar/navbar"
import Sidebar from "./components/sidebar/sidebar"

import { navigationItems } from "./features/navigation/navigation-items.config"
import { mockProfile2 } from "./features/profile/profile.data"

import { ServiceProviderFilters } from "./features/service-providers/service-provider-filters.types"

function App() {
  const [filters, setFilters] = useState<ServiceProviderFilters>({})

  const handleFiltersChange = (updatedFilters: ServiceProviderFilters) => {
    setFilters(updatedFilters)
  }

  const handleApplyFilters = () => {
    console.log("Applying filters:", filters)
  }

  const handleClearFilters = () => {
    setFilters({})
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        bgcolor: "background.default"
      }}
    >

      {/* Navbar */}
      <Navbar
        items={navigationItems}
        profile={mockProfile2}
      />

      {/* Main layout */}
      <Box sx={{ display: "flex", flex: 1 }}>

        {/* Sidebar */}
        <Sidebar
          filters={filters}
          onChange={handleFiltersChange}
          onApply={handleApplyFilters}
          onClear={handleClearFilters}
        />

        {/* Table container */}
        <Box
          sx={{
            flex: 1,
            p: 4
          }}
        >
          <Paper
            elevation={1}
            sx={{
              p: 3
            }}
          >
            <Typography variant="h6">
              Table container
            </Typography>
          </Paper>
        </Box>

      </Box>

    </Box>
  )
}

export default App