import React from 'react';
import styled from 'styled-components';
import Img from '../assets/hero.jpg';
import ButtonComponent from './ButtonComponent';
import { device } from '../utils/breakpoints';
import { Color } from '../utils/Constants';

interface HeroProps {}

const ImageContainer = styled.header`
  width: 100%;
  height: 100vh;
  background: url(${Img}) no-repeat center center/cover;
  opacity: 0.3;
  position: absolute;
  top: 0;
  z-index: -1;

  @media ${device.mobileMin} {
    background-position: 25% 0;
  }
`;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 75vh;

  @media ${device.mobileMin} {
    padding: 0 1.8rem;
  }
`;

const HeroHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.spartan};
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-weight: 800;

  span {
    color: ${({ theme }) => theme.colors.primaryBlue};
  }
`;

const HeroDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.spartan};
  color: ${({ theme }) => theme.colors.tertiaryWhite};
  font-weight: 400;
`;

const ButtonSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <nav>
      <ImageContainer />
      <HeroContainer>
        <HeroHeading>
          A free winrate boosting tool for you to start <span>winning</span>
        </HeroHeading>
        <HeroDescription>
          Start beating your opponents consistently
        </HeroDescription>
        <ButtonSection>
          <ButtonComponent text="Sign up for free" />
          <ButtonComponent text="Sign in" color={Color.Dark} />
        </ButtonSection>
      </HeroContainer>
    </nav>
  );
};

export default Hero;
