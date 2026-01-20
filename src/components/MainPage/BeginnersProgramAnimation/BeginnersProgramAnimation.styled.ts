import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 537px;
`;

export const TextWrap = styled.div`
  position: relative;
  width: 1046px;
  height: 526px;
`;

export const LeftShadow = styled.img`
  position: absolute;
  left: 3.3vw;
  bottom: 159px;
  width: 278px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    left: 7.5vw;
  }
`;

export const RightShadow = styled.img`
  position: absolute;
  right: 3.3vw;
  top: 85px;
  width: 278px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    right: 7.5vw;
  }
`;

export const TopShadow = styled.img`
  position: absolute;
  left: 21vw;
  top: 80px;
  width: 505px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    left: 28vw;
  }
`;

export const BottomShadow = styled.img`
  position: absolute;
  right: 22vw;
  bottom: 93px;
  width: 151px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    right: 29vw;
  }
`;
