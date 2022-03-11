import React from "react";
import { FaArrowDown } from "react-icons/fa";
const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        background: "url('/images/header-img.jpg') center center/cover fixed",
      }}
      className="h-screen "
    >
      <div className="text-white text-center absolute left-2/4 top-[45%] -translate-x-2/4 -translate-y-2/4 text-shadow">
        <h1 className="text-6xl font-medium  mb-5">Infinite Loop</h1>
        <p className="text-xl mb-3 leading-10">
          Tailwind 3.0 Parallax Theme <br />
          Free HTML Template TOOPLATE
        </p>
      </div>

      <button className="bg-main-color py-[15px] px-10  text-white absolute left-2/4 -translate-x-2/4 -translate-y-2/4  bottom-32 flex items-center justify-center transition ease-linear hover:scale-125 hover:bg-alt-color">
        <FaArrowDown className="text-4xl font-bold" />
      </button>
    </section>
  );
};

export default Hero;

// flex flex-col items-center justify-center gap-y-20
