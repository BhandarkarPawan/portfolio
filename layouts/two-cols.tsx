import React from 'react';

export const TwoColsLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-green-500  w-1/3"></div>
      <div className="bg-red-500 w-2/3"></div>
    </div>
  );
};
