import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper
} from "@mui/material"

import SidebarSection from "./sidebar-section"
import SidebarCheckbox from "./sidebar-checkbox"
import SidebarDateInput from "./sidebar-date-input"

import { SidebarProps } from "./sidebar.types"

export default function Sidebar({
  filters,
  onChange,
  onApply,
  onClear
}: SidebarProps) {

  const toggleArrayValue = (
    array: string[] | undefined,
    value: string
  ) => {
    if (!array) return [value]

    return array.includes(value)
      ? array.filter((v) => v !== value)
      : [...array, value]
  }

  return (
    <Box
      component="aside"
      sx={{
        width: 288,
        height: "100%",
        bgcolor: "#F4F7F9",
        p: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >

      {/* TOP CONTENT */}
      <Stack spacing={3}>

        {/* LOGO */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            sx={{
              color: "#1A78F2",
              fontWeight: 700,
              fontSize: 18
            }}
          >
            gler
          </Typography>

          <Typography sx={{ fontSize: 14 }}>
            Admin Panel
          </Typography>
        </Stack>

        {/* USER MANAGEMENT PILL */}
        <Paper
          elevation={0}
          sx={{
            bgcolor: "#D3D8DD",
            px: 2,
            py: 1,
            borderRadius: "8px"
          }}
        >
          <Typography fontWeight={600}>
            User Management
          </Typography>
        </Paper>

        {/* POSTCODE */}
        <SidebarSection title="Postcode">
          <TextField
            size="small"
            placeholder="ZIP"
            value={filters.postcode ?? ""}
            onChange={(e) =>
              onChange({
                ...filters,
                postcode: e.target.value
              })
            }
            sx={{
              width: 130,
              bgcolor: "white"
            }}
          />
        </SidebarSection>

        {/* REGISTRATION STATUS */}
        <SidebarSection title="Registration Status">

          <SidebarCheckbox
            label="Onboarded"
            checked={filters.status?.includes("Onboarded") ?? false}
            onChange={() =>
              onChange({
                ...filters,
                status: toggleArrayValue(filters.status, "Onboarded")
              })
            }
          />

          <SidebarCheckbox
            label="Rejected"
            checked={filters.status?.includes("Rejected") ?? false}
            onChange={() =>
              onChange({
                ...filters,
                status: toggleArrayValue(filters.status, "Rejected")
              })
            }
          />

        </SidebarSection>

        {/* DATE REGISTERED */}
        <SidebarSection title="Date Registered">

          <Stack direction="row" spacing={1}>

            <SidebarDateInput
              label="Start"
              value={filters.startDate}
              onChange={(value) =>
                onChange({
                  ...filters,
                  startDate: value
                })
              }
            />

            <SidebarDateInput
              label="End"
              value={filters.endDate}
              onChange={(value) =>
                onChange({
                  ...filters,
                  endDate: value
                })
              }
            />

          </Stack>

        </SidebarSection>

        {/* VENDOR TYPE */}
        <SidebarSection title="Vendor Type">

          <SidebarCheckbox
            label="Independent"
            checked={filters.vendorType?.includes("Independent") ?? false}
            onChange={() =>
              onChange({
                ...filters,
                vendorType: toggleArrayValue(
                  filters.vendorType,
                  "Independent"
                )
              })
            }
          />

          <SidebarCheckbox
            label="Company"
            checked={filters.vendorType?.includes("Company") ?? false}
            onChange={() =>
              onChange({
                ...filters,
                vendorType: toggleArrayValue(
                  filters.vendorType,
                  "Company"
                )
              })
            }
          />

        </SidebarSection>

        {/* SERVICE OFFERING */}
        <SidebarSection title="Service Offering">

          <SidebarCheckbox
            label="Housekeeping"
            checked={filters.serviceOffering?.includes("Housekeeping") ?? false}
            onChange={() =>
              onChange({
                ...filters,
                serviceOffering: toggleArrayValue(
                  filters.serviceOffering,
                  "Housekeeping"
                )
              })
            }
          />

          <SidebarCheckbox
            label="Window Cleaning"
            checked={filters.serviceOffering?.includes("Window Cleaning") ?? false}
            onChange={() =>
              onChange({
                ...filters,
                serviceOffering: toggleArrayValue(
                  filters.serviceOffering,
                  "Window Cleaning"
                )
              })
            }
          />

          <SidebarCheckbox
            label="Car Valet"
            checked={filters.serviceOffering?.includes("Car Valet") ?? false}
            onChange={() =>
              onChange({
                ...filters,
                serviceOffering: toggleArrayValue(
                  filters.serviceOffering,
                  "Car Valet"
                )
              })
            }
          />

        </SidebarSection>

      </Stack>

      {/* BOTTOM ACTION */}
      <Button
        variant="contained"
        onClick={onApply}
        sx={{
          borderRadius: "999px",
          py: 1.5,
          fontWeight: 600
        }}
      >
        Filter
      </Button>

    </Box>
  )
}