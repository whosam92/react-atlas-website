import React from "react";

const Footer = () => {
  return (
    <div className="jumbotron jumbotron-fluid" id="copyright">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 text-white align-self-center text-center text-md-left my-2">
            Copyright © {new Date().getFullYear()} Chen, Yi-Ya.
          </div>
          <div
            className="col-md-6 align-self-center text-center text-md-right my-2"
            id="social-media"
          >
            <a href="#" className="d-inline-block text-center ml-2">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="d-inline-block text-center ml-2">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="d-inline-block text-center ml-2">
              <i className="fa fa-medium"></i>
            </a>
            <a href="#" className="d-inline-block text-center ml-2">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
