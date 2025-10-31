import { FC, forwardRef, MouseEvent, useState } from 'react';
import {
  StyledHeader,
  List,
  ListItem,
  Logo,
  Nav,
  Link,
  DeskBookASessionLink,
  IconWrap,
  Label,
  Container,
  FullNavigationContainer,
  AnimatedFullNavigationContainer,
  FullNavigationBtn,
  FullNavigationLinks,
  FullNavigationLinksList,
  AnimatedContainer,
} from './Header.styled';
import GeneralContainer from '@CommonComponents/GeneralContainer';
import { navLinks } from '@/constants';
import fire from '@/lottiefiles/fire.json';
import Lottie from 'lottie-react';
import { useIsScrollingPageUp } from '@/hooks';
import { INavLink } from '@/types/common';
import {
  AnimatePresence,
  Variants,
  VariantLabels,
  Transition,
} from 'framer-motion';
import { RxDotFilled } from 'react-icons/rx';

export interface INavigationProps {
  navLinks: INavLink[];
  exit: VariantLabels;
  animate: VariantLabels;
  initial: VariantLabels;
  variants: Variants;
}

export interface IFullNavigationProps {
  navLinks: INavLink[];
  exit: VariantLabels;
  animate: VariantLabels;
  initial: VariantLabels;
  variants: Variants;
}

const FullNavigation: FC<IFullNavigationProps> = forwardRef<
  HTMLDivElement,
  IFullNavigationProps
>(({ navLinks, animate, exit, initial, variants }, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onMenuBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    toggleIsOpen();
  };

  const animateItem: VariantLabels = isOpen ? 'visible' : 'hidden';

  const transition: Transition = {
    type: 'spring',
    duration: 1,
    bounce: 0.4,
  };

  const menuVariants: Variants = {
    hidden: {
      borderRadius: '50%',
      x: [0, 10, 0],
      transition: {
        duration: 1,
      },
    },
    visible: {
      borderRadius: '16px',
      x: [0, -20, 0],
      transition: {
        duration: 1,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { rotate: 0, transition },
    visible: {
      rotate: 90,
      transition,
    },
  };

  const linksVariants: Variants = {
    hidden: { width: 0, height: 0, transition },
    visible: {
      width: 'auto',
      height: 'auto',
      transition,
    },
  };

  return (
    <AnimatedFullNavigationContainer
      ref={ref}
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      custom={true}
    >
      <FullNavigationContainer
        animate={animateItem}
        initial='hidden'
        variants={menuVariants}
      >
        <FullNavigationBtn
          type='button'
          onClick={onMenuBtnClick}
          animate={animateItem}
          initial='hidden'
          variants={buttonVariants}
        >
          <RxDotFilled size={13} />
          <RxDotFilled size={13} />
        </FullNavigationBtn>
        <FullNavigationLinks
          animate={animateItem}
          initial='hidden'
          variants={linksVariants}
        >
          <FullNavigationLinksList>
            {navLinks.map(({ href, label }) => (
              <ListItem key={href}>
                <Link href={href}>{label}</Link>
              </ListItem>
            ))}
          </FullNavigationLinksList>
        </FullNavigationLinks>
      </FullNavigationContainer>
    </AnimatedFullNavigationContainer>
  );
});

FullNavigation.displayName = 'FullNavigation';

const Navigation: FC<INavigationProps> = forwardRef<
  HTMLUListElement,
  INavigationProps
>(({ navLinks, exit, animate, initial, variants }, ref) => {
  return (
    <List
      ref={ref}
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
    >
      {navLinks.map(({ href, label }) => (
        <ListItem key={href}>
          <Link href={href}>{label}</Link>
        </ListItem>
      ))}
    </List>
  );
});

Navigation.displayName = 'Navigation';

const Header: FC = () => {
  const { isScroll } = useIsScrollingPageUp(500);

  const publicNavLinks = navLinks.filter(({ isPublic }) => isPublic);

  const initial = 'initial';
  const animate = 'animate';
  const exit = 'exit';

  const transition: Transition = {
    type: 'spring',
    duration: 1.4,
    bounce: 0.4,
  };

  const headerTransition: Transition = {
    type: 'spring',
    duration: 1,
    bounce: 0.4,
    delay: 0.6,
  };

  const navigationVariants: Variants = {
    initial: (isBtn: boolean) => ({
      x: isBtn ? '210%' : '120%',
      opacity: 0,
      transition,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition,
    },
    exit: (isBtn: boolean) => ({
      x: isBtn ? '210%' : '120%',
      opacity: 0,
      transition,
    }),
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const headerVariants: Variants = {
    hidden: { y: '-100%', opacity: 0, transition: headerTransition },
    visible: {
      y: 0,
      opacity: 1,
      transition: headerTransition,
    },
  };

  return (
    <AnimatedContainer
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <StyledHeader variants={headerVariants}>
        <GeneralContainer>
          <Container>
            <Nav>
              <Logo />

              <AnimatePresence mode='sync'>
                {isScroll ? (
                  <FullNavigation
                    key='FullNavigation'
                    navLinks={navLinks}
                    animate={animate}
                    exit={exit}
                    initial={initial}
                    variants={navigationVariants}
                  />
                ) : (
                  <Navigation
                    key='Navigation'
                    navLinks={publicNavLinks}
                    animate={animate}
                    exit={exit}
                    initial='animate'
                    variants={navigationVariants}
                  />
                )}
              </AnimatePresence>
            </Nav>

            <DeskBookASessionLink>
              <Label>Записатись</Label>
              <IconWrap>
                <Lottie animationData={fire} loop={true} />
              </IconWrap>
            </DeskBookASessionLink>
          </Container>
        </GeneralContainer>
      </StyledHeader>
    </AnimatedContainer>
  );
};

export default Header;
