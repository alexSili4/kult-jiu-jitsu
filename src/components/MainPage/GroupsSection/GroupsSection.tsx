import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC, useRef } from 'react';
import {
  Content,
  Section,
  Container,
  Text,
  Day,
  Details,
  List,
  ListItem,
  Symbol,
  Card,
  AnimatedContainer,
  Row,
  Header,
  Period,
  Info,
  About,
  StartLabel,
  Start,
  Button,
} from './GroupsSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import SectionLabel from '@CommonComponents/SectionLabel';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import { IGroup } from '@/types/groups';

interface IGroupsSectionProps {
  groups: IGroup[];
}

interface IDayDetailsProps {
  format: string;
  days: string;
  coach: string;
  start: string;
  period: string;
}

const DayDetails: FC<IDayDetailsProps> = ({
  format,
  days,
  coach,
  start,
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
    <AnimatedContainer
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      <Card variants={itemVariants}>
        <Info>
          <Header>
            <Day>{days}</Day>
            <Period>{period}</Period>
          </Header>

          <About>
            <StartLabel>
              <Start>
                <Symbol>*</Symbol>
                <span>Старт</span>
                <span>{start}</span>
              </Start>
            </StartLabel>
            <Details>
              <Row>
                <Text>Тренер:</Text>
                <Text>{coach}</Text>
              </Row>
              <Row>
                <Text>Формат:</Text>
                <Text>{format}</Text>
              </Row>
            </Details>
          </About>
        </Info>

        <Button>Спробувати</Button>
      </Card>
    </AnimatedContainer>
  );
};

const GroupsSection: FC<IGroupsSectionProps> = ({ groups }) => {
  return (
    <Section>
      <SectionTitle text='Групи' isHidden />

      <Content>
        <GeneralContainer>
          <Container>
            <SectionLabel text='Групи' />

            <List>
              {groups.map(
                ({ days, period, start, details: { coach, format } }) => (
                  <ListItem key={`${days} ${period}`}>
                    <DayDetails
                      days={days}
                      coach={coach}
                      format={format}
                      start={start}
                      period={period}
                    />
                  </ListItem>
                )
              )}
            </List>
          </Container>
        </GeneralContainer>
      </Content>
    </Section>
  );
};

export default GroupsSection;
