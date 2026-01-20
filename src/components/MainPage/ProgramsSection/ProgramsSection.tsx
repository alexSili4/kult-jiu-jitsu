import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC, MouseEvent, useRef, useState } from 'react';
import {
  Content,
  Row,
  Section,
  EndRow,
  StartRow,
  Program,
  Title,
  Desc,
  List,
  Container,
  Name,
  Symbol,
  TitleWrap,
  DecorativeElement,
  DecorativeElementWrap,
  CursorImg,
  ListWrap,
  Wrapper,
} from './ProgramsSection.styled';
import { programs, SectionId } from '@/constants';
import SectionTitle from '@CommonComponents/SectionTitle';
import {
  SpringOptions,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import CustomCursor from '@CommonComponents/CustomCursor';
import AnimatedKidsProgramModalWin from '@MainPageComponents/KidsProgramModalWin';
import AnimatedBeginnersProgramModalWin from '@MainPageComponents/BeginnersProgramModalWin';
import AnimatedBasicProgramModalWin from '@MainPageComponents/BasicProgramModalWin';
import AnimatedProProgramModalWin from '@MainPageComponents/ProProgramModalWin';
import AnimatedPersonalProgramModalWin from '@MainPageComponents/PersonalProgramModalWin';
import AnimatedEventsProgramModalWin from '@MainPageComponents/EventsProgramModalWin';

interface IGroupDescProps {
  desc: string | null;
}

const GroupDesc: FC<IGroupDescProps> = ({ desc }) => {
  return desc && <Desc>{desc}</Desc>;
};

const ProgramsSection: FC = () => {
  const { beginners, basic, events, kids, pro, personal } = programs;

  const [showKidsProgramModalWin, setShowKidsProgramModalWin] =
    useState<boolean>(false);
  const [showBeginnersProgramModalWin, setShowBeginnersProgramModalWin] =
    useState<boolean>(false);
  const [showBasicProgramModalWin, setShowBasicProgramModalWin] =
    useState<boolean>(false);
  const [showProProgramModalWin, setShowProProgramModalWin] =
    useState<boolean>(false);
  const [showPersonalProgramModalWin, setShowPersonalProgramModalWin] =
    useState<boolean>(false);
  const [showEventsProgramModalWin, setShowEventsProgramModalWin] =
    useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(containerRef);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const transition: SpringOptions = {
    stiffness: 150,
    damping: 40,
    mass: 0.5,
  };

  const rotate = useTransform(scrollYProgress, [0.2, 0.8], [0, 15]);
  const scale = useTransform(scrollYProgress, [0.4, 0.8], [1, 15]);

  const smoothScale = useSpring(scale, transition);
  const smoothRotate = useSpring(rotate, transition);

  const toggleShowKidsProgramModalWin = () => {
    setShowKidsProgramModalWin((prevState) => !prevState);
  };
  const toggleShowBeginnersProgramModalWin = () => {
    setShowBeginnersProgramModalWin((prevState) => !prevState);
  };
  const toggleShowBasicProgramModalWin = () => {
    setShowBasicProgramModalWin((prevState) => !prevState);
  };
  const toggleShowProProgramModalWin = () => {
    setShowProProgramModalWin((prevState) => !prevState);
  };
  const toggleShowPersonalProgramModalWin = () => {
    setShowPersonalProgramModalWin((prevState) => !prevState);
  };
  const toggleShowEventsProgramModalWin = () => {
    setShowEventsProgramModalWin((prevState) => !prevState);
  };

  const onKidsBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    toggleShowKidsProgramModalWin();
  };

  const onBeginnersBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    toggleShowBeginnersProgramModalWin();
  };

  const onProBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    toggleShowProProgramModalWin();
  };

  const onBasicBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    toggleShowBasicProgramModalWin();
  };

  const onPersonalBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    toggleShowPersonalProgramModalWin();
  };

  const onEventsBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    toggleShowEventsProgramModalWin();
  };

  return (
    <>
      <Section id={SectionId.programs}>
        <GeneralContainer>
          <SectionTitle text='Групи' />
        </GeneralContainer>

        <Wrapper ref={containerRef}>
          <Container>
            <Content>
              <GeneralContainer>
                <DecorativeElementWrap>
                  <DecorativeElement
                    style={{
                      scale: smoothScale,
                      rotate: smoothRotate,
                    }}
                  ></DecorativeElement>
                </DecorativeElementWrap>

                <ListWrap>
                  <List>
                    <Row>
                      <Program type='button' onClick={onBeginnersBtnClick}>
                        {sectionInView && (
                          <CustomCursor>
                            <CursorImg
                              src={beginners.image}
                              alt={beginners.label}
                              width={160}
                              height={160}
                            />
                          </CustomCursor>
                        )}

                        <Name>{beginners.label}</Name>
                        <GroupDesc desc={beginners.desc} />
                      </Program>
                      <Program type='button' onClick={onBasicBtnClick}>
                        {sectionInView && (
                          <CustomCursor>
                            <CursorImg
                              src={basic.image}
                              alt={basic.label}
                              width={160}
                              height={200}
                            />
                          </CustomCursor>
                        )}

                        <Name>{basic.label}</Name>
                        <GroupDesc desc={basic.desc} />
                      </Program>
                    </Row>
                    <Row>
                      <Program type='button' onClick={onProBtnClick}>
                        {sectionInView && (
                          <CustomCursor>
                            <CursorImg
                              src={pro.image}
                              alt={pro.label}
                              width={160}
                              height={200}
                            />
                          </CustomCursor>
                        )}

                        <Name>{pro.label}</Name>
                        <GroupDesc desc={pro.desc} />
                      </Program>
                      <Program type='button' onClick={onKidsBtnClick}>
                        {sectionInView && (
                          <CustomCursor>
                            <CursorImg
                              src={kids.image}
                              alt={kids.label}
                              width={160}
                              height={200}
                            />
                          </CustomCursor>
                        )}

                        <Name>{kids.label}</Name>
                        <GroupDesc desc={kids.desc} />
                      </Program>
                    </Row>
                    <EndRow>
                      <Program type='button' onClick={onPersonalBtnClick}>
                        {sectionInView && (
                          <CustomCursor>
                            <CursorImg
                              src={personal.image}
                              alt={personal.label}
                              width={160}
                              height={160}
                            />
                          </CustomCursor>
                        )}

                        <Name>{personal.label}</Name>
                        <GroupDesc desc={personal.desc} />
                      </Program>
                    </EndRow>
                    <StartRow>
                      <Program type='button' onClick={onEventsBtnClick}>
                        {sectionInView && (
                          <CustomCursor>
                            <CursorImg
                              src={events.image}
                              alt={events.label}
                              width={192}
                              height={200}
                            />
                          </CustomCursor>
                        )}

                        <Name>{events.label}</Name>
                        <GroupDesc desc={events.desc} />
                      </Program>
                    </StartRow>
                  </List>

                  <TitleWrap>
                    <Symbol></Symbol>
                    <Title>[Програми занять)</Title>
                  </TitleWrap>
                </ListWrap>
              </GeneralContainer>
            </Content>
          </Container>
        </Wrapper>
      </Section>

      <AnimatedKidsProgramModalWin
        isOpen={showKidsProgramModalWin}
        setModalWinState={toggleShowKidsProgramModalWin}
      />

      <AnimatedBeginnersProgramModalWin
        isOpen={showBeginnersProgramModalWin}
        setModalWinState={toggleShowBeginnersProgramModalWin}
      />

      <AnimatedBasicProgramModalWin
        isOpen={showBasicProgramModalWin}
        setModalWinState={toggleShowBasicProgramModalWin}
      />

      <AnimatedProProgramModalWin
        isOpen={showProProgramModalWin}
        setModalWinState={toggleShowProProgramModalWin}
      />

      <AnimatedPersonalProgramModalWin
        isOpen={showPersonalProgramModalWin}
        setModalWinState={toggleShowPersonalProgramModalWin}
      />

      <AnimatedEventsProgramModalWin
        isOpen={showEventsProgramModalWin}
        setModalWinState={toggleShowEventsProgramModalWin}
      />
    </>
  );
};

export default ProgramsSection;
