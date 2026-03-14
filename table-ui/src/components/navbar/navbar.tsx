import {
  AppBar,
  Toolbar,
  Box
} from "@mui/material"

import NavbarItem from "./navbar-item"
import NavbarActions from "./navbar-actions"

import { NavbarProps } from "./navbar.types"

export default function Navbar({ items, profile }: NavbarProps) {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#F4F7F9",
        color: "black"
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: 56,
          minHeight: 56,
          px: "80px",
          py: "8px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            height: "40px"
          }}
        >
          {items.map((item) => (
            <NavbarItem key={item.path} item={item} />
          ))}
        </Box>

        <NavbarActions profile={profile} />

      </Toolbar>
    </AppBar>
  )
}