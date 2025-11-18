import styled from '@emotion/styled';
import { theme } from '@/constants';
import { motion } from 'framer-motion';
import { getFlexItemWidth } from '@/utils';

const listGap = theme.spacing(5);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

// Memberships
export const Memberships = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${listGap}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ListItem = styled.li``;

export const MembershipsListItem = styled(ListItem)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    width: calc(${getFlexItemWidth({ listGap, listLength: 2 })});
  }
`;

export const MembershipDetailsWrap = styled(motion.div)``;

export const MembershipDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(8)}px;
  background-color: #252525;
  padding: ${({ theme }) => theme.spacing(5)}px;
  border-radius: 16px;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
    padding: ${({ theme }) => theme.spacing(8)}px;
  }

  ul:not(:has(div:is(:hover, :focus))) > li:first-of-type & {
    background-color: #88a94b;
  }

  li:has(div:is(:hover, :focus)) &:not(:is(:hover, :focus)) {
    background-color: #252525;
  }

  &:is(:hover, :focus) {
    background-color: #88a94b;
  }
`;

export const MembershipContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-bottom: ${({ theme }) => theme.spacing(6)}px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white10};
`;

export const Name = styled.p`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-style: Bold Condensed;
  font-size: 40px;
  line-height: 1;
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
  font-size: 16px;
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
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
  }
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
  font-size: 30px;
  line-height: 1;
`;

export const PricePeriod = styled.span`
  color: #808080;
  font-size: 16px;
  line-height: 1.2;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  li:first-of-type & {
    color: ${({ theme }) => theme.colors.white60};
  }

  li:has(*:is(:hover, :focus)) & {
    color: ${({ theme }) => theme.colors.white60};
  }
`;

export const Button = styled.a`
  background-color: #18181c;
  padding-top: ${({ theme }) => theme.spacing(5)}px;
  padding-bottom: ${({ theme }) => theme.spacing(5)}px;
  border-radius: 100px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.2px;
  text-align:center;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc},
    color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.white};
    color: #18181c;
  }
`;

// Services
export const Services = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ServicesListItem = styled(ListItem)``;

export const ServiceWrap = styled(motion.div)``;

export const Service = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
  padding-top: ${({ theme }) => theme.spacing(6)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    padding: ${({ theme }) => theme.spacing(8)}px;
  }

  *:not(:first-of-type) > * > & {
    border-top: 1px solid ${({ theme }) => theme.colors.white10};
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
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;
