import {
  TextField,
  Stack,
  Typography
} from "@mui/material"

interface SidebarDateInputProps {
  label: string
  value?: string
  onChange: (value: string) => void
}

export default function SidebarDateInput({
  label,
  value,
  onChange
}: SidebarDateInputProps) {
  return (
    <Stack spacing={0.5}>

      <Typography
        sx={{
          fontSize: 12,
          color: "#687582"
        }}
      >
        Date
      </Typography>

      <TextField
        size="small"
        type="date"
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        InputLabelProps={{
          shrink: true
        }}
      />

      <Typography
        sx={{
          fontSize: 11,
          color: "#687582"
        }}
      >
        MM/DD/YYYY
      </Typography>

    </Stack>
  )
}