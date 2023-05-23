import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 769px;
  height: 299.26px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  padding: 10px;
  background-color: var(--color-white);

  & > img {
    width: 30px;
    height: 30px;

    cursor: pointer;
  }

  & > div {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    & > div {
      display: flex;
      flex-direction: column;

      h2,
      a,
      span {
        color: var(--color-blue);
      }

      h2,
      a,
      p {
        font-weight: 400;
        line-height: 100%;
      }

      h2,
      span {
        font-size: 20px;
      }

      & > h2 {
        padding-bottom: 21.07px;
      }

      & > span {
        font-weight: 900;
        padding-bottom: 17.7px;
      }

      & > p {
        font-size: 10px;
        line-height: 150.5%;
        color: var(--color-black-four);

        width: 100%;
        max-width: 290px;
      }

      & > a {
        font-size: 12px;
        padding-top: 25.29px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: unset;
    padding: 20px;

    & > div {
      flex-direction: column;

      & > div {
        padding-top: 20px;
      }
    }
  }

  @media (max-width: 375px) {
    & > div {
      & > img {
        width: 100%;
      }
    }
  }
`;

export { Container };
