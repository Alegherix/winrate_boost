import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/breakpoints';
import Burger from './Burger';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  height: 60px;
  padding: 0 20px;
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

const RegisterNavbar = () => {
  return (
    <Nav>
      <div className={'logo'}>WBooster</div>
      <Burger />
    </Nav>
  );
};

export default RegisterNavbar;
