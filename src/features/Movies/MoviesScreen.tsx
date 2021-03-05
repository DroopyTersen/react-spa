import React from "react";
import { Link } from "react-router-dom";

export default function MoviesScreen() {
  return (
    <div>
      <h1>Movies Screen</h1>
      <ul>
        <li>
          <Link to="gladiator">Gladiator</Link>
        </li>
        <li>
          <Link to="the-matrix">The Matrix</Link>
        </li>
        <li>
          <Link to="training-day">Training Day</Link>
        </li>
      </ul>
    </div>
  );
}
