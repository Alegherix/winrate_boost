import React from 'react';
import { Activated } from '../../utils/Constants';
import Link from 'next/link';
import styled from 'styled-components';
import { AuthNavigationComponentProps } from '../../utils/navigation';

const StyledLinks = styled(Link)`
  a {
    font-size: 20px;
  }
`;

const A = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryWhite};
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.spartan};
  font-size: 20px;
  font-weight: 800;
  padding: 1rem;

  svg {
    fill: ${({ activated, theme }) =>
      activated == Activated.ON
        ? theme.colors.primaryBlue
        : theme.colors.primaryWhite};

    margin-right: 0.7rem;
  }
`;

const AuthNavigationComponent: React.FC<AuthNavigationComponentProps> = ({
  text,
  path,
  svgComponent,
  activated = Activated.OFF,
}) => {
  return (
    <>
      <StyledLinks href={path} activated={activated}>
        <A activated={activated}>
          {svgComponent}
          {text}
        </A>
      </StyledLinks>
    </>
  );
};

export default AuthNavigationComponent;
