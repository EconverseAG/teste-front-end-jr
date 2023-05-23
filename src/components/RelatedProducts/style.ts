import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    & > div:nth-child(2) {
      padding-top: 150px;
    }
  }

  @media (max-width: 450px) {
    & > div:nth-child(2) {
      padding-top: 250px;
    }
  }
`;

export { Container };
