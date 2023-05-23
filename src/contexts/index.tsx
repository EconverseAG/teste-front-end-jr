import { ProductContextProvider } from "./ProductContext";
import { IModalBackground } from "../interfaces";

const Providers = ({ children }: IModalBackground) => {
  return <ProductContextProvider>{children}</ProductContextProvider>;
};

export { Providers };
