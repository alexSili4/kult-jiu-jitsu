import GeneralContainer from '@CommonComponents/GeneralContainer';
import { ChangeEvent, FC, MouseEvent, useState } from 'react';
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
import { IContactsForm } from '@/types/contacts';

interface IInputProps {
  placeholder: string;
  options?: string[];
  isSelect?: boolean;
  onOptionChange?: (option: string) => void;
  settings: object;
}

const Map: FC = () => {
  return (
    <MapContainer>
      <MapWrap>
        <MapImg src='' alt='Мапа' />

        <AddressContainer>
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
    <FormContainer>
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
          <Content id={SectionId.contacts}>
            <Contacts />
          </Content>
        </GeneralContainer>
      </Container>
    </Section>
  );
};

export default ContactsSection;
