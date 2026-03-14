import { useState } from "react"

import {
  Box,
  Typography,
  Paper,
  Stack,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  IconButton,
  Pagination
} from "@mui/material"

import SearchIcon from "@mui/icons-material/Search"

import Navbar from "./components/navbar/navbar"
import Sidebar from "./components/sidebar/sidebar"

import { navigationItems } from "./features/navigation/navigation-items.config"
import { mockProfile2 } from "./features/profile/profile.data"

import { ServiceProviderFilters } from "./features/service-providers/service-provider-filters.types"

export default function WaitlistPage() {

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
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", bgcolor: 'white' }}>

      {/* TOP NAVBAR */}
      <Navbar items={navigationItems} profile={mockProfile2} />

      {/* MAIN CONTENT */}
      <Box sx={{ display: "flex", flex: 1, paddingY: '40px', paddingX: '24px'}}>

        {/* SIDEBAR */}
        <Sidebar
          filters={filters}
          onChange={handleFiltersChange}
          onApply={handleApplyFilters}
          onClear={handleClearFilters}
        />

        {/* PAGE CONTENT */}
        <Box sx={{ flex: 1, p: 4}}>

          {/* TITLE */}
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Waitlist
          </Typography>

          {/* TABS + SEARCH */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 2 }}
          >

            <Tabs value={0}>
              <Tab label="Service Providers" />
              <Tab label="Customers" />
            </Tabs>

            <TextField
              size="small"
              placeholder="Search User"
              sx={{ width: 260 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton size="small">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

          </Stack>

          {/* TABLE CONTAINER */}
          <Paper
            elevation={0}
            sx={{
              borderRadius: 2,
              border: "1px solid #D0D5DD",
              overflow: "hidden"
            }}
          >
            <Box sx={{ p: 4 }}>
              Table Placeholder (TanStack Table goes here)
            </Box>
          </Paper>

          {/* PAGINATION */}
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <Pagination count={5} page={1} />
          </Stack>

        </Box>

      </Box>

    </Box>
  )
}