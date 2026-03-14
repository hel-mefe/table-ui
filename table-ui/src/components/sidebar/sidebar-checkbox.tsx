import {
  Checkbox,
  FormControlLabel
} from "@mui/material"

interface SidebarCheckboxProps {
  label: string
  checked: boolean
  onChange: () => void
}

export default function SidebarCheckbox({
  label,
  checked,
  onChange
}: SidebarCheckboxProps) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          checked={checked}
          onChange={onChange}
        />
      }
      label={label}
      sx={{
        m: 0,
        "& .MuiTypography-root": {
          fontSize: 14
        }
      }}
    />
  )
}