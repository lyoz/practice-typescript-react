import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Members from './containers/Members';

import './App.css';

const title = 'members of companies';

const App: React.FC = () => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:companyName/members" component={Members} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
