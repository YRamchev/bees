import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // NavLink,
  // Link,
} from 'react-router-dom';
// import * as pages from './pages';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
          {/* {Object.keys(pages).map((name, i) => (
            <Route path={`/${name.toLowerCase()}`} key={i}>
              {React.createElement(pages[name])}
            </Route>
          ))} */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
