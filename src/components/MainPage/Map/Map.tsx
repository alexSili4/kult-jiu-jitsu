import { contacts, SectionId } from '@/constants';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';
import {
  MapContainer,
  FinishBtn,
  Glow,
  KultTooltipWrap,
  MapImg,
  MapImgWrapDesk,
  MapImgWrapMob,
  MapPath,
  MapWrap,
  Metro,
  MetroBtn,
  MetroTooltipWrap,
  Parking,
  Path,
  PathShadow,
  Svg,
  Address,
  AddressContainer,
  AddressText,
  AddressTextWrap,
  AddressTitle,
  AddressWrap,
  MapLink,
  MapLinkIcon,
  MapLinkTitle,
} from './Map.styled';
import { getMapPath } from '@/utils';
import { IMapPoint, IPoint } from '@/types/contacts';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionLabel from '@CommonComponents/SectionLabel';
import Tooltip from '@CommonComponents/Tooltip';

interface IRoundedPathMapProps {
  path: IPoint[];
  stroke?: string;
  strokeWidth?: number;
  radius?: number;
}

interface IMapImgDetailsProps {
  mapImg: string;
  mapPath: IMapPoint[];
  mapStartBottom: string;
  mapStartRight: string;
  mapFinishBottom: string;
  mapFinishRight: string;
  mapParking: IMapPoint[];
}

const RoundedPathMap: FC<IRoundedPathMapProps> = ({ path, radius = 12 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [d, setD] = useState('');

  useEffect(() => {
    const updatePath = () => {
      const el = containerRef.current;
      if (!el) return;
      const { width, height } = el.getBoundingClientRect();
      const newD = getMapPath(path, width, height, radius);
      setD(newD);
    };

    updatePath();
    window.addEventListener('resize', updatePath);
    return () => window.removeEventListener('resize', updatePath);
  }, [path, radius]);

  const transition: Transition = {
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut',
  };

  return (
    <MapPath ref={containerRef}>
      <Svg xmlns='http://www.w3.org/2000/svg'>
        <PathShadow
          d={d}
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            pathOffset: [0, 0, 1],
          }}
          transition={transition}
        />
        <Path
          d={d}
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            pathOffset: [0, 0, 1],
          }}
          transition={transition}
        />
      </Svg>
    </MapPath>
  );
};

const MapImgDetails: FC<IMapImgDetailsProps> = ({
  mapImg,
  mapPath,
  mapStartBottom,
  mapStartRight,
  mapFinishBottom,
  mapFinishRight,
  mapParking,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const onImgLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      <MapImg src={mapImg} alt='Мапа' onLoad={onImgLoad} />

      {isImageLoaded && <RoundedPathMap path={mapPath} radius={7} />}

      <MetroBtn
        style={{
          bottom: mapStartBottom,
          right: mapStartRight,
        }}
      >
        <Glow></Glow>
        <Metro />
        <MetroTooltipWrap>
          <Tooltip text='метро Контрактова' />
        </MetroTooltipWrap>
      </MetroBtn>

      <FinishBtn
        style={{
          bottom: mapFinishBottom,
          right: mapFinishRight,
        }}
      >
        <Glow></Glow>
        <KultTooltipWrap>
          <Tooltip text='Ми знаходимось тут' />
        </KultTooltipWrap>
      </FinishBtn>

      {mapParking.map(({ bottom, right }, index) => (
        <Parking key={index} style={{ bottom, right }} />
      ))}
    </>
  );
};

const Map: FC = () => {
  const { map } = contacts;

  const containerRef = useRef(null);

  const inView = useInView(containerRef, { amount: 0.3 });

  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: 1.4,
    bounce: 0.4,
  };

  const itemVariants: Variants = {
    hidden: { x: -60, opacity: 0, transition },
    visible: {
      x: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <MapContainer id={SectionId.map}>
      <MapWrap>
        <MapImgWrapMob>
          <MapImgDetails
            mapStartRight={map.mob.start.right}
            mapStartBottom={map.mob.start.bottom}
            mapFinishRight={map.mob.finish.right}
            mapFinishBottom={map.mob.finish.bottom}
            mapImg={map.mob.img}
            mapParking={map.mob.parking}
            mapPath={map.mob.path}
          />
        </MapImgWrapMob>
        <MapImgWrapDesk>
          <MapImgDetails
            mapStartRight={map.desk.start.right}
            mapStartBottom={map.desk.start.bottom}
            mapFinishRight={map.desk.finish.right}
            mapFinishBottom={map.desk.finish.bottom}
            mapImg={map.desk.img}
            mapParking={map.desk.parking}
            mapPath={map.desk.path}
          />
        </MapImgWrapDesk>

        <AddressContainer
          ref={containerRef}
          variants={containerVariants}
          initial='hidden'
          animate={animate}
        >
          <AddressWrap variants={itemVariants}>
            <AddressTextWrap>
              <SectionLabel text='Як нас знайти' />
              <Address>
                <AddressTitle>вулиця Кирилівська, 6</AddressTitle>
                <AddressText>Київ, Україна, 02000</AddressText>
              </Address>
            </AddressTextWrap>
            <MapLink
              href={contacts.mapLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <MapLinkTitle>Прокласти маршрут</MapLinkTitle>
              <MapLinkIcon>
                <FiArrowUpRight size={20} />
              </MapLinkIcon>
            </MapLink>
          </AddressWrap>
        </AddressContainer>
      </MapWrap>
    </MapContainer>
  );
};

export default Map;
