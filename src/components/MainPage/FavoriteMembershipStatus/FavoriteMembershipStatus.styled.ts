import styled from '@emotion/styled';

export const FavoriteLabel = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  height: 30px;
  border-radius: 100px;
  padding-left: ${({ theme }) => theme.spacing(3.5)}px;
  padding-right: ${({ theme }) => theme.spacing(3.5)}px;
  border: 1px solid;
  border-color: #88a94b;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    min-width: 133px;
    height: 32px;
  }

  li:has(*:is(:hover, :focus)) & {
    border-color: ${({ theme }) => theme.colors.white};
  }
`;

export const FavoriteText = styled.p`
  display: flex;
  gap: ${({ theme }) => theme.spacing()}px;
  align-items: center;
  color: #88a94b;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.29;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 14px;
  }

  li:has(*:is(:hover, :focus)) & {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Symbol = styled.span`
  position: relative;
  font-size: 18px;
  translate: 0 4px;
`;
