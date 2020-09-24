import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/breakpoints';

interface layoutProps {}

const StyledContainer = styled.main`
  @media ${device.mobileM} {
    /* max-width: 400px; */
  }

  @media ${device.tablet} {
    /* max-width: 650px; */
  }

  @media ${device.laptop} {
    /* width: 800px; */
  }

  @media ${device.laptopL} {
    /* max-width: 1200px; */
    /* margin: auto; */
  }
`;

const Layout: React.FC<layoutProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Layout;
