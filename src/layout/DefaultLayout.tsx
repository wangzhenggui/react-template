import React from 'react';

const DefaultLayout = ({ children = [] }) => {
  return (
    <>
      <h1>DefaultLayout</h1>
      {children}
    </>
  );
};

export default DefaultLayout;
