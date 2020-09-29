import React from 'react';
import styled from 'styled-components';
import Img from '../assets/soldier.jpg';
import { device } from '../utils/breakpoints';
import { StyledHeader } from './HeroHeading';
import RegisterButton from '../components/ButtonComponent';

interface MainProps {}

const StyledSection = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.secondaryDark};

  h1 {
    text-align: center;
  }

  @media ${device.mobileMin} {
    p {
      font-size: 14px;
    }
  }

  @media ${device.mobileM} {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 16px;
    }
  }

  @media ${device.mobileL} {
    p {
      font-size: 20px;
    }
  }

  @media ${device.tablet} {
    h1 {
      font-size: 70px;
    }

    p {
      font-size: 26px;
    }
  }
`;

const StyledHeading = styled(StyledHeader)`
  margin-top: 3rem;

  /* Used for giving underline to heading */
  span {
    color: ${({ theme }) => theme.colors.primaryBlue};
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.primaryBlue} `};
    display: inline-block;
    line-height: 0.85;
  }
`;

const MotivationSection = styled.section`
  margin-top: 1rem;
  text-align: center;
  span {
    color: ${({ theme }) => theme.colors.primaryWhite};
    font-family: ${({ theme }) => theme.fonts.spartan};
    font-weight: 700;
    font-size: 16px;
    display: inline-block;
    text-align: center;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 14px;
    margin-bottom: 1.8rem;
    text-align: start;
    color: ${({ theme }) => theme.colors.secondaryWhite};
  }
`;

const Main: React.FC<MainProps> = ({}) => {
  return (
    <>
      <StyledSection>
        <StyledHeading>
          Unlock your <span>potential</span>
        </StyledHeading>

        <MotivationSection>
          <span>Learn from the pro's</span>
          <p>
            Learn the secrets of what the pro’s are doing, and start
            implementing it in your own playstyle
          </p>
          <span>Visualize Progress</span>
          <p>
            Log your journey and watch your progress advance in realtime with
            personalized data graphs
          </p>
          <span>Take it to the next level</span>
          <p>
            Hypercharge your journey from novice to expert with the best
            practices available. Get you to where you wanna go as fast as
            possible
          </p>
        </MotivationSection>
        <RegisterButton text="Sign up for free now" />
      </StyledSection>
    </>
  );
};

export default Main;

{
  /* <p>
No more wasting time! Discover the most efficent ways to rapidly
increase your performance, become a winner today!
</p> */
}
