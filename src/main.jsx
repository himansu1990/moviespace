import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

if (sessionStorage.redirect) {
  history.replaceState(null, null, sessionStorage.redirect)
  sessionStorage.removeItem('redirect')
}

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
