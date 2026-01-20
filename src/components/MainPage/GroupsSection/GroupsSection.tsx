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
  Coach,
  Title,
  ContactsWrap,
  ContactsTextWrap,
  LinksWrap,
} from './GroupsSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import SectionLabel from '@CommonComponents/SectionLabel';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import { IGroup } from '@/types/groups';
import { coaches, SectionId } from '@/constants';
import SocialLinks from '@CommonComponents/SocialLinks';

interface IGroupsSectionProps {
  groups: IGroup[] | null;
  closeModal?: () => void;
}

interface IDayDetailsProps {
  format: string;
  days: string;
  coach: string;
  start: string;
  period: string;
  closeModal?: () => void;
}

const DayDetails: FC<IDayDetailsProps> = ({
  format,
  days,
  coach,
  start,
  period,
  closeModal,
}) => {
  const containerRef = useRef(null);

  const inView = useInView(containerRef, { amount: 0.1, once: true });

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
                {coaches.some((c) => c.name.startsWith(coach)) ? (
                  <Coach
                    type='button'
                    onClick={() => {
                      // Знаходимо секцію тренерів
                      const coachesSection = document.querySelector(
                        '[id*="coaches"]'
                      ) as HTMLElement;
                      if (coachesSection) {
                        const rect = coachesSection.getBoundingClientRect();
                        const scrollTop =
                          window.pageYOffset ||
                          document.documentElement.scrollTop;
                        const sectionTop = rect.top + scrollTop;
                        const sectionHeight = coachesSection.offsetHeight;

                        // Знаходимо індекс тренера в масиві coaches за коротким ім'ям
                        const coachIndex = coaches.findIndex((c) =>
                          c.name.startsWith(coach)
                        );

                        if (coachIndex !== -1) {
                          if (closeModal) {
                            closeModal();
                          }

                          // Використовуємо ту саму логіку що в CoachesList.tsx
                          // Кожен тренер займає 0.25 прогресу скролу
                          const start = coachIndex * 0.25;
                          const rotateEnd = start + 0.25;

                          // Скролимо на середину діапазону для оптимальної видимості
                          const scrollProgress =
                            start + (rotateEnd - start) / 2;
                          const targetScroll =
                            sectionTop + sectionHeight * scrollProgress;

                          window.scrollTo({
                            top: targetScroll,
                            behavior: 'smooth',
                          });
                        }
                      }
                    }}
                  >
                    {coach}
                  </Coach>
                ) : (
                  <Text>{coach}</Text>
                )}
              </Row>
              <Row>
                <Text>Формат:</Text>
                <Text>{format}</Text>
              </Row>
            </Details>
          </About>
        </Info>

        <Button onClick={closeModal} href={`#${SectionId.contacts}`}>
          Спробувати
        </Button>
      </Card>
    </AnimatedContainer>
  );
};

const GroupsSection: FC<IGroupsSectionProps> = ({ groups, closeModal }) => {
  return (
    <Section>
      <SectionTitle text='Групи' isHidden />

      <Content>
        <GeneralContainer>
          <Container>
            <SectionLabel text='Групи' />

            {groups ? (
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
                        closeModal={closeModal}
                      />
                    </ListItem>
                  )
                )}
              </List>
            ) : (
              <ContactsWrap>
                <ContactsTextWrap>
                  <Title>
                    З приводу актуального набору в групи початківців запитуйте у
                    нас в соцмережах.
                  </Title>
                  <Title>Можна приєднатись у будь-який момент.</Title>
                </ContactsTextWrap>

                <LinksWrap>
                  <SocialLinks />
                </LinksWrap>
              </ContactsWrap>
            )}
          </Container>
        </GeneralContainer>
      </Content>
    </Section>
  );
};

export default GroupsSection;
