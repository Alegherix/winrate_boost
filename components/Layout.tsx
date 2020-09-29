import React from 'react';
import styled from 'styled-components';

interface LayoutProps {}

const StyledLayout = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <>
      <StyledLayout></StyledLayout>
    </>
  );
};

export default Layout;
