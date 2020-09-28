import React from 'react';

interface pricingProps {
  path: string;
}

const pricing: React.FC<pricingProps> = ({ path }) => {
  return (
    <>
      <div>
        <img src={path} alt="Vercel Logo" />
      </div>
    </>
  );
};

export default pricing;
