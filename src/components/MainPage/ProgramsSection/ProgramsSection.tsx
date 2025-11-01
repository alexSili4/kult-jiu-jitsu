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
} from './ProgramsSection.styled';
import { programs } from '@/constants';
import SectionTitle from '@CommonComponents/SectionTitle';
import {
  SpringOptions,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import CustomCursor from '@CommonComponents/CustomCursor';
import KidsProgramModalWin from '@MainPageComponents/KidsProgramModalWin';

interface IGroupDescProps {
  desc: string | null;
}

const GroupDesc: FC<IGroupDescProps> = ({ desc }) => {
  return desc && <Desc>{desc}</Desc>;
};

const ProgramsSection: FC = () => {
  const { beginners, basic, events, kids, mixed, personal } = programs;

  const [showKidsProgramModalWin, setShowKidsProgramModalWin] =
    useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(containerRef);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const transition: SpringOptions = {
    stiffness: 150,
    damping: 12,
    mass: 0.5,
  };

  const rotate = useTransform(scrollYProgress, [0.2, 0.8], [0, 15]);
  const scale = useTransform(scrollYProgress, [0.2, 0.8], [1, 8]);

  const smoothScale = useSpring(scale, transition);
  const smoothRotate = useSpring(rotate, transition);

  const toggleShowKidsProgramModalWin = () => {
    setShowKidsProgramModalWin((prevState) => !prevState);
  };

  const onKidsBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    toggleShowKidsProgramModalWin();
  };

  return (
    <>
      <Section ref={containerRef}>
        <SectionTitle text='Програми занять' isHidden />

        <GeneralContainer>
          <Container>
            <Content>
              <DecorativeElementWrap>
                <DecorativeElement
                  style={{
                    scale: smoothScale,
                    rotate: smoothRotate,
                  }}
                ></DecorativeElement>
              </DecorativeElementWrap>

              <List>
                <Row>
                  <Program>
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
                  <Program>
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
                  <Program>
                    {sectionInView && (
                      <CustomCursor>
                        <CursorImg
                          src={mixed.image}
                          alt={mixed.label}
                          width={160}
                          height={200}
                        />
                      </CustomCursor>
                    )}

                    <Name>{mixed.label}</Name>
                    <GroupDesc desc={mixed.desc} />
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
                  <Program>
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
                  <Program>
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
            </Content>
          </Container>
        </GeneralContainer>
      </Section>

      {showKidsProgramModalWin && (
        <KidsProgramModalWin
          isOpen={showKidsProgramModalWin}
          setModalWinState={toggleShowKidsProgramModalWin}
        />
      )}
    </>
  );
};

export default ProgramsSection;
