import styled, { css } from "styled-components";

interface IButtonStyle {
  size: "large" | "medium" | "small";
}

const Container = styled.button<IButtonStyle>`
  width: 100%;

  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;

  border-radius: 4px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.5s;
  background-color: var(--color-pink);
  border: 1.5px solid var(--color-pink);

  color: var(--color-white);

  &:hover {
    background-color: var(--color-pink-two);
    border-color: var(--color-pink-two);
  }

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          max-width: 245px;
          height: 44px;
        `;

      case "medium":
        return css`
          max-width: 134.59px;
          height: 48px;
        `;

      case "small":
        return css`
          max-width: 62px;
          height: 45px;
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
