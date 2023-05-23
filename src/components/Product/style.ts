import styled from "styled-components";

const Container = styled.div`
  width: 270px;
  height: 500px;

  border-radius: 10px;
  background-color: var(--color-white);
  box-shadow: 0px 3px 19px var(--shadow-three);

  padding: 22px 12px 16px 11px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-right: 62px;

  & > div {
    & > h3 {
      font-weight: 300;
      font-size: 15px;
      line-height: 22px;

      color: var(--color-gray-two);
      padding-bottom: 12px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    & > div:nth-child(2) {
      padding-bottom: 2px;

      & > span:nth-child(1) {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        color: var(--color-gray-seven);

        padding-bottom: 2px;
        text-decoration: line-through;
      }

      & > span:nth-child(2) {
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;

        color: var(--color-gray-two);
      }
    }

    & > div:nth-child(3) {
      padding-bottom: 12px;

      p,
      span {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
      }

      & > p {
        color: var(--color-gray-two);
        padding-bottom: 7px;
      }

      & > span {
        color: var(--color-pink);
      }
    }
  }

`;

export { Container };
