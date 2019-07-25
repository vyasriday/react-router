import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LessonsList = () => {
  return (
    <WrapperDIV>
      <h1>React Router </h1>
      <ul>
        <li>
          <Link to="/lesson1">Lesson 1 [Basics] </Link>
        </li>
        <li>
          <Link to="/lesson2">Lesson 2 [URL Paramters]</Link>
        </li>
        <li>
          <Link to="/lesson3">Lesson 3 [Nested Routes]</Link>
        </li>
      </ul>
    </WrapperDIV>
  );
};

const WrapperDIV = styled.div`
  h1 {
    background: rgba(100, 140, 210, 0.42);
    padding: 6px 2px;
    border-radius: 4px;
  }
  ul {
    list-style-type: none;
    li {
      margin: 10px 6px;
      transition: 500ms all;
      &:hover {
        background: skyblue;
        padding: 4px 6px;
      }
      a {
        text-decoration: none;
        color: black;
        text-transform: uppercase;
        line-height: 1.2;
        word-spacing: 2px;
        letter-spacing: 1px;
      }
    }
  }
`;

export default LessonsList;
