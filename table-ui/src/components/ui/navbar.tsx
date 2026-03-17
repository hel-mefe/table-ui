import { styled, Toolbar } from "@mui/material"

export const ResponsiveNavbarToolbar = styled(Toolbar)({
  height: 56,
  minHeight: 56,
  paddingInline: "80px",
  paddingBlock: "8px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 0,
  "@media (max-width: 899.95px)": {
    height: 64,
    minHeight: 64,
    paddingInline: "16px",
  },
})

