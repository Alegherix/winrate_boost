import React from 'react';
import AuthNavigationComponent from './AuthNavigationComponent';
import { Assignment } from '../svg_components';
import { Activated } from '../../utils/Constants';
import AuthNavItems from "../../utils/navigation"


interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <>
      <div>
        <nav>
          <ul>
            {AuthNavItems.map( ({text, path, svgComponent, activated}) => {
              return(
                <li key={path}>
                  <AuthNavigationComponent text={text} path={path} svgComponent={svgComponent} activated={activated}/>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;

<li>
<AuthNavigationComponent
  text="Dashboard"
  path="/dashboard"
  activated={Activated.OFF}
  svgComponent ={<Assignment />}
/>
</li>