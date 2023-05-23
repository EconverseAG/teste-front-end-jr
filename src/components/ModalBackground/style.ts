import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;

  padding: 30px;
  background: var(--shadow-three);
`;

export { Container };
