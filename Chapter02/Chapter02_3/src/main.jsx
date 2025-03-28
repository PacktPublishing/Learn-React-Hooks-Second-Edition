import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

const root = createRoot(document.getElementById('root'))

export function renderApp() {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

renderApp()
