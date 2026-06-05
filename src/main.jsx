import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalContext from './hook/context/GlobalContext.jsx'
import Home from './pages/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContext>
    {/* <App /> */}
    <Home />
    </GlobalContext>
  </StrictMode>,
)
