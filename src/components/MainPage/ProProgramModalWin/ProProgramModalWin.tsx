import ModalWin from '@CommonComponents/ModalWin';
import { FC } from 'react';
import { aboutGroup, groups } from '@/constants';
import GroupsSection from '@MainPageComponents/GroupsSection';
import AboutGroupSection from '@MainPageComponents/AboutGroupSection';
import { AnimatePresence } from 'framer-motion';

interface IProProgramModalWinProps {
  setModalWinState: () => void;
}

interface IAnimatedProProgramModalWinProps {
  setModalWinState: () => void;
  isOpen: boolean;
}

const ProProgramModalWin: FC<IProProgramModalWinProps> = ({
  setModalWinState,
}) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <AboutGroupSection group={aboutGroup.pro} />
      {/* <FAQsSection faqs={faqs.pro} isModalWin /> */}
      <GroupsSection groups={groups.pro} closeModal={setModalWinState} />
    </ModalWin>
  );
};

const AnimatedProProgramModalWin: FC<IAnimatedProProgramModalWinProps> = ({
  isOpen,
  setModalWinState,
}) => {
  return (
    <AnimatePresence>
      {isOpen && <ProProgramModalWin setModalWinState={setModalWinState} />}
    </AnimatePresence>
  );
};

export default AnimatedProProgramModalWin;
