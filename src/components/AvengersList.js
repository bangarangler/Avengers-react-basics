import React from "react";

//import { Link } from "react-router-dom";

function routeToAvenger(props, avenger) {
  props.history.push(`/avengers/${avenger.id}`);
}
const avengersList = props => {
  return (
    <>
      <h2>Avengers List</h2>
      {props.avengers.map(avenger => {
        return (
          <div key={avenger.id}>
            <img src={avenger.thumbnail} alt={avenger.name} />
            <h2>
              {/*<Link to={`/avengers/${avenger.id}`}>{avenger.name}</Link>*/}
              <div onClick={() => routeToAvenger(props, avenger)}>
                {avenger.name}
              </div>
            </h2>
            <h4>{avenger.name}</h4>
            <p>({avenger.nickname})</p>
          </div>
        );
      })}
    </>
  );
};

export default avengersList;
