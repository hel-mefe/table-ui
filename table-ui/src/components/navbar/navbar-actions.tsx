import { Box } from "@mui/material"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import MailOutlineIcon from "@mui/icons-material/MailOutline"

import Avatar from "../avatar"
import { Profile } from "../../features/profile/profile.types"

interface NavbarActionsProps {
  profile: Profile
}

export default function NavbarActions({ profile }: NavbarActionsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "40px",
        gap: { xs: 2, md: 5 }
      }}
    >

      <NotificationsNoneIcon sx={{ cursor: "pointer" }} />

      <MailOutlineIcon sx={{ cursor: "pointer" }} />

      <Avatar profile={profile} />

    </Box>
  )
}