import { Typography, Box } from "@mui/material"
import { NavItem } from "../../features/navigation/navigation.types"

interface NavbarItemProps {
  item: NavItem
}

export default function NavbarItem({ item }: NavbarItemProps) {
  const isActive = item.label === "Human Resources"

  return (
    <Box
      component="a"
      href={item.path}
      sx={{
        height: "40px",
        display: "flex",
        alignItems: "center",
        px: "12px",
        cursor: "pointer",
        textDecoration: "none",
        color: isActive ? "#1A78F2" : "text.primary"
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 500
        }}
      >
        {item.label}
      </Typography>
    </Box>
  )
}