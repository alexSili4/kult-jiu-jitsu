import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  background-color: #18181c;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)}px;
  padding-top: ${({ theme }) => theme.spacing(20)}px;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Copyright = styled.p`
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
`;

export const Sun = styled.a`
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
`;
