import styled, { keyframes } from "styled-components";

const menuOpen = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const menuClose = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const Container = styled.div`
  display: none;

  .menuOpen,
  .menuClose {
    display: block;
  }

  .menuOpen {
    animation: ${menuOpen} 0.5s ease-in;
  }

  .menuClose {
    animation: ${menuClose} 0.3s ease-out forwards;
  }

  & > div {
    width: 80%;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;

    display: none;
    flex-direction: column;
    justify-content: flex-start;

    z-index: 2000;

    background-color: var(--color-white);
    border-left: 2.5px solid var(--color-white-four);

    padding: 10px;

    & > div:nth-child(1) {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      padding: 18px 0;

      & > img {
        width: 25px;
        height: 25px;

        cursor: pointer;
      }
    }

    & > .divInput {
      display: flex;
      flex-direction: column;

      border-bottom: 1px solid var(--color-white-four);

      & > div:nth-last-child(1) {
        padding: 10px;
      }
    }

    & > .sessions {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding-top: 25px;

      & > p {
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;

        color: var(--color-gray);
        text-transform: uppercase;

        cursor: pointer;
        padding: 12px 0;
      }

      .aPink,
      p:hover {
        color: var(--color-pink);
        transition: 0.5s;
      }

      & > div:nth-last-child(1) {
        display: flex;
        flex-direction: row;
        align-items: center;

        cursor: pointer;
        padding-top: 12px;

        & > svg {
          margin-right: 7px;
        }

        &:hover {
          p {
            color: var(--color-pink);
          }

          path {
            stroke: var(--color-pink);
            transition: 0.5s;
          }
        }

        & > p {
          font-weight: 600;
          font-size: 12px;
          line-height: 18px;

          color: var(--color-gray);
          text-transform: uppercase;
        }
      }
    }

    & > .promotions {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      position: absolute;
      bottom: 0;

      & > div {
        display: flex;
        flex-direction: row;

        padding: 7px 0;

        & > p {
          padding-left: 12.12px;
          display: flex;
          flex-direction: row;

          font-weight: 500;
          font-size: 12px;
          line-height: 18px;

          color: var(--color-gray);

          & > p:nth-child(1) {
            padding-left: 3px;

            font-weight: 600;
            color: var(--color-pink);
          }
        }
      }
    }
  }
`;

export { Container };
