import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ProductProvider } from './providers/ProductContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
)
