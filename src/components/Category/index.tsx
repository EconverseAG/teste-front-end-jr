import { ICategory } from "../../interfaces";
import { Container } from "./style";

const Category = ({ src, alt, title }: ICategory) => {
  return (
    <Container>
      <div>
        <img src={src} alt={alt} />
      </div>

      <p>{title}</p>
    </Container>
  );
};

export { Category };
