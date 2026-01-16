import { schedule, coaches } from '@/constants';
import { IProgramDetails } from '@/types/schedule';
import { FC, useRef } from 'react';
import {
  List,
  ListItem,
  Container,
  Day,
  Programs,
  Coach,
  DayInfo,
  Days,
  Program,
  Time,
  Symbol,
  Wrapper,
} from './ScheduleList.styled';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';

interface IDayDetailsProps {
  programs: IProgramDetails[][];
  days: string;
}

interface IProgramDetailsProps {
  program: IProgramDetails[];
}

const ProgramDetails: FC<IProgramDetailsProps> = ({ program }) => {
  return (
    <Days>
      {program.map(({ coach, program, time }) => (
        <ListItem key={time}>
          <DayInfo>
            <Time>
              <Symbol>*</Symbol>
              <span>{time}</span>
            </Time>
            <Program>{program}</Program>
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
                    window.pageYOffset || document.documentElement.scrollTop;
                  const sectionTop = rect.top + scrollTop;
                  const sectionHeight = coachesSection.offsetHeight;

                  // Знаходимо індекс тренера в масиві coaches
                  const coachIndex = coaches.findIndex(
                    (c) => c.id === coach.id
                  );

                  if (coachIndex !== -1) {
                    // Використовуємо ту саму логіку що в CoachesList.tsx (рядки 256-258)
                    // Кожен тренер займає 0.25 прогресу скролу
                    const start = coachIndex * 0.25;
                    const rotateEnd = start + 0.25;

                    // Скролимо на середину діапазону для оптимальної видимості
                    const scrollProgress = start + (rotateEnd - start) / 2;
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
              {coach.name}
            </Coach>
          </DayInfo>
        </ListItem>
      ))}
    </Days>
  );
};

const DayDetails: FC<IDayDetailsProps> = ({ programs, days }) => {
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
    <Container
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      <Wrapper variants={itemVariants}>
        <Day>{days}</Day>

        <Programs>
          {programs.map((program, index) => (
            <ListItem key={index}>
              <ProgramDetails program={program} />
            </ListItem>
          ))}
        </Programs>
      </Wrapper>
    </Container>
  );
};

const ScheduleList: FC = () => {
  return (
    <List>
      {schedule.map(({ days, programs }) => (
        <ListItem key={days}>
          <DayDetails days={days} programs={programs} />
        </ListItem>
      ))}
    </List>
  );
};

export default ScheduleList;
