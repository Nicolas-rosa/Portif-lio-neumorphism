import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import Techs from './Components/Techs.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Techs/>
    <App />
  </StrictMode>,
)
