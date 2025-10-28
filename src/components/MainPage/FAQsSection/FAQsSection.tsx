import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC, useRef } from 'react';
import {
  Container,
  Content,
  Section,
  Question,
  QuestionContainer,
  QuestionsList,
  Answer,
  AnswerText,
  AnswerWrap,
  QuestionBtn,
  ListItem,
  IconWrap,
} from './FAQsSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import { faqs } from '@/constants';
import { IFAQ } from '@/types/faqs';
import { FaPlus } from 'react-icons/fa';
import { useAccordionElement } from '@/hooks';
import SectionLabel from '@CommonComponents/SectionLabel';
import ScaleBanner from '@CommonComponents/ScaleBanner';
import banner from '@/images/faqs/banner.jpg';

const QuestionDetails: FC<IFAQ> = ({ answer, question }) => {
  const containerRef = useRef(null);
  const { elementRef, elementScrollHeight, isShowElement, onQuestionBtnClick } =
    useAccordionElement();

  const inView = useInView(containerRef, { amount: 1 });

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
    <QuestionContainer
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      <Question variants={itemVariants}>
        <QuestionBtn onClick={onQuestionBtnClick}>
          <span>{question}</span>
          <IconWrap isShowElement={isShowElement}>
            <FaPlus size={24} />
          </IconWrap>
        </QuestionBtn>

        <AnswerWrap
          ref={elementRef}
          scrollHeight={elementScrollHeight}
          isShowElement={isShowElement}
        >
          <Answer>
            <AnswerText>{answer}</AnswerText>
          </Answer>
        </AnswerWrap>
      </Question>
    </QuestionContainer>
  );
};

const FAQsSection: FC = () => {
  return (
    <Section>
      <SectionTitle text='Запитання та відповіді' isHidden />

      <ScaleBanner banner={banner} />

      <Container>
        <GeneralContainer>
          <Content>
            <SectionLabel text='FAQs' />

            <QuestionsList>
              {faqs.map(({ answer, question }) => (
                <ListItem key={question}>
                  <QuestionDetails answer={answer} question={question} />
                </ListItem>
              ))}
            </QuestionsList>
          </Content>
        </GeneralContainer>
      </Container>
    </Section>
  );
};

export default FAQsSection;
