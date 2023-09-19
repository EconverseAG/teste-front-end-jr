import { Home } from "./pages/Home";
import { CartProvider } from "./provider/CartProvider";
import './styles/global.scss'

export function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  )
}

