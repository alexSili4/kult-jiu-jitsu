import { FC, MouseEvent, useState } from 'react';
import {
  CoachCard,
  Container,
  Video,
  VideoContainer,
  VideoBtn,
  Rotate,
  DetailsContainer,
  TextWrap,
  NameWrap,
  Progress,
  Name,
  Desc,
  Bullet,
  BulletsList,
  ListItem,
} from './CoachesSlider.styled';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { coaches } from '@/constants';
import GeneralContainer from '@CommonComponents/GeneralContainer';

import 'swiper/css';
import SwiperType from 'swiper';

interface ICoachVideoProps {
  video: string;
}

interface ICoachDetailsProps {
  name: string;
  desc: string;
  qualification: string;
  experience: string;
  groups: string;
  number: number;
  totalLength: number;
}

interface ISwiperBulletsProps {
  activeIndex: number;
}

const CoachVideo: FC<ICoachVideoProps> = ({ video }) => {
  const [isActive, setIsActive] = useState(false);

  const onFocus = () => setIsActive(true);

  const onBlur = () => setIsActive(false);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => e.currentTarget.blur();

  return (
    <VideoContainer onMouseEnter={onFocus} onMouseLeave={onBlur}>
      <VideoBtn onClick={onClick}>
        <Video
          src={video}
          muted
          playsInline
          loop
          ref={(el) => {
            if (el) {
              if (isActive) {
                el.play().catch(() => {});
              } else {
                el.pause();
                el.currentTime = 0;
              }
            }
          }}
        />
      </VideoBtn>
      <Rotate />
    </VideoContainer>
  );
};

const CoachDetails: FC<ICoachDetailsProps> = ({
  name,
  desc,
  number,
  totalLength,
  //   qualification,
  //   experience,
  //   groups,
}) => {
  return (
    <GeneralContainer>
      <DetailsContainer>
        <TextWrap>
          <NameWrap>
            <Name>{name}</Name>
            <Progress>
              {number}/{totalLength}
            </Progress>
          </NameWrap>

          <Desc>{desc}</Desc>
        </TextWrap>

        {/* <CoachDescWrap>
	        <CoachDesc>
	          <CoachDescItem>
	            <DescTitle>Кваліфікація</DescTitle>
	            <DescText>{qualification}</DescText>
	          </CoachDescItem>
	          <CoachDescItem>
	            <DescTitle>Досвід</DescTitle>
	            <DescText>{experience}</DescText>
	          </CoachDescItem>
	          <CoachDescItem>
	            <DescTitle>Групи</DescTitle>
	            <DescText>{groups}</DescText>
	          </CoachDescItem>
	        </CoachDesc>
	
	        <BookASessionLink>Записатись</BookASessionLink>
	      </CoachDescWrap> */}
      </DetailsContainer>
    </GeneralContainer>
  );
};

const SwiperBullets: FC<ISwiperBulletsProps> = ({ activeIndex }) => {
  const swiper = useSwiper();

  return (
    <BulletsList>
      {Array.from({ length: swiper.slides.length }).map((_, index) => {
        const onBulletBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
          e.currentTarget.blur();

          swiper.slideTo(index);
        };

        return (
          <ListItem key={index}>
            <Bullet
              onClick={onBulletBtnClick}
              isActive={activeIndex === index}
            ></Bullet>
          </ListItem>
        );
      })}
    </BulletsList>
  );
};

const CoachesSlider: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onSwiper = (swiper: SwiperType) => setActiveIndex(swiper.activeIndex);

  return (
    <Container>
      <Swiper spaceBetween={50} slidesPerView='auto' onSlideChange={onSwiper}>
        {coaches.map(
          (
            { name, video, desc, experience, groups, qualification },
            index,
            array
          ) => (
            <SwiperSlide key={name}>
              <CoachCard>
                <CoachVideo video={video} />
                <CoachDetails
                  desc={desc}
                  experience={experience}
                  groups={groups}
                  name={name}
                  qualification={qualification}
                  number={index + 1}
                  totalLength={array.length}
                />
              </CoachCard>
            </SwiperSlide>
          )
        )}

        <SwiperBullets activeIndex={activeIndex} />
      </Swiper>
    </Container>
  );
};

export default CoachesSlider;
