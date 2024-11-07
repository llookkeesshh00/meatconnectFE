import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ContractProvider } from './contexts/ContractContext';// Import BrowserRouter
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContractProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContractProvider>
  </StrictMode>,
)

