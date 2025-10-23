import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
`;

export const Content = styled.div`
  min-height: 100dvh;
  background-color: #18181c;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-top: ${({ theme }) => theme.spacing(40)}px;
  padding-bottom: ${({ theme }) => theme.spacing(100)}px;
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
  font-family: 'Involve Regular', 'Involve Regular Placeholder', sans-serif;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
`;

export const Text = styled.p`
  width: 64.4vw;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Involve Regular', 'Involve Regular Placeholder', sans-serif;
  font-size: 44px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.43;
`;

export const Symbol = styled.span`
  color: #88a94b;
`;
