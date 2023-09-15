import Carousel from "../../../components/Carousel";
import Categories from "../../../components/Categories";
import Partners from "../../../components/Partners";
import ProductType from "../../../components/ProductType";
import RelatedProducts from "../../../components/RelatedProducts";
import BrandNavigator from "../../../components/Brand";
import Banner from "../Banner";

export default function Products() {
  return (
    <main>
      <Banner />
      <Categories />
      <section>
        <ProductType />
        <Carousel />
        <Partners />
      </section>
      <RelatedProducts />
      <BrandNavigator />
    </main>
  )
}