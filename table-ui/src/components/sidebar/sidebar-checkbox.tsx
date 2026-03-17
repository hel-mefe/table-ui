import { FormControlLabel, Typography } from "@mui/material";
import { AppCheckbox } from "../ui/checkbox";

interface SidebarCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const SidebarCheckbox = ({ label, checked, onChange }: SidebarCheckboxProps) => (
  <FormControlLabel
    control={
      <AppCheckbox
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        sx={{ width: '44px', flexShrink: 0 }}
      />
    }
    label={
      <Typography sx={{
        width: '160px',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0%',
        color: '#324054',
        fontFamily: "'Poppins', sans-serif",
      }}>
        {label}
      </Typography>
    }
    sx={{ margin: 0, width: '256px', height: '38px', gap: '12px' }}
  />
);
