import React from "react";

const Services = ({ data }) => {
  const { name, description, icon } = data;
  return (
    <div className="card  bg-base-100 border border-primary shadow-xl ">
      <figure className="px-10 pt-10">
        <img src={icon} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-neutral">{name}</h2>
        <p className="text-accent">{description}</p>
      </div>
    </div>
  );
};

export default Services;
