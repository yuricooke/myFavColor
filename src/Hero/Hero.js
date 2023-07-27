import React, { useEffect } from "react";
import { newThemeColor } from "../themeUtils";

function Hero() {
  useEffect(() => {
    newThemeColor();

    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        newThemeColor();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="bg-dark py-1 rounded-top">
          <div className="d-flex justify-content-start">
            <div className="browser-circle red m-1"></div>
            <div className="browser-circle yellow m-1"></div>
            <div className="browser-circle green m-1"></div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="hero p-5">
          <h1 className="bgHero p-1">Welcome home!</h1>
        </div>
        <div className="p-5">
          <h2 className="text_primary mb-3">Your color style!</h2>
          <p>In this template you can preview how your favorite colors are applied on a single page applications. Therefore, you can decide the best collor palette for your project or business! 
          
          </p>
          <h5 className="text_primary">HAVE FUN!</h5>
          <button
            className="btn btn-pill btn-outline-accent mt-3"
            onClick={newThemeColor}
          >
            New Pallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
