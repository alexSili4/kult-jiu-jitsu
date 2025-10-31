import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing(5)}px;
  padding-right: ${({ theme }) => theme.spacing(5)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-left: ${({ theme }) => theme.spacing(10)}px;
    padding-right: ${({ theme }) => theme.spacing(10)}px;
  }
`;
