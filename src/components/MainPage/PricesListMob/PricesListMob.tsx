import { FC, useRef } from 'react';
import {
  Container,
  BenefitText,
  Benefits,
  Button,
  Header,
  ListItem,
  MembershipContent,
  MembershipDetails,
  MembershipPrice,
  Memberships,
  MembershipsListItem,
  Name,
  Price,
  PriceAmount,
  PricePeriod,
  Service,
  ServiceItem,
  ServiceName,
  ServicePrice,
  ServiceTitle,
  Services,
  ServicesList,
  ServicesListItem,
  MembershipDetailsWrap,
  ServiceWrap,
} from './PricesListMob.styled';
import price from '@/constants/price';
import FavoriteMembershipStatus from '@MainPageComponents/FavoriteMembershipStatus';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import { SectionId } from '@/constants';

interface IMembershipCardProps {
  name: string;
  benefits: string[];
  amount: string;
  period: string;
  isFavorite: boolean;
}

interface IServiceCardProps {
  title: string | null;
  addTitle: string | null;
  services: {
    service: string;
    price: string | null;
  }[];
}

const MembershipCard: FC<IMembershipCardProps> = ({
  name,
  isFavorite,
  benefits,
  amount,
  period,
}) => {
  const containerRef = useRef(null);

  const inView = useInView(containerRef, { amount: 1, once: true });

  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: 1,
    bounce: 0.4,
  };

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0, transition },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <MembershipDetailsWrap
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      <MembershipDetails variants={itemVariants}>
        <MembershipContent>
          <Header>
            <Name>{name}</Name>
            {isFavorite && <FavoriteMembershipStatus />}
          </Header>

          <Benefits>
            {benefits.map((benefit) => (
              <ListItem key={benefit}>
                <BenefitText>{benefit}</BenefitText>
              </ListItem>
            ))}
          </Benefits>
        </MembershipContent>

        <MembershipPrice>
          <Price>
            <PriceAmount>{amount}</PriceAmount>
            <PricePeriod>{`/ ${period}`}</PricePeriod>
          </Price>
          <Button href={`#${SectionId.contacts}`}>Спробувати</Button>
        </MembershipPrice>
      </MembershipDetails>
    </MembershipDetailsWrap>
  );
};

const ServiceCard: FC<IServiceCardProps> = ({ title, addTitle, services }) => {
  const containerRef = useRef(null);

  const inView = useInView(containerRef, { amount: 1, once: true });

  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: 1,
    bounce: 0.4,
  };

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0, transition },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <ServiceWrap
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      <Service variants={itemVariants}>
        {title && <ServiceTitle>{title}</ServiceTitle>}
        {addTitle && <ServiceTitle>{addTitle}</ServiceTitle>}
        <ServicesList>
          {services.map(({ price, service }) => (
            <ListItem key={service}>
              <ServiceItem>
                <ServiceName>{service}</ServiceName>
                <ServicePrice>{price}</ServicePrice>
              </ServiceItem>
            </ListItem>
          ))}
        </ServicesList>
      </Service>
    </ServiceWrap>
  );
};

const PricesListMob: FC = () => {
  const { memberships, services } = price;

  return (
    <Container>
      <Memberships>
        {memberships.map(
          ({ benefits, name, price: { amount, period }, isFavorite }) => (
            <MembershipsListItem key={name}>
              <MembershipCard
                amount={amount}
                benefits={benefits}
                isFavorite={isFavorite}
                name={name}
                period={period}
              />
            </MembershipsListItem>
          )
        )}
      </Memberships>

      <Services>
        {services.map(({ addTitle, services, title }) => (
          <ServicesListItem key={title}>
            <ServiceCard
              addTitle={addTitle}
              services={services}
              title={title}
            />
          </ServicesListItem>
        ))}
      </Services>
    </Container>
  );
};

export default PricesListMob;
