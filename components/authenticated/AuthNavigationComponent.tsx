import React from 'react';
import { Activated } from '../../utils/Constants';
import Link from 'next/link';
import styled from 'styled-components';
import { AuthNavigationComponentProps } from "../../utils/navigation"


const StyledLinks = styled(Link)`
  a {
    font-size: 20px;
  }
`;

const StyledSvg = styled.section`
svg{
  fill: ${({ activated, theme }) => activated == Activated.ON? theme.colors.primaryBlue : theme.colors.primaryWhite};
}
`;

const AuthNavigationComponent: React.FC<AuthNavigationComponentProps> = ({
  text,
  path,
  activated = Activated.OFF,
  svgComponent
}) => {
  return (
    <>
      <StyledLinks href={path}>
        <a>
          <StyledSvg activated={activated}>
          {svgComponent}
          </StyledSvg>
          {text}
        </a>
      </StyledLinks>
    </>
  );
};

export default AuthNavigationComponent;
