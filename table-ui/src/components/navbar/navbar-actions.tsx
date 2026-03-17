import { Box } from "@mui/material"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined"

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

      <NotificationsNoneIcon sx={{ cursor: "pointer", color: "#677582" }} />

      <ForumOutlinedIcon sx={{ cursor: "pointer", color: "#677582" }} />

      <Avatar profile={profile} />

    </Box>
  )
}