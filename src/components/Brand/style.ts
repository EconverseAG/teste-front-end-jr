import styled from "styled-components";

const Container = styled.div`
  min-width: 211px;
  height: 211px;

  border-radius: 50%;

  background: var(--color-white);
  box-shadow: 0px 7px 20px var(--shadow);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-left: 40px;
`;

export { Container };
