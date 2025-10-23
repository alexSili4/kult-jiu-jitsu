import styled from '@emotion/styled';

export const Section = styled.section`
  position: sticky;
  top: 0;
  left: 0;
  height: 100dvh;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(12)}px;
  height: 100%;
`;

export const Location = styled.p`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
`;

export const Country = styled.span`
  color: #808080;
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.theater};
  color: #f9f9f9;
  font-size: 200px;
  font-weight: 700;
  letter-spacing: -8.3px;
`;

export const Symbol = styled.span`
  color: #88a94b;
`;

export const Video = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
