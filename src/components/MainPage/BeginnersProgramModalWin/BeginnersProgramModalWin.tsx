import ModalWin from '@CommonComponents/ModalWin';
import { FC } from 'react';
import { aboutGroup } from '@/constants';
import GroupsSection from '@MainPageComponents/GroupsSection';
import AboutGroupSection from '@MainPageComponents/AboutGroupSection';
import { AnimatePresence } from 'framer-motion';
import BeginnersProgramDecorativeElements from '@MainPageComponents/BeginnersProgramDecorativeElements';

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
      <AboutGroupSection
        group={aboutGroup.beginners}
        withoutBanner
        withoutLevels
      />

      <BeginnersProgramDecorativeElements />

      {/* <FAQsSection faqs={faqs.beginners} isModalWin /> */}
      <GroupsSection groups={null} closeModal={setModalWinState} />
    </ModalWin>
  );
};

const AnimatedBeginnersProgramModalWin: FC<
  IAnimatedBeginnersProgramModalWinProps
> = ({ isOpen, setModalWinState }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <BeginnersProgramModalWin setModalWinState={setModalWinState} />
      )}
    </AnimatePresence>
  );
};

export default AnimatedBeginnersProgramModalWin;
