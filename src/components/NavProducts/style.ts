import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1264px;
  height: 89px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 120px;
  margin: 0 auto;

  & > div:nth-child(2) {
    width: 100%;
    height: 40px;

    flex-wrap: wrap;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 10px;

    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;

      align-items: center;
      text-transform: uppercase;
      color: var(--color-gray-six);

      width: 100%;
      max-width: 210px;

      cursor: pointer;
      padding: 12px 50px;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 1.5px solid var(--color-gray-five);

      & > p {
      }
      &:nth-child(1),
      &:hover {
        font-weight: 700;
        color: var(--color-pink);
      }
    }
  }
`;

export { Container };
