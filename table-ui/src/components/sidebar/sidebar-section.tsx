import { Stack, Typography } from "@mui/material"

interface SidebarSectionProps {
  title: string
  children: React.ReactNode
}

export default function SidebarSection({
  title,
  children
}: SidebarSectionProps) {
  return (
    <Stack spacing={1.5}>
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
          color: "#2F3A4A"
        }}
      >
        {title}
      </Typography>

      <Stack spacing={1}>
        {children}
      </Stack>
    </Stack>
  )
}