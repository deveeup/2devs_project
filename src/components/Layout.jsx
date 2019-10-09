import React from 'react';

const Layout = ({children}) => (
  <>
    <header><p>header</p></header>
      {children}
    <footer><p>footer</p></footer>
  </>
);

export default Layout;