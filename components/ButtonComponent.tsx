import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/breakpoints';
import { Color } from '../utils/Constants';

interface RegisterButtonProps {
  text: String;
  color?: Color;
}

const StyledRegisterButton = styled.button`
  background: ${({ theme }) => theme.colors.primaryBlue};
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-size: 18px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 1rem;

  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }

  :focus {
    outline: none;
  }

  @media ${device.mobileMin} {
    height: 40px;
  }

  @media ${device.mobileM} {
    height: 45px;
  }

  @media ${device.tablet} {
  }
`;

export const DarkButton = styled(StyledRegisterButton)`
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;

const RegisterButton: React.FC<RegisterButtonProps> = ({ text, color }) => {
  let button;

  switch (color) {
    case Color.Dark:
      button = <DarkButton>{text}</DarkButton>;
      break;

    default:
      button = <StyledRegisterButton>{text}</StyledRegisterButton>;
      break;
  }
  return <>{button}</>;
};

export default RegisterButton;
