import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="row justify-content-between">
        <div className="col-2">
          <img src="/assets/img/logo.png" alt="logo" />
        </div>
        <div className="col-6 align-self-center text-right">
          <a href="#" className="text-white lead">
            Get Early Access
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
