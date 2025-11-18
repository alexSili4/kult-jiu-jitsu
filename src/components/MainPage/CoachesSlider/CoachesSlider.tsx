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
  CoachDesc,
  CoachDescItem,
  DescText,
  DescTitle,
  CoachDescWrap,
  Row,
  BookASessionLink,
} from './CoachesSlider.styled';
import { coaches } from '@/constants';
import GeneralContainer from '@CommonComponents/GeneralContainer';

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
  qualification,
  experience,
  groups,
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

        <CoachDescWrap>
          <CoachDesc>
            <Row>
              <CoachDescItem>
                <DescTitle>Кваліфікація</DescTitle>
                <DescText>{qualification}</DescText>
              </CoachDescItem>
              <CoachDescItem>
                <DescTitle>Досвід</DescTitle>
                <DescText>{experience}</DescText>
              </CoachDescItem>
            </Row>
            <Row>
              <CoachDescItem>
                <DescTitle>Групи</DescTitle>
                <DescText>{groups}</DescText>
              </CoachDescItem>
            </Row>
          </CoachDesc>

          <BookASessionLink>Записатись</BookASessionLink>
        </CoachDescWrap>
      </DetailsContainer>
    </GeneralContainer>
  );
};

const CoachesSlider: FC = () => {
  return (
    <Container>
      {coaches.map(
        (
          { name, video, desc, experience, groups, qualification },
          index,
          array
        ) => (
          <CoachCard key={name}>
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
        )
      )}
    </Container>
  );
};

export default CoachesSlider;
