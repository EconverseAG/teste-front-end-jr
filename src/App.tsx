import Banner from "./components/Banner"
import Categories from "./components/Categories"
import Header from "./components/Header"
import Products from "./components/Products"
import RelatedProducts from "./components/RelatedProducts"
import "./scss/globalStyles.scss"

function App() {
  

  return (
    <>
     <Header />
     <Banner />
     <Categories />
     <RelatedProducts />
     <Products />
    </>
  )
}

export default App
