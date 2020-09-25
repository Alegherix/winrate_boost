import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/breakpoints';
import Burger from './Burger';
import { useEffect, useState } from 'react';

const Nav = styled.nav`
  position: sticky;
  height: 60px;
  margin-bottom: 2rem;

  .logo {
    color: white;
    font-size: 16px;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.spartan};
  }

  @media ${device.tablet} {
    height: 100px;
  }
`;

const FixedWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  width: 100%;
  top: 0px;
  left: 0px;
  background-color: ${({ theme, scrolled }) =>
    scrolled ? theme.colors.primaryDark : 'rgba(0,0,0,0)'};
`;

const RegisterNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Funktion för att ändra opacity under navigation
  async function handleOpacity() {
    const position = document.querySelector('nav').offsetTop;
    if (window.pageYOffset > position) {
      if (!scrolled) {
        setScrolled(() => true);
        console.log('At Below top, so opacity should be true??: ', scrolled);
      }
    } else {
      setScrolled(() => false);
      console.log('At top, so opacity should be false:', scrolled);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleOpacity);
    return () => window.removeEventListener('scroll', handleOpacity);
  });

  return (
    <Nav scrolled={scrolled}>
      <FixedWrapper scrolled={scrolled}>
        <div className={'logo'}>WBooster - {String(scrolled)}</div>
        <Burger />
      </FixedWrapper>
    </Nav>
  );
};

export default RegisterNavbar;
