import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useWaitlistStore, WaitlistFilters } from '../../stores/waitlist.store';
import {
  SidebarContainer,
  SidebarTextField,
} from "../ui/sidebar";
import { GlerAdminPanel } from "./gler-admin-panel";
import { SidebarCheckbox } from "./sidebar-checkbox";
import { SidebarSection } from "./sidebar-section";
import { SlideIn, FadeIn, StaggerContainer, StaggerItem } from "../motion";


const datePickerStyle = {
  width: '124px',
  height: '56px',
  '& .MuiOutlinedInput-root': {
    height: '100%',
    borderRadius: '4px',
    backgroundColor: '#F4F7F9',
    '& fieldset': {
      borderWidth: '3px',
      borderColor: '#1A78F2',
    },
    '&:hover fieldset': { borderColor: '#1A78F2', borderWidth: '3px' },
    '&.Mui-focused fieldset': { borderColor: '#1A78F2', borderWidth: '3px' },
  },
  '& .MuiInputLabel-root': {
    color: '#1A78F2',
    fontWeight: 700,
    fontSize: '12px',
    transform: 'translate(12px, -9px) scale(1)',
  },
  '& .MuiInputBase-input': {
    padding: '10px 12px',
    fontSize: '13px',
    fontWeight: 500,
  },
};

const helperTextStyle = {
  fontSize: '10px',
  color: '#A0AEC0',
  mt: '6px',
  width: '124px',
  textAlign: 'center',
};



export default function Sidebar() {
  const storeFilters = useWaitlistStore((s) => s.filters);
  const setStoreFilters = useWaitlistStore((s) => s.setFilters);
  const clearStoreFilters = useWaitlistStore((s) => s.clearFilters);
  const showToast = useWaitlistStore((s) => s.showToast);

  const [localFilters, setLocalFilters] = useState<WaitlistFilters>(storeFilters);

  useEffect(() => {
    setLocalFilters(storeFilters);
  }, [storeFilters]);

  const updateFilter = (key: keyof WaitlistFilters, value: any) => {
    setLocalFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleArrayItem = (key: 'status' | 'vendorType' | 'serviceOffering', item: string) => {
    setLocalFilters(prev => {
      const arr = prev[key];
      if (arr.includes(item)) {
        return { ...prev, [key]: arr.filter(i => i !== item) };
      }
      return { ...prev, [key]: [...arr, item] };
    });
  };

  const handleApply = () => {
    setStoreFilters(localFilters);
    showToast("Filters successfully applied!");
  };

  const handleClear = () => {
    clearStoreFilters();
    setLocalFilters({
      postcode: '',
      status: [],
      dateStart: null,
      dateEnd: null,
      vendorType: [],
      serviceOffering: [],
    });
    showToast("Filters cleared.");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SidebarContainer>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
          {/* Header Logo */}
          <SlideIn direction="down" duration={0.5}>
            <GlerAdminPanel />
          </SlideIn>

          {/* User Management Badge */}
          <FadeIn delay={0.2}>
            <Box sx={{ backgroundColor: "#DDE2E8", borderRadius: "8px", py: 1.2, px: 2, mb: 4 }}>
              <Typography sx={{ fontWeight: 800, fontSize: "15px", color: "#000" }}>
                User Management
              </Typography>
            </Box>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} delayChildren={0.3}>
            <StaggerItem>
              <SidebarSection title="Postcode">
                <SidebarTextField 
                  placeholder="ZIP" 
                  size="small" 
                  fullWidth 
                  value={localFilters.postcode}
                  onChange={(e) => updateFilter('postcode', e.target.value)}
                />
              </SidebarSection>
            </StaggerItem>

            <StaggerItem>
              <SidebarSection title="Registration Status">
                <Stack>
                  <SidebarCheckbox 
                    label="Onboarded" 
                    checked={localFilters.status.includes('Onboarded')}
                    onChange={() => toggleArrayItem('status', 'Onboarded')}
                  />
                  <SidebarCheckbox 
                    label="Rejected" 
                    checked={localFilters.status.includes('Rejected')}
                    onChange={() => toggleArrayItem('status', 'Rejected')}
                  />
                </Stack>
              </SidebarSection>
            </StaggerItem>

            <StaggerItem>
              <SidebarSection title="Date Registered">
                <Stack direction="row" spacing="10px">
                  <Box>
                    <DatePicker
                      label="Date"
                      value={localFilters.dateStart ? dayjs(localFilters.dateStart) : null}
                      onChange={(val) => updateFilter('dateStart', val ? val.format('YYYY-MM-DD') : null)}
                      slotProps={{
                        textField: {
                          placeholder: "Start",
                          fullWidth: false,
                          InputLabelProps: { shrink: true },
                          sx: datePickerStyle,
                        },
                      }}
                    />
                    <Typography sx={helperTextStyle}>MM/DD/YYYY</Typography>
                  </Box>
                  <Box>
                    <DatePicker
                      label="Date"
                      value={localFilters.dateEnd ? dayjs(localFilters.dateEnd) : null}
                      onChange={(val) => updateFilter('dateEnd', val ? val.format('YYYY-MM-DD') : null)}
                      slotProps={{
                        textField: {
                          placeholder: "End",
                          fullWidth: false,
                          InputLabelProps: { shrink: true },
                          sx: datePickerStyle,
                        },
                      }}
                    />
                    <Typography sx={helperTextStyle}>MM/DD/YYYY</Typography>
                  </Box>
                </Stack>
              </SidebarSection>
            </StaggerItem>

            <StaggerItem>
              <SidebarSection title="Vendor Type">
                <Stack>
                  <SidebarCheckbox 
                    label="Independent" 
                    checked={localFilters.vendorType.includes('Independent')}
                    onChange={() => toggleArrayItem('vendorType', 'Independent')}
                  />
                  <SidebarCheckbox 
                    label="Company" 
                    checked={localFilters.vendorType.includes('Company')}
                    onChange={() => toggleArrayItem('vendorType', 'Company')}
                  />
                </Stack>
              </SidebarSection>
            </StaggerItem>

            <StaggerItem>
              <SidebarSection title="Service Offering">
                <Stack>
                  <SidebarCheckbox 
                    label="Housekeeping" 
                    checked={localFilters.serviceOffering.includes('Housekeeping')}
                    onChange={() => toggleArrayItem('serviceOffering', 'Housekeeping')}
                  />
                  <SidebarCheckbox 
                    label="Window Cleaning" 
                    checked={localFilters.serviceOffering.includes('Window Cleaning')}
                    onChange={() => toggleArrayItem('serviceOffering', 'Window Cleaning')}
                  />
                  <SidebarCheckbox 
                    label="Car Valet" 
                    checked={localFilters.serviceOffering.includes('Car Valet')}
                    onChange={() => toggleArrayItem('serviceOffering', 'Car Valet')}
                  />
                </Stack>
              </SidebarSection>
            </StaggerItem>
          </StaggerContainer>
        </Box>

        {/* Bottom Filter Buttons */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pb: 2, mt: 4 }}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="outlined"
              onClick={handleClear}
              sx={{
                color: "#1A78F2",
                borderColor: "#1A78F2",
                textTransform: "none",
                borderRadius: "100px",
                fontSize: "16px",
                fontWeight: 600,
                flex: 1,
                py: 1,
                "&:hover": { backgroundColor: "rgba(26, 120, 242, 0.1)", borderColor: "#1A78F2" },
              }}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              onClick={handleApply}
              sx={{
                backgroundColor: "#1A78F2",
                color: "#FFF",
                textTransform: "none",
                borderRadius: "100px",
                fontSize: "16px",
                fontWeight: 600,
                flex: 2,
                py: 1,
                boxShadow: "0px 8px 20px rgba(26, 120, 242, 0.3)",
                "&:hover": { backgroundColor: "#1565C0" },
              }}
            >
              Filter
            </Button>
          </Stack>
        </Box>
      </SidebarContainer>
    </LocalizationProvider>
  );
}