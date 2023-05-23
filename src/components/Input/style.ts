import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 657px;
  height: 48px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
  background-color: var(--color-white-five);
  border: 1.5px solid var(--color-white-five);

  padding: 10px 16px 10px 24px;

  & > input {
    width: 100%;
    height: 100%;

    border: none;

    font-weight: 500;
    font-size: 14px;
    line-height: 21px;

    background-color: var(--color-white-five);

    &::placeholder {
      color: var(--color-gray);
    }

    &:focus::-webkit-input-placeholder {
      color: var(--color-transparent);
    }

    &:focus::-moz-placeholder {
      color: var(--color-transparent);
    }
  }

  & > img {
    cursor: pointer;
  }

  @media (max-width: 1440px) {
    margin: 15px 0;
  }
`;

export { Container };
