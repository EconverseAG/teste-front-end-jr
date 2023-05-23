import { OtherRelatedProductsSecond } from "../../components/OtherRelatedProductsSecond";
import { OtherRelatedProducts } from "../../components/OtherRelatedProducts";
import { ModalDetailsProduct } from "../../components/ModalDetailsProduct";
import { RelatedProducts } from "../../components/RelatedProducts";
import { ModalBackground } from "../../components/ModalBackground";
import { ProductContext } from "../../contexts/ProductContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Categories } from "../../components/Categories";
import { ListBrands } from "../../components/ListBrands";
import { ListCards } from "../../components/ListCard";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import React, { useContext } from "react";
import { Container } from "./style";

const Dashboard = () => {
  const { openModal, setCheckbox } = useContext(ProductContext);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Dashboard | VTEX" />
      </HelmetProvider>
      {openModal ? (
        <ModalBackground>
          <ModalDetailsProduct />
        </ModalBackground>
      ) : null}
      <Header />
      <Banner />
      <Container onClick={() => setCheckbox(false)}>
        <Categories />
        <RelatedProducts />
        <ListCards />
        <OtherRelatedProducts />
        <ListCards />
        <ListBrands />
        <OtherRelatedProductsSecond />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export { Dashboard };
