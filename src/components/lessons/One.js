import React from 'react';
import { Link, Route } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/foods`}>Food Items</Link>
      </li>
      <li>
        <Link to={`${match.url}/vegetables`}>Vegetables</Link>
      </li>
    </ul>
    <Route path="/lesson1/topics/:id" component={Vegetables} />
    <Route
      path={`${match.url}`}
      exact
      render={() => <h3>Please select a topic</h3>}
    />
  </div>
);

const Vegetables = () => (
  <div>
    <h3>Vegetables</h3>
  </div>
);

const One = () => (
  <div>
    <h2>Router Basics </h2>
    <ul>
      <li>
        <Link to="/lesson1">Home</Link>
      </li>
      <li>
        <Link to="/lesson1/about">About</Link>
      </li>
      <li>
        <Link to="/lesson1/topics">Topics</Link>
      </li>
    </ul>
    <hr />
    <Route path="/lesson1" exact component={Home} />
    <Route path="/lesson1/topics" component={Topics} />
    <Route path="/lesson1/about" component={About} />
  </div>
);

export default One;
