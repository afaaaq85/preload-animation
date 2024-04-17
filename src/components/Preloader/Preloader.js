import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  const [counter, setCounter] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    let startTime = 0;
    const delay = 100;

    function startLoader() {
      let counterElement = document.querySelector(".counter");
      let currentValue = 0;

      function updateCounter(timestamp) {
        if (!startTime) {
          startTime = timestamp;
        }

        const deltaTime = timestamp - startTime;

        if (deltaTime > delay && currentValue < 100) {
          currentValue += Math.floor(Math.random() * 10) + 1;

          if (currentValue >= 100) {
            currentValue = 100;
          }

          counterElement.textContent = currentValue;
          startTime = timestamp;
        }

        if (currentValue < 100) {
          requestAnimationFrame(updateCounter);
        } else {
          // Animation finished, set state
          setTimeout(() => {
            
            setAnimationFinished(true);
          }, 4000);
        }
      }

      requestAnimationFrame(updateCounter);
    }

    startLoader();

    gsap.to(".counter", 0.25, {
      delay: 3.5,
      opacity: 0,
    });

    gsap.to(".bar", 1.5, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });

    gsap.from(".h1", 1.5, {
      delay: 3.5,
      y: 100,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
  }, []);




  return (
    <>
      <h1 className="counter">
        <p>{counter}</p>
      </h1>
      <div className={`${!animationFinished ? 'overlay' : ''}`}>
      
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
     
    </>
  );
};

export default Preloader;
