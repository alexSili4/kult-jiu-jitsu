import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
`;

export const Content = styled.div`
  min-height: 100dvh;
  background-color: #18181c;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-top: ${({ theme }) => theme.spacing(16)}px;
  padding-bottom: ${({ theme }) => theme.spacing(30)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: ${({ theme }) => theme.spacing(40)}px;
    padding-bottom: ${({ theme }) => theme.spacing(110)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 64.4vw;
    font-size: 44px;
    line-height: 1.43;
  }
`;
