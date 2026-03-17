import { Box } from "@mui/material"
import { MainLayoutProps } from "./MainLayout.types"

export default function MainLayout({
  navbar,
  sidebar,
  children,
}: MainLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#FFFFFF",
        overflow: "auto",
      }}
    >
      {navbar}

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          py: 5,
          px: 3,
          minHeight: 0,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: 288 },
            flexShrink: 0,
            mb: { xs: 2, md: 0 },
          }}
        >
          {sidebar}
        </Box>
        <Box
          component="main"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            overflow: "auto",
            bgcolor: "background.paper",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}
