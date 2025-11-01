import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';

const aboutListGap = theme.spacing(5);

export const Section = styled.section`
  background-color: #18181c;
`;

export const BannerWrap = styled.div`
  position: relative;
  height: 100dvh;
`;

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.p`
  position: absolute;
  left: 40px;
  bottom: 0;
  color: #f9f9f9;
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 200px;
  line-height: 1;
  letter-spacing: -8.3px;

  &::after {
    content: '*';
    color: #88a94b;
  }
`;

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: ${({ theme }) => theme.spacing(37)}px;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(20)}px;
  width: 67.2vw;
`;

export const AboutText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 44px;
  line-height: 1.32;
`;

export const About = styled.ul`
  display: flex;
  gap: ${aboutListGap}px;
`;

export const ListItem = styled.li``;

export const AboutListItem = styled(ListItem)`
  width: calc(${getFlexItemWidth({ listGap: aboutListGap, listLength: 3 })});
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)}px;

  li:not(:first-of-type) > & {
    border-left: 1px solid ${({ theme }) => theme.colors.white10};
    padding-left: ${({ theme }) => theme.spacing(8)}px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;

  & > svg {
    width: 32px;
    height: 32px;
    color: #252525;
  }
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 44px;
  line-height: 1.32;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2.5)}px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;

export const TextWithSymbol = styled(Text)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;

  &::before {
    content: '*';
    color: #88a94b;
    font-family: ${({ theme }) => theme.fontFamily.involve};
    font-weight: 500;
    font-size: 22px;
    line-height: 13.2px;
  }
`;

export const Levels = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
`;
