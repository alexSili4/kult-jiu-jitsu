import ModalWin from '@CommonComponents/ModalWin';
import { FC } from 'react';
import FAQsSection from '@MainPageComponents/FAQsSection';
import { faqs, aboutGroup, groups } from '@/constants';
import GroupsSection from '@MainPageComponents/GroupsSection';
import AboutGroupSection from '@MainPageComponents/AboutGroupSection';
import { AnimatePresence } from 'framer-motion';

interface IPersonalProgramModalWinProps {
  setModalWinState: () => void;
}

interface IAnimatedPersonalProgramModalWinProps {
  setModalWinState: () => void;
  isOpen: boolean;
}

const PersonalProgramModalWin: FC<IPersonalProgramModalWinProps> = ({
  setModalWinState,
}) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <AboutGroupSection group={aboutGroup.personal} />
      <FAQsSection faqs={faqs.personal} isModalWin />
      <GroupsSection groups={groups.personal} />
    </ModalWin>
  );
};

const AnimatedPersonalProgramModalWin: FC<IAnimatedPersonalProgramModalWinProps> = ({
  isOpen,
  setModalWinState,
}) => {
  return (
    <AnimatePresence>
      {isOpen && <PersonalProgramModalWin setModalWinState={setModalWinState} />}
    </AnimatePresence>
  );
};

export default AnimatedPersonalProgramModalWin;
