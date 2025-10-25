import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  z-index: 10;
  height: 300dvh;
`;

export const Container = styled.div`
  position: sticky;
  top: -200px;
  left: 0;
  height: calc(100dvh + 200px);
  background-color: #18181c;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: ${({ theme }) => theme.spacing(16)}px;
`;
