import React from 'react';
import { Link, Route } from 'react-router-dom';

const Three = ({ match }) => (
  <div>
    <hr />
    <ul>
      <li>
        <Link to="/lesson3">Home</Link>
      </li>
      <li>
        <Link to="/lesson3/topics">Topics</Link>
      </li>
    </ul>
    <Route
      path={`${match.url}`}
      exact
      render={() => (
        <div>
          <h2>Nested Routing in React Router</h2>
          <p>
            Here we will see how deeply nested routes actually work!!! For more
            see the topics
          </p>
        </div>
      )}
    />
    <hr />
    <Route path={`${match.url}/topics`} component={Topics} />
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/react-router`}>React Router</Link>
      </li>
      <li>
        <Link to={`${match.url}/react.js`}>React.js</Link>
      </li>
      <li>
        <Link to={`${match.url}/functional-programming`}>
          Functional Programming
        </Link>
      </li>
      <hr />
    </ul>
    <Route path={`${match.url}/:id`} component={TopicDetails} />
  </div>
);

const TopicDetails = ({ match }) => (
  <div>
    <h3>{match.params.id.toUpperCase()}</h3>
    <ul>
      <li>
        <Link to={`${match.url}/topics-details-1`}>Topics Details 1</Link>
      </li>
      <li>
        <Link to={`${match.url}/topics-details-2`}>Topic Details 2 </Link>
      </li>
    </ul>
    <hr />
    <Route
      path={`${match.url}/:id`}
      render={({ match }) => <h1>{`${match.params.id.toUpperCase()}`}</h1>}
    />
  </div>
);

export default Three;
