import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
`;

export const Content = styled.div`
  min-height: 100dvh;
  background-color: #18181c;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-top: ${({ theme }) => theme.spacing(25)}px;
  padding-bottom: ${({ theme }) => theme.spacing(16)}px;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
`;

export const Symbol = styled.span`
  color: #88a94b;
`;
