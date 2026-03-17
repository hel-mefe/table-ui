import { styled, ToggleButtonGroup } from "@mui/material"
import { palette } from "../../lib/theme.palette"

export const WaitlistTabGroup = styled(ToggleButtonGroup)({
  display: "flex",
  gap: 8,
  "& .MuiToggleButtonGroup-grouped": {
    marginLeft: "0 !important",
    "&:not(:first-of-type)": {
      borderLeft: "1px solid #807664",
    },
    "&.Mui-selected": {
      border: "none",
    },
    "&.Mui-selected:not(:first-of-type)": {
      borderLeft: "none",
    },
  },
  "& .MuiToggleButton-root": {
    height: 32,
    minHeight: 32,
    paddingInline: 8,
    paddingBlock: 0,
    textTransform: "none",
    fontWeight: 600,
    fontSize: 14,
    border: "1px solid #807664",
    borderRadius: 8,
    backgroundColor: "transparent",
    color: palette.text.primary,
    "&:hover": {
      backgroundColor: "rgba(128, 118, 100, 0.08)",
    },
    "&.Mui-selected": {
      backgroundColor: "#C8D5D9",
      color: palette.text.primary,
      border: "none",
      "&:hover": {
        backgroundColor: "#B8C8CC",
      },
    },
  },
})

