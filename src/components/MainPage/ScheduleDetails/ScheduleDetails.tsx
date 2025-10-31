import { schedule } from '@/constants';
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
} from './ScheduleDetails.styled';
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
            <Coach>{coach}</Coach>
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

const ScheduleDetails: FC = () => {
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

export default ScheduleDetails;
