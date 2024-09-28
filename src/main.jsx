import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import State from './components/state.jsx'
import Form from './components/form.jsx'
import Useeff from './components/Useeff.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Useeff/>
  </StrictMode>
)
