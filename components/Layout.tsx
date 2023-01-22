import React, { useState } from 'react';
import { Layout } from '../interfaces';
import Header from './Header';

const Layout = ({ children }: Layout) => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
  };
  return (
    <div className={`${dark ? 'dark' : ''}`}>
      <Header toggleDark={toggleDark} />
      {children}
    </div>
  );
};

export default Layout;
