import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
`;

export const Content = styled.div`
  background-color: #18181c;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-top: ${({ theme }) => theme.spacing(15)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    min-height: 100vh;
    padding-bottom: ${({ theme }) => theme.spacing(10)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(25)}px;
    padding-bottom: ${({ theme }) => theme.spacing(16)}px;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row;
  }
`;
