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

const MainPage: FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CoachesSection />
      <ProgramsSection />
      <ScheduleSection />
      <PriceSection />
      <AmenitiesSection />
      <VeteransSection />
      <FAQsSection />
      <ContactsSection />
    </>
  );
};

export default MainPage;
