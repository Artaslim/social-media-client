import React from "react";

const MediaCard = ({ socialCard }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={socialCard.image} alt="seo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-accent">{socialCard.content}</h2>
        <p className="text-accent">{socialCard.text}</p>
      </div>
    </div>
  );
};

export default MediaCard;
