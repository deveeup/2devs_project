import React from 'react';
import Header from './Header';
import '../assets/styles/components/Layout.scss';

const Layout = ({children}) => (
  <>
    <Header/>
    {children}
    <footer><p>footer</p></footer>
  </>
);

export default Layout;