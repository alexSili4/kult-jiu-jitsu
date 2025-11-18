import { FC } from 'react';
import AboutSection from '@MainPageComponents/AboutSection';
import CoachesSection from '@MainPageComponents/CoachesSection';
import HeroSection from '@MainPageComponents/HeroSection';
import ScheduleSection from '@MainPageComponents/ScheduleSection';
import ProgramsSection from '@MainPageComponents/ProgramsSection';
import PriceSection from '@MainPageComponents/PriceSection';
import AmenitiesSection from '@MainPageComponents/AmenitiesSection';
import VeteransSection from '@MainPageComponents/VeteransSection';
import FAQsSection from '@MainPageComponents/FAQsSection';
import ContactsSection from '@MainPageComponents/ContactsSection';
import SectionsWrap from '@MainPageComponents/SectionsWrap';
import { faqs } from '@/constants';

const MainPage: FC = () => {
  return (
    <>
      <SectionsWrap>
        <HeroSection />
        <AboutSection />
      </SectionsWrap>
      <CoachesSection />
      <SectionsWrap>
        <ProgramsSection />
        <ScheduleSection />
      </SectionsWrap>
      <PriceSection />
      <AmenitiesSection />
      <VeteransSection />
      <FAQsSection faqs={faqs.all} />
      <ContactsSection />
    </>
  );
};

export default MainPage;
