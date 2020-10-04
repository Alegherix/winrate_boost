import React from 'react';
import AuthNavigationComponent from './AuthNavigationComponent';
import { Assignment } from '../svg_components';
import { Activated } from '../../utils/Constants';
import AuthNavItems from '../../utils/navigation';
import styled from 'styled-components';

interface NavigationProps {
  activated: Activated;
}

const Nav = styled.nav`
  width: 240px;
  height: 100vh;
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.secondaryDark};

  section {
    height: 150px;
    color: ${({ theme }) => theme.colors.primaryWhite};
    font-family: ${({ theme }) => theme.fonts.spartan};
    font-weight: 800;
    font-size: 20px;
    text-align: center;
    padding: 2rem 0;
  }

  .navIcons {
    flex: 1;
  }

  .settingsIcons {
    p {
      color: ${({ theme }) => theme.colors.primaryWhite};
      font-size: 20px;
      font-weight: 800;
      padding: 1.5rem;
    }
  }
`;

const Separator = styled.div`
  height: 1px;
  width: 90%;
  background-color: #c4c4c4;
  margin: auto;
  margin-top: 1rem;
`;

const Navigation: React.FC<NavigationProps> = ({ activated }) => {
  return (
    <Nav>
      <section>Headshot</section>
      <div className="navIcons">
        <ul>
          {AuthNavItems.map(({ text, path, svgComponent }) => {
            return (
              <li key={path}>
                <AuthNavigationComponent
                  text={text}
                  path={path}
                  svgComponent={svgComponent}
                  activated={activated}
                />
              </li>
            );
          })}
        </ul>
        <Separator />
      </div>
      <div className="settingsIcons">
        <p>Settings</p>
        <p>Sign out</p>
      </div>
    </Nav>
  );
};

export default Navigation;
