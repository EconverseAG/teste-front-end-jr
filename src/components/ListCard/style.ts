import styled from "styled-components";

const Container = styled.menu`
  width: 100%;
  max-width: 1268.73px;
  height: 284px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 150px auto 50px auto;

  @media (max-width: 1440px) {
    height: unset;
    margin: 150px auto 400px auto;
    flex-direction: column;
  }
`;

export { Container };
