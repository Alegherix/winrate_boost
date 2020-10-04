import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/breakpoints';
import { Card as CardProp } from '../utils/features';

// interface FeatureCardsProps {
//   heading: String;
//   text: String;
//   svgComponent: React.SVGProps<SVGSVGElement>;
// }

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  width: 45%;
  margin: 0.8rem;
  border-radius: 10px;
  box-shadow: -4px -4px 12px rgba(53, 53, 53, 0.25);
  padding: 1rem;
  svg {
    height: 60px;
    width: 60px;
    margin: auto;
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

const FeatureCards: React.FC<CardProp> = ({ heading, text, svgComponent }) => {
  return (
    <>
      <Card>
        <div className="container">
          <div className="imageContainer">{svgComponent}</div>
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
