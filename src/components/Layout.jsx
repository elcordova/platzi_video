import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = withRouter(({ children, location }) => (
  <div className='app'>
    <Header path={location.pathname} />
    {children}
    <Footer />
  </div>
));

export default Layout;
