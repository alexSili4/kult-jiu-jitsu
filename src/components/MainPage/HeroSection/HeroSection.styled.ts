import styled from '@emotion/styled';

export const Section = styled.section`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  padding-bottom: ${({ theme }) => theme.spacing(14)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    padding-bottom: ${({ theme }) => theme.spacing(10)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(8)}px;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(14.5)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(14)}px;
  }
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 20px;
  }
`;

export const Country = styled.span`
  color: #808080;
`;

export const PageTitle = styled.h1`
  color: #f9f9f9;
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 125.3px;
  line-height: 0.89;
  letter-spacing: -7.58px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    font-size: 173.6px;
    line-height: 1;
    letter-spacing: -6px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 200px;
    line-height: 0.85;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 240px;
    line-height: 0.83;
    letter-spacing: -8.3px;
  }
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
