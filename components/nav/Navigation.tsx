import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { device } from '../../utils/breakpoints';

interface MainNavigationProps {
  open: Boolean;
}

const NavbarContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;

  li:last-child {
    color: ${({ theme }) => theme.colors.primaryBlue};
  }

  @media ${device.mobileMin} {
    flex-direction: column;
    background-color: #333;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    align-items: center;
    padding-top: 2rem;
    transition: transform 0.3s ease;
  }

  @media ${device.tablet} {
    flex-direction: row;
    /* align-items: center;
    justify-content: center; */
    background-color: transparent;
    position: relative;
    transform: translateY(0);
    padding-top: 0;
    height: 100%;
  }
`;

const NavbarItems = styled.li`
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-size: 20px;
  list-style: none;
  font-family: ${({ theme }) => theme.fonts.spartan};
  font-weight: 800;

  :hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  @media ${device.mobileMin} {
  }

  @media ${device.tablet} {
    /* margin: 1rem; */
    font-size: 16px;
  }
`;

const NavLinks = styled.a`
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media ${device.mobileMin} {
    padding: 1rem 4rem;
  }

  @media ${device.tablet} {
    padding: 0;
  }
`;

const MainNavigation: React.FC<MainNavigationProps> = ({ open }) => {
  return (
    <NavbarContainer open={open}>
      <NavbarItems>
        <Link href="/guides">
          <NavLinks>Guides</NavLinks>
        </Link>
      </NavbarItems>

      <NavbarItems>
        <Link href="/pricing">
          <NavLinks>Pricing</NavLinks>
        </Link>
      </NavbarItems>

      <NavbarItems>
        <Link href="/login">
          <NavLinks>Sign in</NavLinks>
        </Link>
      </NavbarItems>

      <NavbarItems>
        <Link href="/register">
          <NavLinks>Try for free</NavLinks>
        </Link>
      </NavbarItems>
    </NavbarContainer>
  );
};

export default MainNavigation;
