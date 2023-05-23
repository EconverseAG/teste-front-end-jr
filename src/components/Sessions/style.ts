import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1141px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;

  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    color: var(--color-gray);
    text-transform: uppercase;

    cursor: pointer;
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
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export { Container };
