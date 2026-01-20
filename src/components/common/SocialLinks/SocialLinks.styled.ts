import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';

const linksGap = theme.spacing(2.5);

export const Container = styled.div`
  display: flex;
  gap: ${linksGap}px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(${getFlexItemWidth({ listGap: linksGap, listLength: 2 })});
  height: 80px;
  background-color: #18181c;
  border-radius: 20px;
  color: #808080;

  & > svg {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 140px;

    & > svg {
      width: 60px;
      height: 60px;
    }
  }
`;
