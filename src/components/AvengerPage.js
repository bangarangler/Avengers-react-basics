import React from "react";

import { Route, Link } from "react-router-dom";

import AvengerDetails from "./AvengerDetails";
import AvengerMovies from "./AvengerMovies";

const avengerPage = props => {
  const id = props.match.params.id;
  const avenger = props.avengers.find(avenger => `${avenger.id}` === id);
  return (
    <>
      <img src={avenger.img} alt={avenger.name} />
      <div>
        <h1>{avenger.name}</h1>
        <h4>({avenger.nickname})</h4>

        <Link to={`/avengers/${props.match.params.id}/details`}>
          Avenger Details
        </Link>
        <Link to={`/avengers/${props.match.params.id}/movies`}> Movies </Link>
        <Route
          path="/avengers/:id/details"
          render={props => (
            <AvengerDetails {...props} description={avenger.description} />
          )}
        />
        <Route
          path="/avengers/:id/movies"
          render={props => <AvengerMovies movies={avenger.movies} />}
        />
      </div>
    </>
  );
};

export default avengerPage;
