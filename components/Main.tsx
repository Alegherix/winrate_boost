import React from 'react';
import styled from 'styled-components';
import Img from '../assets/soldier.jpg';
import { device } from '../utils/breakpoints';

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
      <h2>Hello darkness my old friend</h2>
    </>
  );
};

export default Main;
