import React from 'react';
import Link from 'next/link';
import AuthNavigationComponent from './AuthNavigationComponent';
import { Activated } from '../../utils/Constants';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <AuthNavigationComponent
                text="Dashboard"
                path="/dashboard"
                imagePath="/icons/facebook.svg"
                altText="Image of Dashboard Icon"
                activated={Activated.ON}
              />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
