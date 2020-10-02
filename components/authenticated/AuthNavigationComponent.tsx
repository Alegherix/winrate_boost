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
  margin-right: 0.7rem;
}
`;

const StyledAnchor = styled.a`
text-decoration: none;
color: ${({theme}) => theme.colors.primaryWhite};
display: flex;
align-items: center;
margin-bottom: 0.7rem;

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
        <StyledAnchor>
          <StyledSvg activated={activated}>
          {svgComponent}
          </StyledSvg>
          {text}
        </StyledAnchor>
      </StyledLinks>
    </>
  );
};

export default AuthNavigationComponent;
