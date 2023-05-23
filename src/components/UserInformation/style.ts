import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1224px;
  height: 72px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .logoContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .divInput {
    width: 100%;
    max-width: 990px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    & > div:nth-child(2) {
      width: 100%;
      max-width: 234.5px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > svg {
        cursor: pointer;

        &:hover {
          path {
            stroke: var(--color-pink);
          }
        }

        &:nth-child(1):hover {
          path {
            fill: var(--color-pink);
          }
        }
      }
    }
  }

  @media (max-width: 1440px) {
    height: unset;
    flex-direction: column;

    padding: 20px 10px;

    & > .divInput {
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    align-items: flex-start;

    .logoContainer {
      width: 100%;

      & > div {
        display: flex;
      }
    }

    .divInput {
      display: none;
    }
  }
`;

export { Container };
