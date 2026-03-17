import { Stack, Typography } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import dayjs, { Dayjs } from "dayjs"
import { palette } from "../../lib/theme.palette"

export interface SidebarDateInputProps {
  label: string
  value?: string
  onChange: (value: string) => void
}

export default function SidebarDateInput({
  label,
  value,
  onChange
}: SidebarDateInputProps) {

  const parsedValue: Dayjs | null = value ? dayjs(value) : null

  return (
    <Stack spacing={0.5}>

      <Typography
        sx={{
          fontSize: 12,
          color: palette.text.secondary,
        }}
      >
        Date
      </Typography>

      <DatePicker
        label={label}
        value={parsedValue}
        onChange={(newValue) => {
          if (newValue) {
            onChange(newValue.format("YYYY-MM-DD"))
          }
        }}
        slotProps={{
          textField: {
            size: "small",
            sx: {
              width: 124,
              minHeight: 40,
              borderRadius: 1,
              "& fieldset": { borderColor: palette.border.default },
            }
          }
        }}
      />

      <Typography
        sx={{
          fontSize: 11,
          color: palette.text.secondary,
        }}
      >
        MM/DD/YYYY
      </Typography>

    </Stack>
  )
}