import { Box, TextField, Typography, Stack } from "@mui/material"
import { styled } from "@mui/material"

export const SidebarContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 288,
  backgroundColor: "#F8FAFC",
  padding: "24px 16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxSizing: "border-box",
  fontFamily: "'Poppins', sans-serif",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}))

export const SidebarTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    width: "100%",
    "& fieldset": { borderColor: "#DDE2E8" },
    "&:hover fieldset": { borderColor: "#1A78F2" },
  },
  "& .MuiInputBase-input": {
    padding: "10px 14px",
    fontSize: "14px",
    fontWeight: 600,
    color: "#324054",
  },
})

export const SidebarSectionContainer = styled(Stack)({
  marginBottom: 24,
})

export const SidebarSectionTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "20px",
  color: "#324054",
  letterSpacing: "0%",
})

