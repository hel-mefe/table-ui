import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  ToggleButton,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { WaitlistTabGroup } from "../../components/ui/tabs"

export type WaitlistTab = "service-providers" | "customers"

export interface WaitlistToolbarProps {
  activeTab: WaitlistTab
  onTabChange: (tab: WaitlistTab) => void
  searchValue: string
  onSearchChange: (value: string) => void
}

export function WaitlistToolbar({
  activeTab,
  onTabChange,
  searchValue,
  onSearchChange,
}: WaitlistToolbarProps) {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        mb: 2,
      }}
    >
      <WaitlistTabGroup
        value={activeTab}
        exclusive
        onChange={(_, newValue) => newValue != null && onTabChange(newValue)}
      >
        <ToggleButton value="service-providers" sx={{ minWidth: 142 }}>
          Service Providers
        </ToggleButton>
        <ToggleButton value="customers" sx={{ minWidth: 99 }}>
          Customers
        </ToggleButton>
      </WaitlistTabGroup>

      <TextField
        size="medium"
        placeholder="Search User"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{
          width: 232,
          borderRadius: "2px",
          borderColor: '#D3D8DD',
          "& .MuiOutlinedInput-root": {
            height: 32,
            minHeight: 32,
            padding: "4px 12px",
            gap: "10px",
            bgcolor: "background.paper",
          },
          "& .MuiOutlinedInput-input": {
            padding: 0,
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ marginLeft: 0 }}>
              <IconButton size="small" edge="end" aria-label="search" sx={{ p: 0, color: "#9FA2AA" }}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}
