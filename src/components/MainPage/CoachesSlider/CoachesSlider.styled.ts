import styled from '@emotion/styled';
import RotateIcon from '@/icons/coaches/rotate.svg?react';
import { IStyledBulletProps } from './CoachesSlider.types';

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.spacing(6)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: none;
  }
`;

export const CoachCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)}px;
`;

// CoachVideo;
export const VideoContainer = styled.div`
  position: relative;
`;

export const VideoBtn = styled.button`
  width: 54.87vw;
  aspect-ratio: 214 / 325.59;
  border-radius: 20px;
  border: 10px solid #252525;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  *:is(:hover, :focus) > &,
  &:focus {
    transform: rotateY(180deg);
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Rotate = styled(RotateIcon)`
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 32px;
  height: 32px;
`;

// CoachDetails
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6)}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white10};
`;

export const NameWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  letter-spacing: -0.96px;
  text-transform: uppercase;
`;

export const Progress = styled.p`
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
`;

export const Desc = styled.p`
  color: #d9d9d9;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;

export const CoachDescWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CoachDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const CoachDescItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const DescText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.48px;
  text-transform: uppercase;
`;

export const DescTitle = styled.p`
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
`;

export const BookASessionLink = styled.a`
  padding: ${({ theme }) => theme.spacing(4)}px;
  border-radius: 100px;
  background-color: #527324;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.2px;
  text-align: center;
`;

// SwiperBullets
export const BulletsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  padding-top: ${({ theme }) => theme.spacing(11)}px;
  padding-bottom: ${({ theme }) => theme.spacing(23)}px;
`;

export const ListItem = styled.li``;

export const Bullet = styled.button<IStyledBulletProps>`
  display: flex;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #88a94b;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};
`;
