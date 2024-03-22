import React from "react";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/R9zxv2j/Screenshot-2024-03-22-at-20-55-32.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            GIFTS SO GOOD 💝 EVEN YOUR GRANDMA WILL APPROVE 👵
          </h1>
          <p className="mb-5">
            Get a personalised love letter accompanied with mouthwatering
            chocolate treats with an easy questionnaire ❤️
          </p>
          <button className="btn btn-primary">I want to fall in love!</button>
        </div>
      </div>
    </div>
  );
}
