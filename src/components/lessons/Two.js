import React from 'react';
import { Link, Route } from 'react-router-dom';

const Child = ({ match }) => (
  <div>
    <h2>{match.params.id.toUpperCase()}</h2>
  </div>
);

const Two = ({ match }) => (
  <div>
    <h2>Accounts</h2>
    <ul>
      <li>
        <Link to={`${match.url}/netflix`}>Netflix</Link>
      </li>
      <li>
        <Link to={`${match.url}/zillow-group`}>Zillow Group</Link>
      </li>
      <li>
        <Link to={`${match.url}/yahoo`}>Yahoo</Link>
      </li>
      <li>
        <Link to={`${match.url}/modus-create`}>Modus Create</Link>
      </li>
    </ul>
    <Route path={`${match.url}/:id`} component={Child} />
  </div>
);

export default Two;
