import ModalWin from '@CommonComponents/ModalWin';
import { FC } from 'react';
import FAQsSection from '@MainPageComponents/FAQsSection';
import { faqs, aboutGroup, groups } from '@/constants';
import GroupsSection from '@MainPageComponents/GroupsSection';
import AboutGroupSection from '@MainPageComponents/AboutGroupSection';
import { AnimatePresence } from 'framer-motion';

interface IMixedProgramModalWinProps {
  setModalWinState: () => void;
}

interface IAnimatedMixedProgramModalWinProps {
  setModalWinState: () => void;
  isOpen: boolean;
}

const MixedProgramModalWin: FC<IMixedProgramModalWinProps> = ({
  setModalWinState,
}) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <AboutGroupSection group={aboutGroup.mixed} />
      <FAQsSection faqs={faqs.mixed} isModalWin />
      <GroupsSection groups={groups.mixed} />
    </ModalWin>
  );
};

const AnimatedMixedProgramModalWin: FC<IAnimatedMixedProgramModalWinProps> = ({
  isOpen,
  setModalWinState,
}) => {
  return (
    <AnimatePresence>
      {isOpen && <MixedProgramModalWin setModalWinState={setModalWinState} />}
    </AnimatePresence>
  );
};

export default AnimatedMixedProgramModalWin;
