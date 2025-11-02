import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
`;

export const Container = styled.div`
  position: relative;
  background-color: #18181c;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const DescriptionWrap = styled.div`
  padding-top: ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: ${({ theme }) => theme.spacing(20)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 66.7vw;
    margin-left: auto;
    padding-top: ${({ theme }) => theme.spacing(20)}px;
    padding-bottom: ${({ theme }) => theme.spacing(45)}px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.32;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 44px;
  }
`;
