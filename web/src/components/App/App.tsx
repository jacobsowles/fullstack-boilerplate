import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '@components/Footer';
import Router from '@components/Router';
import './App.scss';

library.add(faCube, faGithub, faQuestionCircle);

const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <Router />
      <Footer>
        <Footer.Content>&copy; Project Name 2018</Footer.Content>
        <Footer.Content pullRight>
          <a href="https://github.com/jacobsowles/social-sidekick">
            <FontAwesomeIcon icon={faGithub} title="This project on GitHub" />
            This project on GitHub
          </a>
        </Footer.Content>
      </Footer>
    </div>
  );
};

export default App;
