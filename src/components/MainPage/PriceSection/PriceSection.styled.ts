import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
`;

export const Content = styled.div`
  background-color: #18181c;
  padding-top: ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: ${({ theme }) => theme.spacing(20)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    padding-bottom: ${({ theme }) => theme.spacing(32)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-bottom: ${({ theme }) => theme.spacing(120)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-bottom: ${({ theme }) => theme.spacing(20)}px;
  }
`;
