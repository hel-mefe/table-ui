import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import { ThemeProvider } from "@mui/material/styles"
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { CssBaseline } from "@mui/material"
import { theme } from "./theme"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <App />
    </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
