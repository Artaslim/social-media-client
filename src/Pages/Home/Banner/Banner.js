import React from "react";
import img2 from "../../../images/Female1.png";

const Banner = () => {
  return (
    <div className="hero  bg-secondary">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img2}
          alt="female"
          className=" rounded-lg lg:w-1/2  shadow-2xl "
        />
        <div>
          <h1 className="text-2xl md:text-5xl font-bold text-accent  ">
            Gain <span className="text-neutral">Benefit</span> From Your
            Follower
          </h1>
          <p className="py-2 md:py-6 text-accent w-3/4">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary hover:btn-neutral">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
