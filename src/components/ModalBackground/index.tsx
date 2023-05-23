import { IModalBackground } from "../../interfaces";
import { Container } from "./style";
import { FC } from "react";

const ModalBackground: FC<IModalBackground> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { ModalBackground };
