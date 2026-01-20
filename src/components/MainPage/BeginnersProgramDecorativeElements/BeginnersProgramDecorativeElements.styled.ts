import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: #18181c;
  padding-top: ${({ theme }) => theme.spacing(15)}px;
  padding-bottom: ${({ theme }) => theme.spacing(21)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(30)}px;
    padding-bottom: ${({ theme }) => theme.spacing(30)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white10};
`;

export const LeftWrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing(11)}px;
`;

export const BambooLeft = styled.img`
  width: 148px;
`;

export const MansLeft = styled.img`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: block;
    width: 250px;
  }
`;

export const BambooRight = styled.img`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: block;
    width: 202px;
  }
`;

export const MansRight = styled.img`
  width: 206px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 272px;
  }
`;
