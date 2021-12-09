import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div key={id} className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
      <img
        alt="robots"
        src={`https://res.cloudinary.com/luizalvino/image/upload/h_200,w_200/robohash/${id}.webp`}
        srcSet={`https://res.cloudinary.com/luizalvino/image/upload/h_200,w_200/robohash/${id}.webp 200w, https://res.cloudinary.com/luizalvino/image/upload/h_400,w_400/robohash/${id}.webp 1080w`}
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
