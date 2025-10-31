import { FC, useRef } from 'react';
import {
  ListItem,
  IconWrap,
  DaysList,
  DetailsContainer,
  Schedule,
  DayBtn,
  ContentWrap,
  Coach,
  DayInfo,
  Days,
  Program,
  Programs,
  Symbol,
  Time,
} from './ScheduleAccordion.styled';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import { useAccordionElement } from '@/hooks';
import { schedule } from '@/constants';
import { IProgramDetails } from '@/types/schedule';

interface IScheduleDetailsProps {
  day: string;
  programs: IProgramDetails[][];
}

const ScheduleDetails: FC<IScheduleDetailsProps> = ({ day, programs }) => {
  const containerRef = useRef(null);
  const { elementRef, elementScrollHeight, isShowElement, onQuestionBtnClick } =
    useAccordionElement();

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
    <DetailsContainer
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      <Schedule variants={itemVariants}>
        <DayBtn onClick={onQuestionBtnClick}>
          <span>{day}</span>
          <IconWrap isShowElement={isShowElement}>
            <FaPlus size={24} />
          </IconWrap>
        </DayBtn>

        <ContentWrap
          ref={elementRef}
          scrollHeight={elementScrollHeight}
          isShowElement={isShowElement}
        >
          <Programs>
            {programs.map((program, index) => (
              <ListItem key={index}>
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
              </ListItem>
            ))}
          </Programs>
        </ContentWrap>
      </Schedule>
    </DetailsContainer>
  );
};

const ScheduleAccordion: FC = () => {
  return (
    <DaysList>
      {schedule.map(({ days, programs }) => (
        <ListItem key={days}>
          <ScheduleDetails programs={programs} day={days} />
        </ListItem>
      ))}
    </DaysList>
  );
};

export default ScheduleAccordion;
