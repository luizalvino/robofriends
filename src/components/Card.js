import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div key={id} className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
      <img
        alt="robots"
        src={`https://robohash.org/${id}?size=200x200`}
        srcSet={`https://robohash.org/${id}?size=200x200 200w, https://robohash.org/${id}?size=400x400 1080w`}
        width="200"
        height="200"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
