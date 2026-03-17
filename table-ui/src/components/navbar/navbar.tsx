import {
  AppBar,
  Box
} from "@mui/material"

import NavbarItem from "./navbar-item"
import NavbarActions from "./navbar-actions"
import { ResponsiveNavbarToolbar } from "../ui/navbar"
import { StaggerContainer, StaggerItem, FadeIn } from "../motion"

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
      <ResponsiveNavbarToolbar disableGutters>
        <StaggerContainer
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            height: "40px",
            flexWrap: "wrap",
          }}
        >
          {items.map((item) => (
            <StaggerItem key={item.path}>
              <NavbarItem item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <Box
            sx={{
              mt: { xs: 0.5, md: 0 },
              alignSelf: { xs: "flex-end", md: "center" },
            }}
          >
            <NavbarActions profile={profile} />
          </Box>
        </FadeIn>

      </ResponsiveNavbarToolbar>
    </AppBar>
  )
}