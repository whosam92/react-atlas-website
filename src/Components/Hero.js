import React from "react";

const Hero = () => {
  return (
    <div
      className="jumbotron jumbotron-fluid"
      id="banner"
      style={{ backgroundImage: "url(/assets/img/banner-bk.jpg)" }}
    >
      <div className="container text-center text-md-left">
        <h1 className="display-3 text-white font-weight-bold my-5">
          A New Way
          <br />
          To Start Business
        </h1>
        <p className="lead text-white my-4">
          Lorem ipsum dolor sit amet, id nec enim autem oblique, ei dico
          mentitum duo.
          <br /> Illum iusto laoreet his te. Lorem partiendo mel ex.
        </p>
        <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-green">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
