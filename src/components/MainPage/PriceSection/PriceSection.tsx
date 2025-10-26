import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC, useRef } from 'react';
import {
  Section,
  Content,
  ListItem,
  MembershipDetails,
  Memberships,
  BenefitText,
  Benefits,
  Header,
  Name,
  Price,
  Button,
  PriceAmount,
  PricePeriod,
  FavoriteLabel,
  FavoriteText,
  Symbol,
  MembershipContent,
  MembershipPrice,
  MembershipsListItem,
  Container,
  Service,
  ServiceTitle,
  Services,
  ServicesList,
  ServiceName,
  ServiceItem,
  ServicePrice,
  ServicesListItem,
} from './PriceSection.styled';
import price from '@/constants/price';
import SectionTitle from '@CommonComponents/SectionTitle';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';

const FavoriteStatus: FC = () => {
  return (
    <FavoriteLabel>
      <FavoriteText>
        <Symbol>*</Symbol>
        <span>Наш фаворит</span>
      </FavoriteText>
    </FavoriteLabel>
  );
};

const PriceSection: FC = () => {
  const membershipsRef = useRef(null);
  const servicesRef = useRef(null);

  const membershipsInView = useInView(membershipsRef, { amount: 0.7 });
  const servicesInView = useInView(servicesRef, { amount: 1 });

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
    <Section>
      <SectionTitle text='Вартість' isHidden />

      <Content>
        <GeneralContainer>
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
                          {isFavorite && <FavoriteStatus />}
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
        </GeneralContainer>
      </Content>
    </Section>
  );
};

export default PriceSection;
