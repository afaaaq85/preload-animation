import React from "react";
import { gsap } from "gsap";

const Homepage = () => {
  // Function to handle hover event
  const handleHover = (event) => {
    gsap.to(event.target, { rotationY: 150 }); // Adjust rotationX value as needed
  };

  // Function to handle mouse leave event
  const handleMouseLeave = (event) => {
    gsap.to(event.target, { rotationY: 0 });
  };

  return (
    <div className="container-home d-flex align-items-center justify-content-center ">
      <nav className="bg-dark">
        <div className="menu text-light">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#playground">Playground</a>
        </div>
      </nav>
      <div className="header">
        <div className="h1" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          a
        </div>
        <div className="h1" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          f
        </div>
        <div className="h1" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          a
        </div>
        <div className="h1" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          q
        </div>
      </div>
    </div>
  );
};

export default Homepage;
