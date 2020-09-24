import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/breakpoints';

interface HeroHeadingProps {
  text: String;
}

const styledHeader = styled.h1`
  font-family: ${({ theme }) => theme.fonts.spartan};
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-weight: 800;

  span {
    color: ${({ theme }) => theme.colors.primaryBlue};
  }

  @media ${device.mobileS} {
    font-size: 34px;
    margin-bottom: 0.8rem;
  }
`;

const HeroHeading: React.FC<HeroHeadingProps> = ({}) => {
  return (
    <>
      <div></div>
    </>
  );
};

export default HeroHeading;
