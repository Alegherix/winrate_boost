import React from 'react';
import { Activated } from '../../utils/Constants';
import Link from 'next/link';
import styled from 'styled-components';
import { Assignment } from '../svg_components';

interface AuthNavigationComponentProps {
  text: String;
  path: string;
  imagePath: string;
  altText: string;
  activated: Activated;
}

const StyledLinks = styled(Link)`
  a {
    font-size: 20px;
  }
`;

const AuthNavigationComponent: React.FC<AuthNavigationComponentProps> = ({
  text,
  path,
  imagePath,
  altText,
  activated = Activated.ON,
}) => {
  return (
    <>
      <StyledLinks href={path} activated={activated}>
        <a>
          <Assignment />
          {text}
        </a>
      </StyledLinks>
    </>
  );
};

export default AuthNavigationComponent;
