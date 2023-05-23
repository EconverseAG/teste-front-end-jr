import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  padding: 150px 15px 15px 15px;

  & > div {
    width: 100%;
    max-width: 700px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > div {
      & > p:nth-child(2) {
        padding: 30px 0;
      }

      & > p:nth-last-child(1) {
        color: var(--color-gray);
        padding-top: 8px;
      }
    }
  }
`;

export { Container };
