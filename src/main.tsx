import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "./frontend/Contexts/ThemeContext.tsx"
import AppRoutes from './frontend/routes/AppRoutes'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <AppRoutes/>
    </ThemeProvider>
  </StrictMode>,
)
