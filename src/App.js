import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';

import Menu from './Menu';
import Login from './Login';

const App = () => (
  <Fragment>
    <Menu />
    <Container>
      <Login />
    </Container>
  </Fragment>
);

export default App;
