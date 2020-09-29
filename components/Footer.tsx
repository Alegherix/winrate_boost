import React from 'react';
import styled from 'styled-components';

interface FooterProps {}

const StyledContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.4rem;

  p {
    font-size: 13px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.img`
  height: 30px;
  width: 30px;
  margin: 1.2rem 1rem;
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
