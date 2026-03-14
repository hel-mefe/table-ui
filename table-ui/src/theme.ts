import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2F80ED"
    },

    background: {
      default: "#F4F7F9"
    },

    text: {
      primary: "#2F3A4A",
      secondary: "#687582"
    }
  },

  shape: {
    borderRadius: 8
  },
components: {
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "#F4F7F9",
        color: "#000"
      }
    }
  }
},
})