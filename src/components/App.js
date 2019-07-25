import React from 'react';
import LessonsList from './LessonsList';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import One from './lessons/One';
import Two from './lessons/Two';
import Three from './lessons/Three';

const App = () => {
  return (
    <Router>
      <div
        style={{
          padding: '4px 6px',
          borderRadius: '4px',
          border: '3px dotted black'
        }}
      >
        <Route path="/" exact component={LessonsList} />
        <Route
          path="/:id"
          render={() => (
            <h3>
              <Link to="/" style={{ color: 'red' }}>
                Back
              </Link>
            </h3>
          )}
        />
        <Route path="/lesson1" component={One} />
        <Route path="/lesson2" component={Two} />
        <Route path="/lesson3" component={Three} />
      </div>
    </Router>
  );
};

export default App;
