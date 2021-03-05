import React from "react";
import { Link } from "react-router-dom";

export default function ActorsScreen() {
  return (
    <div>
      <h1>Actors Screen</h1>
      <ul>
        <li>
          <Link to="Keanu">Keanu Reeves</Link>
        </li>
        <li>
          <Link to="chuck-norris">Chuck Norris</Link>
        </li>
        <li>
          <Link to="brie-larson">Brie Larson</Link>
        </li>
      </ul>
    </div>
  );
}
