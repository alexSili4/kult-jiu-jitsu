import GeneralContainer from '@CommonComponents/GeneralContainer';
import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import {
  Section,
  Container,
  Content,
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
  SubmitBtnLabelMain,
  SubmitBtnLabelAlt,
} from './ContactsSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import { contacts, SectionId } from '@/constants';
import { PiTelegramLogo } from 'react-icons/pi';
import { FaInstagram } from 'react-icons/fa';
import banner from '@/images/contacts/banner.png';
import { IoChevronDown } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { IContactsForm } from '@/types/contacts';
import Map from '@MainPageComponents/Map';

interface IInputProps {
  placeholder: string;
  options?: string[];
  isSelect?: boolean;
  onOptionChange?: (option: string) => void;
  settings: object;
}

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
    setValue('teacher', option);
  };

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: IContactsForm) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact-form/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
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
            placeholder='Електронна пошта'
            settings={register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Невірний формат email',
              },
            })}
          />
          <Input
            placeholder='Тренер'
            options={contacts.coaches}
            onOptionChange={onOptionChange}
            settings={register('teacher', { required: true })}
            isSelect
          />
        </InputsWrap>
        <SubmitBtn disabled={isLoading}>
          <span>{isLoading ? 'надсилаємо...' : 'записатись'}</span>
          <SubmitBtnLabelMain>
            {isLoading ? 'надсилаємо...' : 'записатись'}
          </SubmitBtnLabelMain>
          <SubmitBtnLabelAlt>
            {isLoading ? 'надсилаємо...' : 'записатись'}
          </SubmitBtnLabelAlt>
        </SubmitBtn>
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
            <SocialLink
              href={contacts.externalLinks.instagram}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram />
            </SocialLink>

            <SocialLink
              href={contacts.externalLinks.telegram}
              target='_blank'
              rel='noopener noreferrer'
            >
              <PiTelegramLogo />
            </SocialLink>
          </SocialLinks>

          <a></a>

          <ContactPhone
            href={contacts.instasport.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            {contacts.instasport.label}
          </ContactPhone>

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
