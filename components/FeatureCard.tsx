import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/breakpoints';

interface FeatureCardsProps {
  heading: String;
  text: String;
  img: string;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  width: 45%;
  margin: 0.8rem;

  img {
    height: 60px;
    width: 60px;
    margin: auto;
    /* fill: red; */
    /* background: white; */
  }

  .imageContainer {
    display: flex;
    align-items: center;
    justify-content: center;
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
    color: ${({ theme }) => theme.colors.primaryBlue};
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
          <div className="imageContainer">
            <img src={img} />
          </div>
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
