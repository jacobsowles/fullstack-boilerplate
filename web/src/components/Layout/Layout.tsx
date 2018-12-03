import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';

import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import Routes from '@components/Routes';
import './Layout.scss';

interface LayoutProps {
  handleAuthCallback: (...args: any[]) => any;
}

const Layout: FunctionComponent<LayoutProps> = ({ handleAuthCallback }) => {
  return (
    <div className="layout">
      <Navbar />
      <Routes handleAuthCallback={handleAuthCallback} />
      <Footer>
        <Footer.Content>&copy; Project Name 2018</Footer.Content>
        <Footer.Content pullRight>
          <a href="https://github.com/jacobsowles/social-sidekick">
            <FontAwesomeIcon icon={['fab', 'github']} title="This project on GitHub" />
            This project on GitHub
          </a>
        </Footer.Content>
      </Footer>
    </div>
  );
};

export default Layout;