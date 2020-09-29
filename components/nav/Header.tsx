import React, { useRef } from 'react';
import styled from 'styled-components';
import { device } from '../../utils/breakpoints';
import Burger from './Burger';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Nav = styled.nav`
  position: sticky;
  height: 60px;
  margin-bottom: 2rem;
  z-index: 1;

  .logo {
    color: white;
    font-size: 16px;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.spartan};

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primaryWhite};
    }
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
  transition: background-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background-color: ${({ theme, scrolled }) =>
    scrolled ? theme.colors.primaryDark : 'rgba(0,0,0,0)'};
`;

const Logo = styled.img`
  height: 32px;
  width: 32px;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Changes opacity when scrolling
  function handleOpacity() {
    const position = document.querySelector('nav').offsetTop;

    if (window.pageYOffset > position) {
      if (!scrolled) {
        setScrolled(true);
      }
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    // Listens to scroll
    window.addEventListener('scroll', handleOpacity);

    // Removes event Listener when component is dismounted
    return () => window.removeEventListener('scroll', handleOpacity);
  }),
    [scrolled];

  console.log('At Below top, so opacity should be true??: ', scrolled);
  return (
    <Nav scrolled={scrolled}>
      <FixedWrapper scrolled={scrolled}>
        <div className={'logo'}>
          <Link href="/">
            {/* <Logo src="/icons/logo.svg" /> */}
            <a>WBoost</a>
          </Link>
        </div>
        <Burger />
      </FixedWrapper>
    </Nav>
  );
};
/* - {String(scrolled)} */

export default Header;
