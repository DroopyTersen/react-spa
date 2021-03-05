import React from "react";
import { useParams } from "react-router-dom";

export default function ActorDetailsScreen() {
  let { id } = useParams();
  return (
    <div>
      <h1>Actor Details: {id}</h1>
    </div>
  );
}
