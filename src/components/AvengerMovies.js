import React from "react";

const avengerMovies = props => {
  return (
    <div>
      {props.movies.map(movie => (
        <div key={movie}>{movie}</div>
      ))}
    </div>
  );
};

export default avengerMovies;
