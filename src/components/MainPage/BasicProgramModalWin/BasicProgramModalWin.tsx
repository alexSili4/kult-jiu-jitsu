import ModalWin from '@CommonComponents/ModalWin';
import { FC } from 'react';
import FAQsSection from '@MainPageComponents/FAQsSection';
import { faqs, aboutGroup, groups } from '@/constants';
import GroupsSection from '@MainPageComponents/GroupsSection';
import AboutGroupSection from '@MainPageComponents/AboutGroupSection';
import { AnimatePresence } from 'framer-motion';

interface IBasicProgramModalWinProps {
  setModalWinState: () => void;
}

interface IAnimatedBasicProgramModalWinProps {
  setModalWinState: () => void;
  isOpen: boolean;
}

const BasicProgramModalWin: FC<IBasicProgramModalWinProps> = ({
  setModalWinState,
}) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <AboutGroupSection group={aboutGroup.basic} />
      <FAQsSection faqs={faqs.basic} isModalWin />
      <GroupsSection groups={groups.basic} />
    </ModalWin>
  );
};

const AnimatedBasicProgramModalWin: FC<IAnimatedBasicProgramModalWinProps> = ({
  isOpen,
  setModalWinState,
}) => {
  return (
    <AnimatePresence>
      {isOpen && <BasicProgramModalWin setModalWinState={setModalWinState} />}
    </AnimatePresence>
  );
};

export default AnimatedBasicProgramModalWin;
