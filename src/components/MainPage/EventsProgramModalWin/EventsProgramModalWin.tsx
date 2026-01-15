import ModalWin from '@CommonComponents/ModalWin';
import { FC } from 'react';
import FAQsSection from '@MainPageComponents/FAQsSection';
import { faqs, aboutGroup, groups } from '@/constants';
import GroupsSection from '@MainPageComponents/GroupsSection';
import AboutGroupSection from '@MainPageComponents/AboutGroupSection';
import { AnimatePresence } from 'framer-motion';

interface IEventsProgramModalWinProps {
  setModalWinState: () => void;
}

interface IAnimatedEventsProgramModalWinProps {
  setModalWinState: () => void;
  isOpen: boolean;
}

const EventsProgramModalWin: FC<IEventsProgramModalWinProps> = ({
  setModalWinState,
}) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <AboutGroupSection group={aboutGroup.events} />
      <FAQsSection faqs={faqs.events} isModalWin />
      <GroupsSection groups={groups.events} />
    </ModalWin>
  );
};

const AnimatedEventsProgramModalWin: FC<
  IAnimatedEventsProgramModalWinProps
> = ({ isOpen, setModalWinState }) => {
  return (
    <AnimatePresence>
      {isOpen && <EventsProgramModalWin setModalWinState={setModalWinState} />}
    </AnimatePresence>
  );
};

export default AnimatedEventsProgramModalWin;
