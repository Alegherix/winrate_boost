import React from 'react';
import { StyledHeader } from './HeroHeading';
import styled from 'styled-components';
import FeatureCards from './FeatureCard';
import cards from '../utils/features';
import RegisterButton from './ButtonComponent';

interface FeaturesProps {}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 0 1rem;

  h1 {
    margin: auto;
  }

  p {
    padding: 0 1.4rem;
    margin: 0.6rem 0;
  }
`;

const StyledHeaderText = styled(StyledHeader)`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.primaryBlue};
`;

const Cardholder = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0;
  justify-content: center;
`;

const StyledInvitation = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondaryWhite};
  font-family: ${({ theme }) => theme.fonts.spartan};
  margin: auto;
  margin-top: 0.6rem;
  margin-bottom: 1rem;
`;

const Features: React.FC<FeaturesProps> = ({}) => {
  return (
    <>
      <StyledSection>
        <StyledHeaderText>Tired of losing?</StyledHeaderText>
        <p>
          Don’t worry everybody can become a winner. Heres what we can offer
          you!
        </p>
        <Cardholder>
          {cards.map(({ heading, text, path }) => {
            return (
              <FeatureCards
                key={String(text)}
                heading={heading}
                text={text}
                img={path}
              />
            );
          })}
        </Cardholder>
        <StyledInvitation>And so much more...</StyledInvitation>
        <RegisterButton text="Sign up for free now" />
      </StyledSection>
    </>
  );
};

export default Features;
