import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
  </StrictMode>,
)
