import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  background-color: #18181c;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
  padding-top: ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(1.5)}px;
    padding-top: ${({ theme }) => theme.spacing(20)}px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: 0px;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Copyright = styled.p`
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 20px;
  }
`;

export const Sun = styled.a`
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 20px;
  }
`;
