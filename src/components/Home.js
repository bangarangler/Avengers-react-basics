import React from "react";

import { Link } from "react-router-dom";

const home = props => {
  return (
    <>
      <h1>Avengers Database!!!</h1>
      <h4>Danger! Classified Info</h4>
      <Link to="/avengers">Enter</Link>
    </>
  );
};

export default home;
