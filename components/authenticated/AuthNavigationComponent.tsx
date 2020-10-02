import React from 'react';
import { Activated } from '../../utils/Constants';
import Link from 'next/link';
import { Url } from 'url';
import styled from 'styled-components';

interface AuthNavigationComponentProps {
  text: String;
  path: string;
  imagePath: string;
  altText: string;
  activated: Activated;
}

const StyledLinks = styled(Link)`
  display: flex;

  a {
    font-size: 20px;
  }
`;

const StyledImage = styled.img`
  margin-right: 1rem;
  fill: ${({ theme, activated }) =>
    activated == Activated.ON
      ? theme.colors.primaryWhite
      : theme.colors.primaryBlue};

  svg {
    fill: red;
  }
`;

const AuthNavigationComponent: React.FC<AuthNavigationComponentProps> = ({
  text,
  path,
  imagePath,
  altText,
  activated = Activated.OFF,
}) => {
  return (
    <>
      <StyledLinks href={path} activated={activated}>
        <a>
          <StyledImage src={imagePath} alt={altText} />
          {text}
        </a>
      </StyledLinks>
    </>
  );
};

export default AuthNavigationComponent;
