import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MiPrimerComponent } from './component/MiPrimerComponent/MiPrimerComponent'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MiPrimerComponent/>
  </StrictMode>,
)
