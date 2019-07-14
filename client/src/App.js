import React, { Fragment, useEffect } from 'react';
import Alert from './components/layout/Alert';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => {

  useEffect(() => {
    
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact pat='/' component={Landing} />
          <section className="container">
            <Alert />
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
