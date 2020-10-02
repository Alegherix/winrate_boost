import React from 'react';
import AuthNavigation from '../components/authenticated/AuthNavigation';

interface dashboardProps {}

const dashboard: React.FC<dashboardProps> = ({}) => {
  return (
    <>
      <div>
        <AuthNavigation />
      </div>
    </>
  );
};

export default dashboard;
