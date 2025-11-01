import GeneralContainer from '@CommonComponents/GeneralContainer';
import {
  ChangeEvent,
  FC,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  MapContainer,
  MapImg,
  Section,
  Container,
  Content,
  MapWrap,
  Address,
  AddressContainer,
  AddressTextWrap,
  AddressTitle,
  AddressText,
  MapLinkIcon,
  MapLink,
  ContactsContainer,
  ContactsWrap,
  ContactsLinks,
  SocialLinks,
  SocialLink,
  ContactPhone,
  Symbol,
  ContactsBannerWrap,
  FormContainer,
  FormHeader,
  FormText,
  FormTitle,
  Form,
  InputsWrap,
  SubmitBtn,
  ContactsBanner,
  StyledInput,
  InputWrap,
  OpenSelectBtn,
  OpenSelectBtnIcon,
  OptionsContainer,
  ListItem,
  OptionsList,
  OptionBtn,
  MetroBtn,
  Metro,
  MapImgWrap,
  FinishBtn,
  Glow,
  MapPath,
  Svg,
  Path,
  PathShadow,
  Parking,
  TooltipWrap,
  MetroTooltipWrap,
  AddressWrap,
} from './ContactsSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import { contacts, SectionId } from '@/constants';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionLabel from '@CommonComponents/SectionLabel';
import { PiTelegramLogo } from 'react-icons/pi';
import { FaInstagram } from 'react-icons/fa';
import banner from '@/images/contacts/banner.png';
import { IoChevronDown } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { IContactsForm, IPoint } from '@/types/contacts';
import { getMapPath } from '@/utils';
import Tooltip from '@CommonComponents/Tooltip';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';

interface IInputProps {
  placeholder: string;
  options?: string[];
  isSelect?: boolean;
  onOptionChange?: (option: string) => void;
  settings: object;
}

interface IRoundedPathMapProps {
  path: IPoint[];
  stroke?: string;
  strokeWidth?: number;
  radius?: number;
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

const Map: FC = () => {
  const { map } = contacts;

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const containerRef = useRef(null);

  const inView = useInView(containerRef, { amount: 1 });

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

  const onImgLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <MapContainer id={SectionId.map}>
      <MapWrap>
        <MapImgWrap>
          <MapImg src={map.img} alt='Мапа' onLoad={onImgLoad} />

          {isImageLoaded && <RoundedPathMap path={map.path} radius={7} />}

          <MetroBtn
            style={{
              bottom: map.start.bottom,
              right: map.start.right,
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
              bottom: map.finish.bottom,
              right: map.finish.right,
            }}
          >
            <Glow></Glow>
            <TooltipWrap>
              <Tooltip text='Ми знаходимось тут' />
            </TooltipWrap>
          </FinishBtn>

          {map.parking.map(({ bottom, right }, index) => (
            <Parking key={index} style={{ bottom, right }} />
          ))}
        </MapImgWrap>

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
              <span>Прокласти маршрут</span>
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

const Input: FC<IInputProps> = ({
  placeholder,
  isSelect = false,
  options,
  onOptionChange,
  settings,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    toggleIsOpen();
  };

  return (
    <InputWrap>
      <StyledInput
        type='text'
        placeholder={placeholder}
        disabled={isSelect}
        {...settings}
      />
      {isSelect && (
        <>
          <OpenSelectBtn type='button' onClick={onBtnClick}>
            <OpenSelectBtnIcon isOpen={isOpen}>
              <IoChevronDown size={16} />
            </OpenSelectBtnIcon>
          </OpenSelectBtn>

          {isOpen && options && onOptionChange && (
            <OptionsContainer>
              <OptionsList>
                {options.map((option) => {
                  const onBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.blur();

                    onOptionChange(option);
                    toggleIsOpen();
                  };

                  return (
                    <ListItem key={option}>
                      <OptionBtn type='button' onClick={onBtnClick}>
                        {option}
                      </OptionBtn>
                    </ListItem>
                  );
                })}
              </OptionsList>
            </OptionsContainer>
          )}
        </>
      )}
    </InputWrap>
  );
};

const ContactsForm: FC = () => {
  const { register, handleSubmit, reset, setValue } = useForm<IContactsForm>();

  const onOptionChange = (option: string) => {
    setValue('coach', option);
  };

  const onSubmit = (data: IContactsForm) => {
    console.log(data);
    reset();
  };

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;

    value = value.replace(/[^\d+\s]/g, '');

    if (value.includes('+') && value.indexOf('+') > 0) {
      value = value.replace(/\+/g, '');
    }

    value = value.replace(/^(\++)/, '+');

    setValue('phone', value);
  };

  return (
    <FormContainer id={SectionId.contacts}>
      <FormHeader>
        <FormTitle>Записатись на заняття</FormTitle>
        <FormText>
          Залиште контакти, і ми зв’яжемось із вами, щоб допомогти обрати
          зручний час і формат занять.
        </FormText>
      </FormHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrap>
          <Input
            placeholder='Ваше ім’я'
            settings={register('name', { required: true })}
          />
          <Input
            placeholder='+380'
            settings={register('phone', {
              required: true,
              onChange: onPhoneChange,
            })}
          />
          <Input
            placeholder='Тренер'
            options={contacts.coaches}
            onOptionChange={onOptionChange}
            settings={register('coach', { required: true })}
            isSelect
          />
        </InputsWrap>
        <SubmitBtn>записатись</SubmitBtn>
      </Form>
    </FormContainer>
  );
};

const Contacts: FC = () => {
  return (
    <ContactsContainer>
      <ContactsWrap>
        <ContactsLinks>
          <SocialLinks>
            <SocialLink href='/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram size={60} />
            </SocialLink>

            <SocialLink href='/' target='_blank' rel='noopener noreferrer'>
              <PiTelegramLogo size={60} />
            </SocialLink>
          </SocialLinks>

          <ContactPhone href='tel:+380998882233'>
            <Symbol></Symbol>
            <span>+38 099 888 22 33</span>
          </ContactPhone>
        </ContactsLinks>

        <ContactsBannerWrap>
          <ContactsBanner src={banner} alt='Банер' />
        </ContactsBannerWrap>
      </ContactsWrap>

      <ContactsForm />
    </ContactsContainer>
  );
};

const ContactsSection: FC = () => {
  return (
    <Section>
      <SectionTitle text='Контакти' isHidden />

      <Map />

      <Container>
        <GeneralContainer>
          <Content>
            <Contacts />
          </Content>
        </GeneralContainer>
      </Container>
    </Section>
  );
};

export default ContactsSection;
