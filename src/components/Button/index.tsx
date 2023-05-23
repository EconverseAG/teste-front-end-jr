import { IButton } from "../../interfaces";
import { Container } from "./style";

const Button = ({ children, size, onClick }: IButton) => {
  return (
    <Container size={size} type="button" onClick={onClick}>
      {children}
    </Container>
  );
};

export { Button };
