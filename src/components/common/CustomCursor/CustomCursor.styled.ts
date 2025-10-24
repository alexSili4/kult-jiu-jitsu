import styled from '@emotion/styled';

export const Cursor = styled.div`
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: transform 0.08s ease, opacity 0.12s ease;
`;
