import styled from "styled-components";

const Container = styled.div`
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    & > p {
      font-weight: 700;
      font-size: 15px;
      line-height: 22px;

      padding: 4px 0 32px 0;
    }
  }
`;

export { Container };
