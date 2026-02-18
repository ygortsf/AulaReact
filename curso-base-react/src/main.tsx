import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App'
import { Components } from './Componentes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Components/>
  </StrictMode>,
)
