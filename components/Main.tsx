import React from 'react';
import styled from 'styled-components';
import Img from '../assets/soldier.jpg';
import { device } from '../utils/breakpoints';
import { StyledHeader } from './HeroHeading';

interface MainProps {}

const ImageContainer = styled.header`
  width: 100%;
  height: 80%;
  background: url(${Img}) no-repeat center center/cover;
  opacity: 0.15;
  z-index: -1;
  position: absolute;
`;

const StyledSection = styled.main`
  display: flex;
  flex-direction: column;
  height: 80vh;
  padding: 0 3rem;

  @media ${device.mobileMin} {
    p {
      font-size: 14px;
    }
  }

  @media ${device.mobileM} {
    p {
      font-size: 16px;
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
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    color: ${({ theme }) => theme.colors.primaryWhite};
    font-weight: bold;
    /* font-size: 12px; */
  }
`;
const Main: React.FC<MainProps> = ({}) => {
  return (
    <>
      <ImageContainer />
      <StyledSection>
        <StyledHeading>
          Unlock your <span>potential</span>
        </StyledHeading>
        <p>
          No more wasting time! Discover ways to rapidly increase your
          performance in the most efficent way.
        </p>
        <MotivationSection>
          <p>- Learn the secrets of what the pro’s are doing</p>
          <p>
            - Watch your progress advance in realtime with personalized data
            graphs
          </p>
          <p>
            - Hypercharge your journey from novice to expert with best practices{' '}
          </p>
        </MotivationSection>
      </StyledSection>
    </>
  );
};

export default Main;
