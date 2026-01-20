import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  z-index: 10;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 300vh;
  }
`;

export const Container = styled.div`
  background-color: #18181c;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    position: sticky;
    top: -200px;
    left: 0;
    height: calc(100vh + 200px);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-bottom: ${({ theme }) => theme.spacing(4)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-bottom: ${({ theme }) => theme.spacing(16)}px;
  }
`;
