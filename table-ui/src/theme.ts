import { createTheme } from "@mui/material/styles"
import { palette } from "./lib/theme.palette"

export const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: {
      main: palette.primary.main,
      dark: palette.primary.hover,
      light: palette.primary.light,
    },
    background: {
      default: palette.background.app,
      paper: "#FFFFFF",
    },
    text: {
      primary: palette.text.primary,
      secondary: palette.text.secondary,
    },
    divider: palette.border.default,
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
        contained: {
          "&:hover": {
            backgroundColor: palette.primary.hover,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#FFFFFF",
            borderRadius: 1,
            "& fieldset": {
              borderColor: palette.border.default,
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: palette.border.default,
          "&.Mui-checked": {
            color: palette.primary.main,
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.sidebar,
          "& .MuiTableCell-head": {
            fontWeight: 600,
            color: palette.text.primary,
            borderBottom: `1px solid ${palette.border.default}`,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${palette.border.default}`,
        },
      },
    },
  },
})
