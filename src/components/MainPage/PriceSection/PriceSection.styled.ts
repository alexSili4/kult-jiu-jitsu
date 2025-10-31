import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const listGap = theme.spacing(5);

export const Section = styled.section`
  position: relative;
`;

export const Content = styled.div`
  background-color: #18181c;
  padding-top: ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: ${({ theme }) => theme.spacing(120)}px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(11)}px;
`;

// Memberships
export const Memberships = styled(motion.ul)`
  display: flex;
  gap: ${listGap}px;
`;

export const ListItem = styled.li``;

export const MembershipsListItem = styled(ListItem)`
  width: calc(${getFlexItemWidth({ listGap, listLength: 3 })});
`;

export const MembershipDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(10)}px;
  height: 100%;
  background-color: #252525;
  padding: ${({ theme }) => theme.spacing(10)}px;
  border-radius: 16px;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  ul:not(:has(div:is(:hover, :focus))) > li:first-of-type > & {
    background-color: #88a94b;
  }

  li:has(div:is(:hover, :focus)) > &:not(:is(:hover, :focus)) {
    background-color: #252525;
  }

  &:is(:hover, :focus) {
    background-color: #88a94b;
  }
`;

export const MembershipContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: ${({ theme }) => theme.spacing(6)}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white10};
`;

export const Name = styled.p`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 44px;
  letter-spacing: -0.8px;
`;

export const Benefits = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const BenefitText = styled.p`
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  li:first-of-type & {
    color: #f9f9f9;
  }

  li:has(*:is(:hover, :focus)) & {
    color: #f9f9f9;
  }
`;

export const MembershipPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)}px;
`;

export const Price = styled.p`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing(2.5)}px;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
`;

export const PriceAmount = styled.span`
  color: #f9f9f9;
  font-size: 32px;
  line-height: 1;
`;

export const PricePeriod = styled.span`
  color: #808080;
  font-size: 20px;
  line-height: 1.2;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  li:first-of-type & {
    color: ${({ theme }) => theme.colors.white60};
  }

  li:has(*:is(:hover, :focus)) & {
    color: ${({ theme }) => theme.colors.white60};
  }
`;

export const Button = styled.button`
  background-color: #18181c;
  padding-top: ${({ theme }) => theme.spacing(5)}px;
  padding-bottom: ${({ theme }) => theme.spacing(5)}px;
  border-radius: 100px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.2px;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc},
    color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.white};
    color: #18181c;
  }
`;

export const FavoriteLabel = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 133px;
  height: 32px;
  border-radius: 100px;
  padding-left: ${({ theme }) => theme.spacing(3.5)}px;
  padding-right: ${({ theme }) => theme.spacing(3.5)}px;
  border: 1px solid;
  border-color: #88a94b;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

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
  font-size: 14px;
  line-height: 1.29;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  li:has(*:is(:hover, :focus)) & {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Symbol = styled.span`
  position: relative;
  font-size: 18px;
  translate: 0 4px;
`;

// Services
export const Services = styled(motion.ul)`
  display: flex;
`;

export const ServicesListItem = styled(ListItem)`
  width: calc(${getFlexItemWidth({ listGap: 0, listLength: 3 })});
`;

export const Service = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(7)}px;
  padding-top: ${({ theme }) => theme.spacing(8)}px;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;

  *:not(:first-of-type) > & {
    border-left: 1px solid ${({ theme }) => theme.colors.white10};
  }
`;

export const ServiceTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ServiceName = styled.p`
  flex-grow: 1;
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;

export const ServicePrice = styled.p`
  flex-shrink: 1;
  color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;
