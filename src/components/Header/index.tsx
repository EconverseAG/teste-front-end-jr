import { InitialInformation } from "../InitialInformation";
import { UserInformation } from "../UserInformation";
import { Sessions } from "../Sessions";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <InitialInformation />
      <hr />
      <UserInformation />
      <hr />
      <Sessions />
    </Container>
  );
};

export { Header };
