import styled from '@emotion/styled';

export const Section = styled.section`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  height: 100dvh;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(12)}px;
`;

export const Location = styled.p`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  font-family: 'Involve Regular', 'Involve Regular Placeholder', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
`;

export const Country = styled.span`
  color: #808080;
`;

export const PageTitle = styled.h1`
  font-family: 'Theater Bold Condensed', 'Theater Bold Condensed Placeholder',
    sans-serif;
  color: #f9f9f9;
  font-size: 200px;
  font-weight: 400;
  letter-spacing: -8.3px;
`;

export const Symbol = styled.span`
  color: #88a94b;
`;
