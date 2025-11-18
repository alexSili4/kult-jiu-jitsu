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
} from './PricesListDesk.styled';
import price from '@/constants/price';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import FavoriteMembershipStatus from '@MainPageComponents/FavoriteMembershipStatus';

const PricesListDesk: FC = () => {
  const membershipsRef = useRef(null);
  const servicesRef = useRef(null);

  const membershipsInView = useInView(membershipsRef, {
    amount: 0.7,
    once: true,
  });
  const servicesInView = useInView(servicesRef, { amount: 1, once: true });

  const animateMemberships: VariantLabels = membershipsInView
    ? 'visible'
    : 'hidden';
  const animateServices: VariantLabels = servicesInView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const transition: Transition = {
    type: 'spring',
    duration: 1,
    bounce: 0.4,
  };

  const elementVariants: Variants = {
    hidden: {
      y: 80,
      opacity: 0,
      transition,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  const { memberships, services } = price;

  return (
    <Container>
      <Memberships
        ref={membershipsRef}
        variants={containerVariants}
        initial='hidden'
        animate={animateMemberships}
      >
        {memberships.map(
          ({ benefits, name, price: { amount, period }, isFavorite }) => (
            <MembershipsListItem key={name}>
              <MembershipDetails variants={elementVariants}>
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
                  <Button type='button'>Спробувати</Button>
                </MembershipPrice>
              </MembershipDetails>
            </MembershipsListItem>
          )
        )}
      </Memberships>

      <Services
        ref={servicesRef}
        variants={containerVariants}
        initial='hidden'
        animate={animateServices}
      >
        {services.map(({ addTitle, services, title }) => (
          <ServicesListItem key={title}>
            <Service variants={elementVariants}>
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
          </ServicesListItem>
        ))}
      </Services>
    </Container>
  );
};

export default PricesListDesk;
