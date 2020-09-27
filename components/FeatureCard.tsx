import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/breakpoints';

interface FeatureCardsProps {
  heading: String;
  text: String;
  img: string;
}

const Card = styled.div`
  min-width: 300px;
  width: 45%;
  display: flex;
  flex-direction: column;
  margin: 0.8rem;
  border-radius: 10px;
  box-shadow: 2px 2px 7px 4px rgb(40, 40, 40);

  img {
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.2;
  }

  .container {
    display: inline-block;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: 10px;
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    z-index: -1;
  }

  h2 {
    margin: auto;
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
    color: ${({ theme }) => theme.colors.primaryWhite};
    font-family: ${({ theme }) => theme.fonts.spartan};
    font-size: 16px;
    font-weight: 800;
  }

  p {
    color: ${({ theme }) => theme.colors.secondaryWhite};
    font-size: 14px;
  }

  @media ${device.mobileM} {
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 14px;
    }
  }

  @media ${device.mobileL} {
    p {
      font-size: 20px;
    }
  }

  @media ${device.tablet} {
    h2 {
      font-size: 28px;
    }

    p {
      font-size: 22px;
    }
  }
`;

const FeatureCards: React.FC<FeatureCardsProps> = ({ heading, text, img }) => {
  return (
    <>
      <Card img={img}>
        <div className="container">
          <img src={img} />
          <div className="contentContainer">
            <h2>{heading}</h2>
            <p>{text}</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default FeatureCards;
