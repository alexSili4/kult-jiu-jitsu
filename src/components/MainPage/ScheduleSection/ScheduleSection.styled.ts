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
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
