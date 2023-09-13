import Banner from "./Banner";
import Menu from "./Menu";
import Products from "./Products";

export default function Home() {
  return(
    <>
      <Menu />
      <main>
        <Banner />
        <Products />
      </main>
    </>
  )
}