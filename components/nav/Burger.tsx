import React, { useState } from 'react';
import styled from 'styled-components';
import MainNavigation from './MainNavigation';
import { device } from '../../utils/breakpoints';

interface BurgerProps {}

const StyledBurger = styled.div`
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  z-index: 1;

  :hover {
    cursor: pointer;
  }

  /*  Skapar burgaren och ändrar färg när vi går in i menyn. */
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #333;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease;
    background-color: ${({ open, theme }) =>
      open ? '#888' : theme.colors.primaryWhite};

    /* Används för att anmimera så att vi får ett X,  */
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }

    /* Tar bort burgern när man är >= Tablet size */
    @media ${device.tablet} {
      display: none;
    }
  }
`;

const Burger: React.FC<BurgerProps> = ({}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MainNavigation open={open} />
    </>
  );
};

export default Burger;
