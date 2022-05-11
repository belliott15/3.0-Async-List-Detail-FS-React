import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import List from './List';
import Detail from './Detail';

export default function App() {
  const [something, setSomething] = useState([]);


  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
