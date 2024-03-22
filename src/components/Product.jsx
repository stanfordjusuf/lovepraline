import React from "react";

export default function Product() {
  return (
    <>
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <img
            src={
              "https://i.ibb.co/t2cSPQy/Screenshot-2024-03-22-at-21-46-22.png"
            }
            alt="Logo"
          />
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 lg:text-9xl font-black grid place-content-center sm:text-7xl">
            THE APP 🚀
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <img
            src={
              "https://i.ibb.co/Yd4dVj9/Screenshot-2024-03-22-at-21-36-51.png"
            }
            alt="Logo"
          />
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 lg:text-9xl font-black grid place-content-center sm:text-7xl">
            THE PROTOTYPE 🤖
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <img
            src={
              "https://i.ibb.co/S7mqnvH/Screenshot-2024-03-22-at-21-39-46.png"
            }
            alt="Logo"
          />
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 lg:text-9xl font-black grid place-content-center sm:text-7xl">
            THE CODE 👾
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </>
  );
}
