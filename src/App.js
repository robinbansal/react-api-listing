import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ListPage from './ListPage';
import DetailsPage from './DetailsPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ListPage} />
          <Route path="/details/:id" component={DetailsPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
