import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useViewportScroll, useTransform } from 'framer-motion';

import typeformLogo from '../../assets/logo.svg';

import Button from '../Button';
import { Container, HeaderContent, Options, Covid19Alert } from './styles';

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const headerY = useTransform(
    scrollYProgress,
    [0, 0.05, 0.194],
    ['0%', '0%', '-100%'],
  );

  return (
    <Container
      style={{
        y: headerY,
      }}
    >
      <HeaderContent>
        <img src={typeformLogo} alt="Typeform logo" />
        <Options>
          <nav>
            <a href="#">
              Products <FiChevronDown />
            </a>
            <a href="#">Templates</a>
            <a href="#">Connect</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Blog</a>
            <a href="#">Carrers</a>
            <Covid19Alert href="/">Covid-19</Covid19Alert>
          </nav>
          <Button>Log in</Button>

          <Button black>Sign up</Button>
        </Options>
      </HeaderContent>
    </Container>
  );
};

export default Header;
