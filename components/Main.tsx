import React from 'react';
import styled from 'styled-components';
import Img from '../assets/soldier.jpg';
import { device } from '../utils/breakpoints';
import HeroHeading from './HeroHeading';
import { HeroContainer } from '../components/Hero';
interface MainProps {}

const ImageContainer = styled.header`
  width: 100%;
  height: 100vh;
  background: url(${Img}) no-repeat center center/cover;
  opacity: 0.3;
  z-index: -1;
  position: absolute;
`;

const Main: React.FC<MainProps> = ({}) => {
  return (
    <>
      <ImageContainer />
      <HeroContainer>
        <HeroHeading text={'Unlock your potential'} />
      </HeroContainer>
    </>
  );
};

export default Main;
