import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--color-white);
  box-shadow: 0px 8px 16px var(--shadow-two);

  & > hr {
    width: 100%;
    border: none;
    height: 1px;
    background: var(--color-white-four);

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;

    z-index: 1000;
  }
`;

export { Container };
