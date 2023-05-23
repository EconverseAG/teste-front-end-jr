import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1264px;
  height: 45px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  & > hr {
    width: 100%;
    max-width: 360px;
    height: 1px;

    border: none;
    background-color: var(--color-gray-four);

    @media (max-width: 1440px) {
      display: none;
    }
  }

  & > h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;

    color: var(--color-pink);
    padding: 0 34px 4px 34px;

    text-align: center;

    @media (max-width: 415px) {
      padding-bottom: 60px;
    }
  }
`;

export { Container };
