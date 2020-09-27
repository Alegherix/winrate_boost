import React, { Ref, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Color } from '../utils/Constants';
import ButtonComponent, { StyledRegisterButton } from './ButtonComponent';

interface LinkButtonProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  ref?: Ref<HTMLAnchorElement>;
  href?: string;
  text: string;
  color?: Color;
}

const Registerbutton = styled(StyledRegisterButton)`
  width: 100%;
  font-size: 16px;
  background-color: ${({ color, theme }) => {
    switch (color) {
      case Color.lightDark:
        return theme.colors.lightDark;
        break;
      default:
        return theme.colors.primaryBlue;
    }
  }};
`;

const LinkButton: React.FC<LinkButtonProps> = React.forwardRef(
  ({ onClick, href, text, color }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <Registerbutton color={color}>{text}</Registerbutton>
      </a>
    );
  }
);

export default LinkButton;

//https://nextjs.org/docs/api-reference/next/link
