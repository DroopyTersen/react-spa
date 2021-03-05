import React from "react";
import { useParams } from "react-router-dom";

export default function MovieDetailsScreen() {
  let { id } = useParams();
  return (
    <div>
      <h1>Movie Details: {id}</h1>
    </div>
  );
}
