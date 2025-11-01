import ModalWin from '@CommonComponents/ModalWin';
import { FC } from 'react';
import FAQsSection from '@MainPageComponents/FAQsSection';
import { faqs, aboutGroup, groups } from '@/constants';
import GroupsSection from '@MainPageComponents/GroupsSection';
import AboutGroupSection from '@MainPageComponents/AboutGroupSection';
import { AnimatePresence } from 'framer-motion';

interface IKidsProgramModalWinProps {
  setModalWinState: () => void;
}

interface IAnimatedKidsProgramModalWinProps {
  setModalWinState: () => void;
  isOpen: boolean;
}

const KidsProgramModalWin: FC<IKidsProgramModalWinProps> = ({
  setModalWinState,
}) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <AboutGroupSection group={aboutGroup.kids} />
      <FAQsSection faqs={faqs.kids} isModalWin />
      <GroupsSection groups={groups.kids} />
    </ModalWin>
  );
};

const AnimatedKidsProgramModalWin: FC<IAnimatedKidsProgramModalWinProps> = ({
  isOpen,
  setModalWinState,
}) => {
  return (
    <AnimatePresence>
      {isOpen && <KidsProgramModalWin setModalWinState={setModalWinState} />}
    </AnimatePresence>
  );
};

export default AnimatedKidsProgramModalWin;
