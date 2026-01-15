import ModalWin from '@CommonComponents/ModalWin';
import { FC } from 'react';
import FAQsSection from '@MainPageComponents/FAQsSection';
import { faqs, aboutGroup, groups } from '@/constants';
import GroupsSection from '@MainPageComponents/GroupsSection';
import AboutGroupSection from '@MainPageComponents/AboutGroupSection';
import { AnimatePresence } from 'framer-motion';

interface IBeginnersProgramModalWinProps {
  setModalWinState: () => void;
}

interface IAnimatedBeginnersProgramModalWinProps {
  setModalWinState: () => void;
  isOpen: boolean;
}

const BeginnersProgramModalWin: FC<IBeginnersProgramModalWinProps> = ({
  setModalWinState,
}) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <AboutGroupSection group={aboutGroup.beginners} />
      <FAQsSection faqs={faqs.beginners} isModalWin />
      <GroupsSection groups={groups.beginners} />
    </ModalWin>
  );
};

const AnimatedBeginnersProgramModalWin: FC<IAnimatedBeginnersProgramModalWinProps> = ({
  isOpen,
  setModalWinState,
}) => {
  return (
    <AnimatePresence>
      {isOpen && <BeginnersProgramModalWin setModalWinState={setModalWinState} />}
    </AnimatePresence>
  );
};

export default AnimatedBeginnersProgramModalWin;
