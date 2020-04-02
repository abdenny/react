import React from 'react';
import Header from './Header';
import Footer from './Footer';

const componentName = props => {
  return (
    <>
      <Header />
      <br />
      {props.children} <br />
      <Footer />
      <br />
    </>
  );
};

export default componentName;
