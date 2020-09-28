import React from 'react';
import styled from 'styled-components';
// import FacebookIcon from './IconComponent';

interface FooterProps {}

const StyledContainer = styled.footer`
  /* height: 80px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.4rem;

  /* background-color: ${({ theme }) => theme.colors.tertiaryWhite}; */
`;

const LogoContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.img`
  height: 30px;
  width: 30px;
  margin: 1.2rem 1rem;

  /* fill: green; */
`;

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
      <StyledContainer>
        <LogoContainer>
          <ImageContainer src={'/icons/facebook.svg'} />
          <ImageContainer src={'/icons/twitter.svg'} />
          <ImageContainer src={'/icons/instagram.svg'} />
          <ImageContainer src={'/icons/youtube.svg'} />
        </LogoContainer>
        <p>Copyright © 2020</p>
      </StyledContainer>
    </>
  );
};

export default Footer;
