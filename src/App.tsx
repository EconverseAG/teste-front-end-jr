import Banner from "./components/Banner"
import BrandNavigation from "./components/BrandNavigation"
import Categories from "./components/Categories"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Partners from "./components/Partners"
import Products from "./components/Products"
import RelatedProducts from "./components/RelatedProducts"
import "./scss/globalStyles.scss"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"

function App() {
  

  return (
    <>
     <Header />
     <Banner />
     <Categories />
     <RelatedProducts />
     <Products />
     <Partners />
     <BrandNavigation />
     <Footer />
     <ToastContainer
       position="top-right"
       autoClose={3000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="light" 
       />
    </>
  )
}

export default App
